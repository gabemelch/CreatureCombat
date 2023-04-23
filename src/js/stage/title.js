import { Stage, game, ColorLayer, BitmapText  } from 'melonjs';

class TitleScreen extends Stage {
    /**
     *  action to perform on state change
     */
    onResetEvent() {
        // Set the background color to light green
        game.world.addChild(new me.ColorLayer("background", "#", 0));

        // Add the title text
        game.world.addChild(new BitmapText(game.viewport.width / 2, game.viewport.height / 2,  {
            font : "PressStart2P",
            size : 4.0,
            textBaseline : "middle",
            textAlign : "center",
            text : "CREATURE COMBAT"
        }));
    }

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent() {
        // Remove all the UI elements from the title screen
        game.world.removeChild(this.backgroundLayer);
        game.world.removeChild(this.title);
    }
};

export default TitleScreen;
