
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class ButtonComp {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__ButtonComp"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {ButtonComp} */
	static getComponent(gameObject) {
		return gameObject["__ButtonComp"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;
	/** @type {this._onBet1Pressed} */
	callback;
	/** @type {this} */
	callbackContext;
	/** @type {string} */
	 = "";

	/* START-USER-CODE */

	// "this" is the ButtonComponent instance
 
// add down, over, and out input event handlers to the game object
this.gameObject.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,
	this.onInputDown, this);
  this.gameObject.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER,
	this.onInputOver, this);
  this.gameObject.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT,
	this.onInputOut, this);
  ...
  onInputDown() {
	// capture the button component
	ButtonComp.capturedButton = this;
   
	// update the down state flag
	this._isDown = false;
   
	// add a one-time up input handler to the scene
	this.gameObject.scene.input.once(Phaser.Input.Events.POINTER_UP,
	  this.onScenePointerUp, this);
   
	this.updateButtonImage();
  }
  ...
  onScenePointerUp() {
	const captured = ButtonComp.capturedButton;
   
	// clear the captured button component
	ButtonComp.capturedButton = null;
   
	// if a button is captured, only handle up events from that button
	if (captured !== this) {
	  return;
	}
	 
	// clear the previously captured button's down state flag
	this._isDown = false;
	 
	if (this._isOver) {
	  this.updateButtonImage();
	   
	  // a button "press" only counts if the pointer was released while it
	  // was also over that same button
	  if (this.callback) {
		this.callback.call(this.context, this);
	  }
	}
	 
	// if an over-non-captured-button is set while the captured button is
	// being released, handle input for that button as if the pointer just moved
	// over it
	const nonCaptured = ButtonComp.overNonCapturedButton;
	if (nonCaptured) {
	  ButtonComp.overNonCapturedButton = null;
	  nonCaptured.onInputOver();
	}
  }
  ...
  onInputOver() {
	const captured = ButtonComp.capturedButton;
	if (captured) {
	  if (captured === this) {
		this._isOver = true;
		this.updateButtonImage();
	  } else {
   
		ButtonComp.overNonCapturedButton = this;
	  }
	} else if (this.gameObject.scene.input.activePointer.primaryDown) {
	  ButtonComp.overNonCapturedButton = this;
	  this.gameObject.scene.input.once(Phaser.Input.Events.POINTER_UP,
		this.onScenePointerUp, this);
	} else {
	  this._isOver = true;
	  this.updateButtonImage();
	}
  }
  ...
  onInputOut() {
	const captured = ButtonComp.capturedButton;
	if (captured) {
	  if (captured === this) {
		this._isOver = false;
		this.updateButtonImage();
	  } else {
		// clear the non-captured button
		ButtonComp.overNonCapturedButton = null;
	  }
	} else {
	  // this button 
	  this._isOver = false;
	  this.updateButtonImage();
	}
  }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
