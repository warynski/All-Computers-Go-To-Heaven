$(function() {

	var demo = $('#demo-container');

	launchIntro();
	// launchC64();
	// launchGeos();

	function launchSfx01(arg){
		var sfx01 = document.getElementById('noise-fx');
		if ( arg == 1 ){
			sfx01.play();
		} else {
			sfx01.pause();
			console.log('stop playing sfx01');
		}
	}

	function launchTheme(arg){
		var theme = document.getElementById('main-theme');
		if ( arg == 1 ){
			theme.play();
		} else {
			theme.pause();
			console.log('stop playing sfx01');
		}
	}

	function launchIntro(){
		demo.css('background-color', '#a0a0ff');
		demo.height(screen.height); //setting demo-container screen height from JS method
		demo.load('intro.html', function(){

			demo.css('padding-top', ((window.innerHeight/2)-300)) + 'px';

			var intro = $('.intro div');

			setTimeout(function(){
				intro.append('<br>Hello, I am your browser,');
			},3000);
			setTimeout(function(){
				intro.append('<br>and I am saying:');
			},6000);
			setTimeout(function(){
				intro.append('<br>- turn the volume up louder');
			},8000);
			setTimeout(function(){
				intro.append('<br>- use headphones');
			},10000);
			setTimeout(function(){
				intro.append('<br>- hit ENTER for full experience');
			},12000);
			setTimeout(function(){
				intro.append('<br>- or N to skip intro');
			},14000);
			setTimeout(function(){
				intro.append('<br><br>There might be some synchronization issues because of the delay of sound playback on Safari. There is also known a CANVAS rendering bug on Firefox. So right at the moment, please use Chrome or Opera.');
			},16000);
			
			$(document).on('keypress', function(e){

				if (e.which == 13) {
					$(document).fullScreen(true);
					demo.css('padding','0');
					$(document).unbind('keypress');
					launchRoutines();
				} else if (e.which == 110 || e.which == 78 ) {
					$(document).fullScreen(true);
					demo.css('padding-top', ((screen.height/2)-300)) + 'px';
					$(document).unbind('keypress');
					launchGeos();
				}		
			})
		})
	}

	function launchRoutines(){

		var timerOne = 0;
		var timerTwo = 0;
		var timerThree = 0;
		var timerFour = 0;
		var timerFive = 0;

		demo.width(screen.width);
		demo.height(screen.height);
		console.log($(demo.width()),$(demo.height()));

		demo.empty();
		demo.css('background-color', '#000000');

		launchSfx01(1);
		demo.empty();
		demo.addClass('noise');

		setTimeout(function(){
			launchSfx01();
			launchTheme(1);
			demo.removeClass('noise');
			demo.css('background-color', '#000000');
			demo.load('routines.html', function(){

				var show = $('#show');

				show.width(screen.width);
				show.height(screen.height);

				show.text('this');
				show.css('padding-top', '35vh');

				setTimeout(function(){
					show.css('background-color', '#ff0000');
				},400);

				setTimeout(function(){
					show.text('is');					
				},800);

				setTimeout(function(){
					show.css('background-color', '#0000ff');
				},1400);

				setTimeout(function(){
					show.hide(250);			
				},2100);

				setTimeout(function(){
					show.css('background-color', '#000000');
					show.width(screen.width);
					show.height(screen.height);
					show.text('TRIBUTE');					
					show.show(5);
					show.css('font-size', '10vh');
					show.css('transform', 'rotate(30deg)');
				},2700);
				setTimeout(function(){
					show.css('font-size', '15vh');
					show.css('transform', 'rotate(-30deg)');
				},3000);
				setTimeout(function(){
					show.css('font-size', '25vh');
					show.css('transform', 'rotate(0deg)');
				},3300);

				setTimeout(function(){
					show.text('to');
					show.css('padding-top', '35vh');

					setTimeout(function(){
						show.css('background-color', '#ff0000');
					},400);

					setTimeout(function(){
						show.text('the');					
					},800);

					setTimeout(function(){
						show.css('background-color', '#0000ff');
					},1400);

					setTimeout(function(){
						show.hide(250);			
					},2100);

					setTimeout(function(){
						show.css('background-color', '#000000');
						show.width(screen.width);
						show.height(screen.height);
						show.text('C64');					
						show.show(5);
						show.css('font-size', '10vh');
						show.css('transform', 'rotate(-30deg)');
					},2700);
					setTimeout(function(){
						show.css('font-size', '15vh');
						show.css('transform', 'rotate(30deg)');
					},3000);
					setTimeout(function(){
						show.css('font-size', '25vh');
						show.css('transform', 'rotate(0deg)');
					},3300);

				},3600);

				setTimeout(function(){
					show.append('<div class="com-plate"></div>');
				},7100);
				setTimeout(function(){
					show.empty();
					show.text('C64');
					show.addClass('bounce');
				},10600);
				setTimeout(function(){
					show.removeClass('bounce').empty().text('C');
				},11950);
				setTimeout(function(){
					show.text('C6');
				},12060);
				setTimeout(function(){
					show.text('C64');
				},12150)
				setTimeout(function(){
					show.addClass('bounce');
				},12400)
				setTimeout(function(){
					show.removeClass('bounce').empty().text('C');
				},13700)
				setTimeout(function(){
					show.text('C6');
				},13810);
				setTimeout(function(){
					show.text('C64');
				},13900)
				setTimeout(function(){
					show.empty();
					show.empty().css('padding-top', '20vh');
					show.append('<div class="sid-rotate">original<br>sid<br>track<div>');
				},14100)
				setTimeout(function(){
					show.empty().css('padding-top', '20vh');
					show.append('<div class="sid-rotate">Dane<br>Booze Design<div>');
				},15900)
				setTimeout(function(){
					show.empty();
					show.css('padding-top', '35vh');
					show.text('C64');
					show.addClass('bounce');
				},17600);
				setTimeout(function(){
					show.removeClass('bounce').empty().text('C');
				},18950);
				setTimeout(function(){
					show.text('C6');
				},19060);
				setTimeout(function(){
					show.text('C64');
				},19150)
				setTimeout(function(){
					show.addClass('bounce');
				},19400)
				setTimeout(function(){
					show.removeClass('bounce').empty().text('C');
				},20700)
				setTimeout(function(){
					show.text('C6');
				},20810);
				setTimeout(function(){
					show.text('C64');
				},20900)
				setTimeout(function(){
					show.empty().css('padding-top', '30vh').css('background-color', '#222222');
					show.append('<div class="sid-rotate">stereo<br>mix<div>');
				},21100)
				setTimeout(function(){
					show.empty().css('padding-top', '35vh').css('background-color', '#444444');
					show.append('<div class="sid-rotate">Kuokka77<div>');
				},23000)
				setTimeout(function(){
					show.empty().css('padding-top', '30vh').css('background-color', '#666666');
					show.append('<div class="sid-rotate">C64 JS<br>emulator<div>');
				},24700)
				setTimeout(function(){
					show.empty().css('padding-top', '20vh').css('background-color', '#888888');
					show.append('<div class="sid-rotate">Tim<br>de<br>Koning<div>');
				},26400)
				setTimeout(function(){
					sinScroll();
				},28200);
				setTimeout(function(){
					clearInterval(timerFour);
					pointerRotate();
				},49250);
				setTimeout(function(){
					clearInterval(timerFive);
					tunnelBW();
				},77100);
				setTimeout(function(){
					tunnelCol();
				},80000);
				setTimeout(function(){
					clearInterval(timerOne);
					clearInterval(timerTwo);
					clearInterval(timerThree);			
					show.append('<div class="curtain"><div>');
				},106000);
				setTimeout(function(){
					demo.empty();
				},107750);
				setTimeout(function(){
					launchGeos();
				},110000);



				function tunnelBW(){
					show.empty();
					show.css('background', 'none');
					timerOne = setInterval(function(){				
						show.append('<div class="tunel-bw"></div>');
					},500);
					timerThree = setTimeout(function(){
						timerTwo = setInterval(function(){
							$('#show div:first-child').remove();
							$('#show div:first-child').remove();
							$('#show div:first-child').remove();
							$('#show div:first-child').remove();
						},2000);
					},4000);
				}

				function pointerRotate(){
					show.empty().css('padding-top', '0');
					show.load('6.html');
					var colors = new Array(
						[0,158,218],
						[209,38,37],
						[218,98,65],
						[241,203,41],
						[75,178,73]);
						// [255,255,255]);
					var step = 0;
					var colorIndices = [0,1,2,3];
					var gradientSpeed = 0.002;
					function updateGradient() {					  
					  if ( $===undefined ) return;					  
						var c0_0 = colors[colorIndices[0]];
						var c0_1 = colors[colorIndices[1]];
						var c1_0 = colors[colorIndices[2]];
						var c1_1 = colors[colorIndices[3]];
						var istep = 1 - step;
						var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
						var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
						var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
						var color1 = "rgb("+r1+","+g1+","+b1+")";
						var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
						var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
						var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
						var color2 = "rgb("+r2+","+g2+","+b2+")";
						show.css({ background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"})
						.css({ background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});					  
					  	step += gradientSpeed;
					  	if ( step >= 1 ) {
						    step %= 1;
						    colorIndices[0] = colorIndices[1];
						    colorIndices[2] = colorIndices[3];
						    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
						    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
					  	}
					}
					timerFive = setInterval(updateGradient,50);
				}

				function tunnelCol(){
					show.css('background-color', '#000000');
					timerOne = setInterval(function(){				
						show.append('<div class="tunel-col"></div>');
					},500);
					timerTwo = setTimeout(function(){
						timerThree = setInterval(function(){
							$('#show div:first-child').remove();
							$('#show div:first-child').remove();
							$('#show div:first-child').remove();
							$('#show div:first-child').remove();
						},2000);
					},4000);
				}

				function sinScroll(){
					show.empty().css('padding-top', '0').addClass('gradient');
					var width = $(window).width() - 40;
					var starttime = new Date().getTime();
					var letters = document.location.hash ? document.location.hash.substr(1) :
					'NO SCROLL NO INTRO     I HOPE YOU ENJOY IT COS I GOT SOME MORE';
					for (i = 0; i < letters.length; i++) {
						$('<div>', {
							html: letters[i]
						})
						.addClass('letter')
						.appendTo(show);
					}
					function run() {
						var elapsed = new Date().getTime() - starttime;
						var pos = elapsed * 0.6;						
						$('div.letter').each(function(index, letter) {
							// var posx = width - (pos - ((screen.height)/7) * index);
							var posx = width - (pos - (200) * index); 
							var posy = ((screen.height)/3) + Math.sin(posx / 200) * 200;
							$(letter).css('left', posx + 'px');
							$(letter).css('top', posy + 'px');
						});
					}		
					var timerFour = setInterval(run, 30);
				}
			});
		},2000)		
	};

	function launchGeos(){
		demo.empty();
		demo.height(screen.height);
		demo.css('padding-top', (((screen.height)/2)-300)) + 'px';
		demo.load('geos.html', function(){
			demo.css('background-color', '#000000');

			dateBar();
			menuBar();
			diskWindow();			

			function diskWindow(){

				var diskIcon = $('.disk');
				var diskHolder = $('#window');

				diskIcon.dblclick(function(){

					diskHolder.removeClass('znikaj');

					diskHolder.load('window_disk.html', function(){

						var shutMeUp = $('.window-exit');
						var paintIcon = $('.window-files-paint');
						var writeIcon = $('.window-files-write');
						var basicIcon = $('.window-files-basic');
						var gfxFiles = $('#window .window-files .window-files-gfx');
						var shutMe01 = $('#monkey .bitmap-exit');
						var shutMe02 = $('#kungfu .bitmap-exit');
						var shutMe03 = $('#madonna .bitmap-exit');

						gfxFiles.dblclick(function(){
							if ( $('span', this).text() == 'GFX01') {
								$('#monkey').removeClass('znikaj');
							} else if ( $('span', this).text() == 'GFX02') {
								$('#kungfu').removeClass('znikaj');
							} else {
								$('#madonna').removeClass('znikaj');
							}
						})

						shutMe01.click(function(){
							$('#monkey').addClass('znikaj');
						})

						shutMe02.click(function(){
							$('#kungfu').addClass('znikaj');
						})

						shutMe03.click(function(){
							$('#madonna').addClass('znikaj');
						})

						paintIcon.dblclick(function(){
							launchPaint();
						})
						writeIcon.dblclick(function(){
							launchWrite();
						})

						basicIcon.dblclick(function(){
							launchC64();
						})

						shutMeUp.click(function(){
							diskHolder.addClass('znikaj');
							diskHolder.empty();
						})
					})
				});
			};
			$('#geos li li').click(function(){

				if ($(this).text() == 'GEOS info') {
					geosInfo();
				} else if ($(this).text() == 'about') {
					aboutInfo();
				} else if ($(this).text() == 'RESET') {
					launchGeos();
				} else if ($(this).text() == 'BASIC') {
					launchC64();
				}

			function geosInfo(){
				var info = $('#geos .geos-info');
				info.removeClass('znikaj');
				info.click(function(){
					info.addClass('znikaj');
				})
			}

			function aboutInfo(){
				var info = $('#geos .geos-about');
				info.removeClass('znikaj');
				info.click(function(){
					info.addClass('znikaj');
				})
			}




			})
		});
	};


	function menuBar(){
		var mainMenuBar = $('.menu-bar > li');
		mainMenuBar.on('click', function(e){
			$('ul', this).hasClass('znikaj') ? $('ul', this).removeClass('znikaj') : $('ul', this).addClass('znikaj');
			mainMenuBar.children().not($('ul', this)).addClass('znikaj');
		});
	};


	function dateBar(){
				var calendar = $('#calendar');
				setInterval(function(){
					var today = new Date();
					var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
					var temp = today.getMinutes();
					if (temp<10){
						temp = "0"+temp
					};
					var CurrentDateTime = date+' '+today.getHours()+':'+temp;
					calendar.html('<p>'+CurrentDateTime+'</p>');
				}, 1000);
			};

	function launchC64(){
		demo.empty();
		demo.css('padding-top', '0');
		demo.css('background-color', '#A0A0FF');
		demo.load('basic.html', function(){
			var basicWindow = $('#container');
			basicWindow.css('left', ((screen.width/2)-480) + 'px').css('top', ((screen.height/2)-338) + 'px');
    		var jsc64 = $('#container').jsc64();
    		console.log('jestem C64');
    	})
	};


	function launchPaint(){		
		demo.load('window_paint.html', function(){

			$('body').css('background-color', '#000000'); // KONIECZNIE USUNĄĆ W FINALE !!!! @#@%@%!$#%#$^$%%&$^&*$%

			dateBar();
			menuBar();

			var pixelCanvas = $('.pixel-canvas');
			var click = false;
			var pickedColor = ('#ffffff');
			var sample = $('.tools-color');

			for (var i = 1; i <= 9301; i++) {
				pixelCanvas.append('<div></div>');
			}

			function pickColor(){

				var palette = $('.color-palette div');

				palette.click(function(){
					pickedColor = $(this).data('color');
					sample.css('background-color', '#' + pickedColor);
				});

			};					

			function painting(){

				var pixel = $('.pixel-canvas div');

				pixel.mousedown(function(){
					click = true;
				});

				pixel.mouseup(function(){
					click = false;
				})

				pixel.mousemove(function(){
					if ( click == true ) {
						$(this).css('background-color', '#' + pickedColor);
					} else if (click == false) {
						pixel.click(function(){
							$(this).css('background-color', '#' + pickedColor);
						})
					}
				});

				var clearCanvas = $('.tools-clear');

				clearCanvas.click(function(){
					pixel.css('background-color', '#ffffff');
				});

			};
			pickColor();
			painting();

			var quit = $('.quit');
			quit.click(function(){
				launchGeos();
			})

			var info = $('.info');
			info.click(function(){
				var infoWin = $('.paint-info');
				infoWin.show();
				infoWin.click(function(){
					infoWin.hide();
				});
			});
		});
	};	

	function launchWrite(){
		demo.load('window_write.html', function(){

			$('body').css('background-color', '#000000'); // KONIECZNIE USUNĄĆ W FINALE !!!! @#@%@%!$#%#$^$%%&$^&*$%

			var textContainer = $('#write .write-window div.write-text');

			dateBar();
			menuBar();
			writeTools();

			function writeTools(){

				var toolSel = $('.write-window-tools div');

				toolSel.click(function(){

					if ($(this).hasClass('align-left')) {
						toolSel.css('background-color', "#efe9e7");
						$(this).css('background-color', '#575753');
						textContainer.css('text-align', 'left');
					} else if ($(this).hasClass('align-center')) {
						toolSel.css('background-color', "#efe9e7");
						$(this).css('background-color', '#575753');
						textContainer.css('text-align', 'center');
					} else if ($(this).hasClass('align-right')) {
						toolSel.css('background-color', "#efe9e7");
						$('.align-right').css('background-color', '#575753');
						textContainer.css('text-align', 'right');
					} else if ($(this).hasClass('font9')) {
						toolSel.css('background-color', "#efe9e7");
						$('.font9').css('background-color', '#575753');
						textContainer.css('font-size', '18px');
					} else if ($(this).hasClass('font12')) {
						toolSel.css('background-color', "#efe9e7");
						$('.font12').css('background-color', '#575753');
						textContainer.css('font-size', '27px');
					} else if ($(this).hasClass('font18')) {
						toolSel.css('background-color', "#efe9e7");
						$('.font18').css('background-color', '#575753');
						textContainer.css('font-size', '36px');
					}
				})
			}

			$('#write li li').click(function(){

				if ($(this).text() == 'info') {
					writeInfo();
				} else if ($(this).text() == 'QUIT') {
					launchGeos();
				} else if ($(this).text() == 'Berkelium1541') {
					textContainer.css('font-family', 'Berkelium1541');
				} else if ($(this).text() == 'Berkelium64') {
					textContainer.css('font-family', 'Berkelium64');
				} else if ($(this).text() == 'PetMe64') {
					textContainer.css('font-family', 'PetMe64');
				} else if ($(this).text() == 'new') {
					textContainer.empty();
				}

				function writeInfo(){
					var infoWin = $('.write-info');
					infoWin.show();
					infoWin.click(function(){
						infoWin.hide();
					})
				}
				function writeFonts(){
					console.log('fonts');
				}
			})
		})
	};
});


