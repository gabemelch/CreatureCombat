import * as me from 'melonjs';

class TitleScreen extends Stage {
    /**
     *  action to perform on state change
     */
    onResetEvent() {
        // Set the background color to light green
        me.game.world.addChild(new me.ColorLayer("background", "#8BC34A", 0));

        // Add the title text
        var title = new me.Text(0, 0, { font: "Bubblegum Sans", size: 72, fillStyle: "#000000" });
        title.setText("CREATURE COMBAT");
        title.pos.set(me.game.viewport.width / 2 - title.width / 2, me.game.viewport.height / 2 - title.height / 2);
        me.game.world.addChild(title);
    }

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent() {
        // Remove all the UI elements from the title screen
        me.game.world.removeChild(this.backgroundLayer);
        me.game.world.removeChild(this.title);
    }
};

export default TitleScreen;
