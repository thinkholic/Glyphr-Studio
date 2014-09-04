// start of file

//-------------------
// UBER FUCNTIONS
//-------------------

	function loadPage_ligatures(){

		// debug("LOADING PAGE >> ligatures");

		getEditDocument().getElementById("mainwrapper").innerHTML = ligatures_content();

		setupEditCanvas();
		setupGhostCanvas();

		initEventHandlers();

		_UI.selectedtool = "pathedit";
		_UI.selectedchar = getFirstLigatureID();

		redraw("loadPage_ligatures");
	}

	function ligatures_content(){

		var re = '<canvas id="chareditcanvas" width=12 height=12 ></canvas>'+
			'<div id="toolsarea"> [ERROR: Uninitialized content] </div>'+
			makeFloatLogo();

		return re;
	}


//-----------------------
// Char Paridy Functions
//-----------------------
	// GET
	function getLigature(ch, create) {
		debug('\ngetLigature - START');
		ch = ''+ch;
		debug("\t passed " + ch + " - force create? " + create);
		var rechar = _GP.ligatures[ch];
		debug("\t retrieved " + rechar + " from ligatures.");
		
		if(rechar){
			return rechar;
		} else if(create){
			//debug("\t create was true, returning a new char.");
			_GP.ligatures[ch] = new Char({"charname":makeLigatureName(ch), "charhtml":makeLigatureHTML(ch)});
			
			debug('getLigature - returning ' + _GP.ligatures[ch].charname + '\n');
			return _GP.ligatures[ch];
		}

		debug('getLigature - returning false \n');
		return false;
	}

	function makeLigatureName(ch) {
		return 'fft';
	}

	function makeLigatureHTML(ch) {
		return 'fft';
	}

	function getFirstLigatureID() {
		for(var l in _GP.ligatures){
			if(_GP.ligatures.hasOwnProperty(l)) {
				debug('getFirstLigature - returning id for ' + _GP.ligatures[l].charname);
				return l;
			}
		}

		debug('getFirstLigature - returning false');
		return false;
	}

// end of file