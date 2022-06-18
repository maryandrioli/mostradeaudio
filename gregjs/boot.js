window.onload = start;

function start(){ 
    WIDTH = 1332; 
    HEIGHT = 738; 

    FACTOR = 5;
    
    w = window.innerWidth * window.devicePixelRatio;
    h = window.innerHeight * window.devicePixelRatio;

    game = new Phaser.Game(WIDTH, HEIGHT, Phaser.CANVAS, "game");    
      
  	loadJson();
  	
    game.state.add("Boot", boot);
    game.state.add("Preloader", preloader);
    game.state.add("Game", gameMain);
    
    game.state.start("Boot");  
}

var boot = function(game){};
 
boot.prototype = {
    create: function(){
        game.stage.backgroundColor = '#053340';

        if (this.game.device.desktop){
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            
            this.scale.maxWidth = window.innerWidth * window.devicePixelRatio;
            this.scale.maxHeight = window.innerHeight * window.devicePixelRatio;
            
        } 
        
        else {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

            this.scale.maxWidth = window.innerWidth * window.devicePixelRatio;
            this.scale.maxHeight = window.innerHeight * window.devicePixelRatio;
            
            this.scale.forceOrientation(false, true);
        }


        game.state.start('Preloader');
    }
};

function loadJson(){
	
	audioVibes = {
	    spritemap: {
	        1 : { start: 0, end: FACTOR, loop: false },
	        2 : { start: FACTOR, end: FACTOR*2, loop: false },
	        3 : { start: FACTOR*2, end: FACTOR*3, loop: false },
	        4 : { start: FACTOR*3, end: FACTOR*4, loop: false },
	        5 : { start: FACTOR*4, end: FACTOR*5, loop: false },
        }
	};
	
	audioHarp = {
	    spritemap: {
	        1 : { start: 0, end: FACTOR, loop: false },
	        2 : { start: FACTOR, end: FACTOR*2, loop: false },
	        3 : { start: FACTOR*2, end: FACTOR*3, loop: false },
	        4 : { start: FACTOR*3, end: FACTOR*4, loop: false },
	        5 : { start: FACTOR*4, end: FACTOR*5, loop: false },
        }
	};
	
	audioBass = {
	    spritemap: {
	        1 : { start: 0, end: FACTOR, loop: false },
	        2 : { start: FACTOR, end: FACTOR*2, loop: false },
	        3 : { start: FACTOR*2, end: FACTOR*3, loop: false },
	        4 : { start: FACTOR*3, end: FACTOR*4, loop: false },
	        5 : { start: FACTOR*4, end: FACTOR*5, loop: false },
        }
	};
	
	audioPizz = {
	    spritemap: {
	        1 : { start: 0, end: FACTOR, loop: false },
	        2 : { start: FACTOR, end: FACTOR*2, loop: false },
	        3 : { start: FACTOR*2, end: FACTOR*3, loop: false },
	        4 : { start: FACTOR*3, end: FACTOR*4, loop: false },
	        5 : { start: FACTOR*4, end: FACTOR*5, loop: false },
        }
	};
	
	audioTuba = {
	    spritemap: {
	        1 : { start: 0, end: FACTOR, loop: false },
	        2 : { start: FACTOR, end: FACTOR*2, loop: false },
	        3 : { start: FACTOR*2, end: FACTOR*3, loop: false },
	        4 : { start: FACTOR*3, end: FACTOR*4, loop: false },
	        5 : { start: FACTOR*4, end: FACTOR*5, loop: false },
        }
	};
	
	audioDrums = {
	    spritemap: {
	        1 : { start: 0, end: FACTOR, loop: false },
	        2 : { start: FACTOR, end: FACTOR*2, loop: false },
	        3 : { start: FACTOR*2, end: FACTOR*3, loop: false },
	        4 : { start: FACTOR*3, end: FACTOR*4, loop: false },
	        5 : { start: FACTOR*4, end: FACTOR*5, loop: false },
        }
	};
	
	audioOud = {
	    spritemap: {
	        1 : { start: 0, end: FACTOR, loop: false },
	        2 : { start: FACTOR, end: FACTOR*2, loop: false },
	        3 : { start: FACTOR*2, end: FACTOR*3, loop: false },
	        4 : { start: FACTOR*3, end: FACTOR*4, loop: false },
	        5 : { start: FACTOR*4, end: FACTOR*5, loop: false },
        }
	};
	
	audioGlock = {
	    spritemap: {
	        1 : { start: 0, end: FACTOR, loop: false },
	        2 : { start: FACTOR, end: FACTOR*2, loop: false },
	        3 : { start: FACTOR*2, end: FACTOR*3, loop: false },
	        4 : { start: FACTOR*3, end: FACTOR*4, loop: false },
	        5 : { start: FACTOR*4, end: FACTOR*5, loop: false },
        }
	};
	audioKalimba = {
	    spritemap: {
	        1 : { start: 0, end: FACTOR, loop: false },
	        2 : { start: FACTOR, end: FACTOR*2, loop: false },
	        3 : { start: FACTOR*2, end: FACTOR*3, loop: false },
	        4 : { start: FACTOR*3, end: FACTOR*4, loop: false },
	        5 : { start: FACTOR*4, end: FACTOR*5, loop: false },
        }
	};
	
	audioLog = {
	    spritemap: {
	        1 : { start: 0, end: FACTOR, loop: false },
	        2 : { start: FACTOR, end: FACTOR*2, loop: false },
	        3 : { start: FACTOR*2, end: FACTOR*3, loop: false },
	        4 : { start: FACTOR*3, end: FACTOR*4, loop: false },
	        5 : { start: FACTOR*4, end: FACTOR*5, loop: false },
        }
	};
	
	audioMetals = {
	    spritemap: {
	        1 : { start: 0, end: FACTOR, loop: false },
	        2 : { start: FACTOR, end: FACTOR*2, loop: false },
	        3 : { start: FACTOR*2, end: FACTOR*3, loop: false },
	        4 : { start: FACTOR*3, end: FACTOR*4, loop: false },
	        5 : { start: FACTOR*4, end: FACTOR*5, loop: false },
        }
	};
	
	audioXylo = {
	    spritemap: {
	        1 : { start: 0, end: FACTOR, loop: false },
	        2 : { start: FACTOR, end: FACTOR*2, loop: false },
	        3 : { start: FACTOR*2, end: FACTOR*3, loop: false },
	        4 : { start: FACTOR*3, end: FACTOR*4, loop: false },
	        5 : { start: FACTOR*4, end: FACTOR*5, loop: false },
        }
	};
	
	audioPan = {
	    spritemap: {
	        1 : { start: 0, end: FACTOR, loop: false },
	        2 : { start: FACTOR, end: FACTOR*2, loop: false },
	        3 : { start: FACTOR*2, end: FACTOR*3, loop: false },
	        4 : { start: FACTOR*3, end: FACTOR*4, loop: false },
	        5 : { start: FACTOR*4, end: FACTOR*5, loop: false },
        }
	};
}
