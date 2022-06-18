var gameMain = function(game){
	TEMPO = 120;
	allInstruments = [];	
	
	chosenInstrument = 0;
	
	costume = false;
};

gameMain.prototype = {
    create: function(){
    	bg = game.add.sprite(0, 0, 'bg');
    	
    	makey = game.add.sprite(70, 20, 'makey');
    	
		keys = ['up', 'down', 'right', 'left', 'space', 'click'];
		sprites = [];
		
		for (k = 0; k < keys.length; k++){
			sprite = game.add.sprite(0, 0, keys[k]);
			sprite.alpha = 0;
			sprites.push(sprite);
			sprites[k].inputEnabled = true;
			sprites[k].events.onInputDown.add(chooseKey, this);
		}

		offSets();
		assignKeys();
		loadInstruments();

		
        this.add.text(0, 0, 'Escolha o Instrumento:', {
	        font: '12px', fill: 'black', fontWeight: 'bold', align: 'center'
	    });
	    
		
	    instruLabels = [];

		
	    
		for (t = 0; t < allInstruments.length; t++){
			
			instruName = allInstruments[t].key.charAt(0).toUpperCase() + allInstruments[t].key.slice(1);
			
	        label = this.add.text(850, 40 + t * 40, instruName, {
	            font: '32px', fill: 'white', fontWeight: 'normal', align: 'center'
	        });

	        instruLabels.push(label);
			instruLabels[t].inputEnabled = true;
			instruLabels[t].events.onInputDown.add(chooseSound, this);
        }
        
		chooseSound(instruLabels[0]);
    },
    update: function(){  	
    	for (n = 0; n < cloudArray.length; n++){
			if (cloudArray[n].isDown){
				playSound(n);
			}
	    }
    }
};

function chooseKey(_this){
	//TODO
}

function chooseSound(_this){
	for (t = 0; t < allInstruments.length; t++){
		instruLabels[t].fill = 'black';
    }
    _this.fill = 'black';
    
    chosenInstrument = instruLabels.indexOf(_this);
    
    costume = false;
}

function playSound(_n){
	if (cloudresets[_n]){
		_instru = allInstruments[chosenInstrument];
		
		lightKey(sprites[_n]);

		if (document.getElementById("choose_" + soundId[_n]).value != ""){
			soundToButton[_n].play();
			
			setTimeout(function(){ // stop sound
				soundToButton[_n].pause();
				soundToButton[_n].currentTime = 0;		
			}, 60000 / TEMPO);
		}
		
		else{
			try{
				_instru.play(_n + 1, 0.4);
			} catch(e){ _instru.play(game.rnd.integerInRange(1, 5), 0.4); }		
		}	

		cloudresets[_n] = false;
		
		setTimeout(function(){
			cloudresets[_n] = true;
		}, 60000 / TEMPO);
	}
}

function external_file(_what) {
	fileObj = _what.files;

	var fileReader  = new FileReader;
	
	fileReader.readAsArrayBuffer(fileObj[0]);
	
	url = URL.createObjectURL(fileObj[0]); 
	
	for (x = 0; x < soundId.length; x++){
		if (_what.id == "choose_" + soundId[x]){
			soundToButton[x].src = url; 
			document.getElementById('name_' + soundId[x]).innerHTML = document.getElementById("choose_" + soundId[x]).value;
		}
	}

	fileReader.onload = function(){
	    var arrayBuffer = this.result;   
	    costume = true;
	};
}

function lightKey(_this){
	game.add.tween(_this).to( { alpha: 1 }, 300 - TEMPO, "Linear", true);
	
	setTimeout(function(){
		game.add.tween(_this).to( { alpha: 0 }, 300 - TEMPO, "Linear", true);
	}, 60000 / TEMPO);
	
	game.add.tween(makey).to( { alpha: 0.7 }, 300 - TEMPO, "Linear", true);
	
	setTimeout(function(){
		game.add.tween(makey).to( { alpha: 1 }, 300 - TEMPO, "Linear", true);
	}, 60000 / TEMPO);
}

function loadInstruments(){
	vibes = game.add.audioSprite('vibes'); 
	harp = game.add.audioSprite('harp'); 
	pizz = game.add.audioSprite('pizz'); 
	drums = game.add.audioSprite('drums'); 
	bass = game.add.audioSprite('bass');
	oud = game.add.audioSprite('oud');
	tuba = game.add.audioSprite('tuba');
	pan = game.add.audioSprite('pan');
	xylo = game.add.audioSprite('xylo');
	glock = game.add.audioSprite('glock');
	metals = game.add.audioSprite('metals');
	log = game.add.audioSprite('log');
	kalimba = game.add.audioSprite('kalimba');

    allInstruments = [vibes, harp, pan, xylo, glock, metals, log, pizz, kalimba, oud, drums, bass, tuba];   
}

function assignKeys(){
	upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);			
	downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
	rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
	spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	wKey = game.input.keyboard.addKey(Phaser.Keyboard.W); // instead of activepointer which is used in the UI
	
	cloudArray = [upKey, downKey, rightKey, leftKey, spaceKey, wKey];
	soundToButton = [audio_up, audio_down, audio_right, audio_left, audio_space, audio_w];
	soundId = ['up', 'down', 'right', 'left', 'space', 'w'];
	
	cloudresets = [true, true, true, true, true, true];
	
	document.getElementById('clear_up').addEventListener("click", function(){
		document.getElementById('name_up').innerHTML = 'Nenhum arquivo selecionado';
		document.getElementById("choose_up").value = "";		
	});
	document.getElementById('clear_down').addEventListener("click", function(){
		document.getElementById('name_down').innerHTML = 'Nenhum arquivo selecionado';
		document.getElementById("choose_down").value = "";		
	});
	document.getElementById('clear_right').addEventListener("click", function(){
		document.getElementById('name_right').innerHTML = 'Nenhum arquivo selecionado';
		document.getElementById("choose_right").value = "";		
	});
	document.getElementById('clear_left').addEventListener("click", function(){
		document.getElementById('name_left').innerHTML = 'Nenhum arquivo selecionado';
		document.getElementById("choose_left").value = "";		
	});
	document.getElementById('clear_space').addEventListener("click", function(){
		document.getElementById('name_space').innerHTML = 'Nenhum arquivo selecionado';
		document.getElementById("choose_space").value = "";		
	});
	document.getElementById('clear_w').addEventListener("click", function(){
		document.getElementById('name_w').innerHTML = 'Nenhum arquivo selecionado';
		document.getElementById("choose_w").value = "";		
	});	
}

function offSets(){	
	sprites[0].x = makey.x + 151;
	sprites[0].y = makey.y + 34;
	
	sprites[1].x = makey.x + 152;
	sprites[1].y = makey.y + 176;
	
	sprites[2].x = makey.x + 214;
	sprites[2].y = makey.y + 117;
	
	sprites[3].x = makey.x + 61;
	sprites[3].y = makey.y + 118;
	
	sprites[4].x = makey.x + 372;
	sprites[4].y = makey.y + 85;
	sprites[4].scale.set(1.05, 1.05);
	
	sprites[5].x = makey.x + 537;
	sprites[5].y = makey.y + 85;
	sprites[5].scale.set(1.05, 1.05);
}