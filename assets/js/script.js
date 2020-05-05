$(document).ready(function(){
	function setCookie(cname,cvalue,exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires=" + d.toGMTString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	function getCookie(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}
	function draw(symbol = 'X', grid_id = 0) {
		if (grid_id != 0) {
			$("#"+grid_id).text(symbol);
			var last_symbol = getCookie('symbol');
			if (last_symbol == 'X') {
				setCookie('symbol', 'O', 1);
			}
			else {
				setCookie('symbol', 'X', 1);
			}
		}
	}
	function check_status() {
		var grid1 = $("#1").text();
		var grid2 = $("#2").text();
		var grid3 = $("#3").text();
		var grid4 = $("#4").text();
		var grid5 = $("#5").text();
		var grid6 = $("#6").text();
		var grid7 = $("#7").text();
		var grid8 = $("#8").text();
		var grid9 = $("#9").text();

			//horizontal
			if (grid1 == grid2 && grid2 == grid3 && grid1 != '' && grid2 != '' && grid3 != '') {
				won(grid1);
			}
			if (grid4 == grid5 && grid5 == grid6 && grid4 != '' && grid5 != '' && grid6 != '') {
				won(grid4);
			}
			if (grid7 == grid8 && grid8 == grid9 && grid7 != '' && grid8 != '' && grid9 != '') {
				won(grid7);
			}

			//vertical
			if (grid1 == grid4 && grid4 == grid7 && grid1 != '' && grid4 != '' && grid7 != '') {
				won(grid1);
			}
			if (grid2 == grid5 && grid5 == grid8 && grid2 != '' && grid5 != '' && grid8 != '') {
				won(grid2);
			}
			if (grid3 == grid6 && grid6 == grid9 && grid3 != '' && grid6 != '' && grid9 != '') {
				won(grid3);
			}

			//diagonal
			if (grid1 == grid5 && grid5 == grid9 && grid1 != '' && grid5 != '' && grid9 != '') {
				won(grid1);
			}
			if (grid3 == grid5 && grid5 == grid7 && grid3 != '' && grid5 != '' && grid7 != '') {
				won(grid3);
			}
		}
		function won(symbol) {
			swal(symbol+' Won','Well played!', 'success').then((value)=>{
				window.location = '';
			});
		}
		setCookie('symbol', 'X', 1);
		$(".grid-item").on("click", function(){

			var symbol = getCookie('symbol');
			var grid_id = $(this).attr('id');
			draw(symbol,grid_id);
			check_status();
		});
	});