import * as me from './melonjs/melon.js';
// Define the title screen scene
var TitleScreen = me.Stage.extend({

    // Constructor
    init: function() {
        this._super(me.Stage, 'init');
    },

    // Called when the title screen is entered
    onResetEvent: function() {
        // Set the background color to light green
        me.game.world.addChild(new me.ColorLayer("background", "#8BC34A", 0));

        // Add the title text
        var title = new me.Text(0, 0, { font: "Bubblegum Sans", size: 72, fillStyle: "#000000" });
        title.setText("CREATURE COMBAT");
        title.pos.set(me.game.viewport.width / 2 - title.width / 2, me.game.viewport.height / 2 - title.height / 2);
        me.game.world.addChild(title);
    },

    // Called when the title screen is exited
    onDestroyEvent: function() {
        // Remove all the UI elements from the title screen
        me.game.world.removeChild(this.backgroundLayer);
        me.game.world.removeChild(this.title);
    }
});

// Initialize the game
var game = new me.Game({
    // Set the canvas element and renderer
    renderer: me.CanvasRenderer,
    // Set the screen size to fit the window
    autoScale: true,
    // Set the assets to preload
    loader: me.loader,
    // Define the initial state of the game
    states: {
        // Add the title screen to the game
        "title": new TitleScreen()
    },
    // Set the initial state of the game to the title screen
    startState: "title"
});

// Load the assets
game.onload = function() {
    me.loader.load({
        // Load the game assets
        // ...
    });
    // Start the game
    game.start();
};
