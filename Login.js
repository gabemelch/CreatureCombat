
// You can write more code here

/* START OF COMPILED CODE */

class Login extends Phaser.Scene {

	constructor() {
		super("Login");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(369, 306, 128, 128);
		rectangle_1.scaleX = 10;
		rectangle_1.scaleY = 10;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 7114296;

		// loginbutton
		const loginbutton = this.add.image(202, 494, "LogIn");
		loginbutton.scaleX = 2;
		loginbutton.scaleY = 2;

		// signupbutton
		const signupbutton = this.add.image(608, 491, "Signup");
		signupbutton.scaleX = 2;
		signupbutton.scaleY = 2;

		// text_1
		const text_1 = this.add.text(39, 57, "", {});
		text_1.text = "CREATURE COMBAT";
		text_1.setStyle({ "color": "#000000ff", "fontSize": "80px", "fontStyle": "bold", "stroke": "#d8850aff", "strokeThickness":6,"shadow.stroke":true});

		// text_2
		const enteremail = this.add.text(124, 187, "", {});
		text_2.text = "Please Enter Your Email";
		text_2.setStyle({ "backgroundColor": "#ffffffff", "color": "#000000ff", "fontSize": "40px", "stroke": "#000000ff", "strokeThickness":2});
		const emailelement = this.add.dom(125,180).createFromCache('emailform');
		emailelement.addListener('click');
		emailelement.on('click', function(event){
			//enter email text code
			
		});
		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
