
"use strict";

class App{
	constructor(){
		this.movies = [
			{
				"id": 1,
				"Title":"Morphling",
				"Year":"All in one",
				"Director":"As versatile as the tides, Morphling takes on whatever form it needs for battle, <br>Replicating Heroes and instantly taking their position.",
				"Poster":"img/morph.jpg",
				"Actors":"img/morphitem.png",
				"Images":"img/morphling_hphover.png"
			},
			{
				"id": 2,
				"Title":"Slark",
				"Year":"Carry, Nuker, Disabler, Escape",
				"Director":"Slark is a sneaky assassin that can tie you down, steal your attributes, and kill<br> you before you even realize he's there. He's also able to remove any debuffs on himself and conceal<br> himself in the shadows to become even more elusive",
				"Poster":"img/slark.jpg",
				"Actors":"img/slarkitem.png",
				"Images":"img/slark_hphover.png"
			},
			{
				"id": 3,
				"Title":"Tinker",
				"Year":"Pusher, Carry, Nuker",
				"Director":"With the power of Science at his fingertips, Tinker blinds his foes with intense <br>Lasers, fires off Heat-Seeking Missiles, summons an army of robots, and can Rearm himself at will.",
				"Poster":"img/tinker.jpg",
				"Actors":"img/tinkeritem.png",
				"Images":"img/tinker_hphover.png"
			},
			{
				"id": 4,
				"Title":"Meepo",
				"Year":"Initiator, Pusher, Carry, Nuker, Disabler, Escape",
				"Director":"A cunning Geomancer who uses the power of many to outmaneuver and out-level his <br>opponents, pummeling them with disables and burst damage.",
				"Poster":"img/meepo.jpg",
				"Actors":"img/meepoitem.png",
				"Images":"img/meepo_hphover.png"
			},
			{
				"id": 5,
				"Title":"Puck",
				"Year":"Initiator, Nuker, Disabler, Escape",
				"Director":"Mischief and merryment, Puck silences foes with choking dust and ensnares rivals in<br> volatile coils, specialising in tricking enemies into wasting their attacks while invulnerable.",
				"Poster":"img/puck.jpg",
				"Actors":"img/puckitem.png",
				"Images":"img/puck_hphover.png"
			},
			{
				"id": 6,
				"Title":"Invoker",
				"Year":"Pusher, Carry, Nuker, Disabler, Escape",
				"Director":"As the superior Arsenal Magus, the Invoker is able to combine the essence of the <br>elements to unleash seemingly innumerable devastating spells upon all who oppose him.",
				"Poster":"img/invoker.jpg",
				"Actors":"img/invokeritem.png",
				"Images":"img/invoker_hphover.png"
			},
			{
				"id": 7,
				"Title":"Mirana",
				"Year":"Support, Carry, Nuker, Disabler, Escape",
				"Director":"Mirana is a skilled huntress, hitting enemies with well timed Arrows and calling upon powerful Starstorms<br> that strikes every opponent near her; capable of rendering her entire team invisible and escaping certain death.",
				"Actors":"img/miranaitem.png",
				"Poster":"img/mirana.jpg",
				"Images":"img/mirana_hphover.png"
			}
		];
	}

	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}

	createMovie(){
		let t = document.getElementById('newTitle');
		let y = document.getElementById('newYear');
		let d = document.getElementById('newDirector');
		let p = document.getElementById('newPoster');
		let m = document.getElementById('newImages');
		let a = document.getElementById('newActors');
		
		let movie = {"Title":t.value,"Year":y.value,"Director":d.value,"Poster":p.value,"Images":m.value,"Actors":a.value};
		this.movies.push(movie);

		t.value = y.value = d.value = p.value =  m.value = a.value = ''; //Clear Fields
		this.movieListInfo();
		this.showMovieList();
	}

	deleteMovie(key){		
		let table = document.getElementById('movieListInfo');
		table.deleteRow(key);
		this.movies.splice(key,1);

		// let m = this.movies;
		// let dummy = [];
		// for(let i=0;i<m;i++){
		// 	if(key!=i){
		// 		dummy.push(m[i]);
		// 	}
		// }
		// this.movies = dummy;
		let details = document.getElementById('movieDetails');
		details.innerHTML = "";
		
		this.movieListInfo();	
		this.showMovieList();	
	}

	updateMovie(key){
		let t = document.getElementById('updateTitle');
		let y = document.getElementById('updateYear');
		let d = document.getElementById('updateDirector');
		
		
		

		let m = this.movies[key];
		let movie = {"id":m.id,"Title":t.value,"Year":y.value,"Director":d.value,"Poster":m.Poster,"Actors":m.Actors,"Images":m.Images};

		this.movies[key] = movie;
		let details = document.getElementById('movieDetails');
		details.innerHTML = "";
		
		this.movieListInfo();
		this.showMovieList();
	}

	showLandingPage(){
		$('#landingpage').show();
		$('#createpage').hide();
		$('#readpage').hide();
		$('#updatedeletepage').hide();
	}	

	showMovieList(){
		$('#landingpage').hide();
		$('#createpage').hide();
		$('#readpage').show();
		$('#updatedeletepage').hide();
	}

	showMovieCreate(){
		$('#landingpage').hide();
		$('#createpage').show();		
		$('#readpage').hide();
		$('#updatedeletepage').hide();
	}

	showUpdateDelete(){
		$('#landingpage').hide();
		$('#createpage').hide();		
		$('#readpage').hide();
		$('#updatedeletepage').show();
	}	

	searchMovie(value=""){
		let objects = [];
		let r = this.movies;
		for(let i=0;i<r.length;i++){
			// console.log("r:",r[i].Title.toUpperCase().indexOf(title.toUpperCase()));
			let expr1 = (r[i].Title.toUpperCase().indexOf(value.toUpperCase()) > -1);
			let expr2 = (r[i].Year.toUpperCase().indexOf(value.toUpperCase()) > -1);
			// console.log(name," vs ",r[i].name," = ",expr);
			if(expr1 || expr2){
				objects.push(r[i]);
			}
		}
		return objects;		
	}
}

class Component extends App{
	constructor(){
		super();
	}

	movieList(){
		this.render(
			`	      
		<div class="header clearfix">
		<br>
            <nav class="navbar navbar-light navbar-fixed-top "style="background-color:#400000" >
            	<a class="navbar-brand" href="#" onclick="component.showLandingPage()">
            	<img class="decode-logo" src="img/decode.png"height=50 width=50  />
              <span class="sr-only">(current)</span></a></a>
            	
              <ul class="nav nav-pills float-xs-right">
              	<li class="nav-item">
                  <br>
                  <button class="btn btn-info" onclick="component.showLandingPage()">Home</button>
                </li>
                <li class="nav-item">
                  <br>
                  <button class="btn btn-info" onclick="component.showMovieList()">Hero Selection</button>
                </li>
                <li class="nav-item">
                  <br>
                  <button class="btn btn-info" onclick="component.showMovieCreate()">Add Hero</button>
                </li>
              </ul>
              
            </nav>            
            
          </div>

		<div class="" id="landingpage">
          	<div class="jumbotron extra-jumbotron">
           	<h1>DOTA2 Guide</h1>
			<p class="lead">
					 OVER POWER DOTA2<br>
							HERO CORES
			</p>
          	</div>
          <div class="row marketing">
          	<br>
            <div>
            <center>
                  <a class="nav-link " href="#" onclick="component.showMovieList()">              
              <h4>
              	 Dota2 OP heroes</h4></a>
              <p>Know OVER POWER HEROES in Dota2,<br>
              	 character stats, hero skill and item build up.</p>
            </center>
            </div>
            <br>
            <div>
            <center>
            <a class="nav-link " href="#" onclick="component.showMovieCreate()">
              <h4>
              	ADD HEROES</h4></a>
              <p>Allow user to add DOTA2 HEROES</p>
            <center>
            </div>
          </div>          

		</div>
				
				<div id="createpage" class="row marketing">
					<div class="col col-sm-12">
						<div id="movieCreate"></div>						
					</div>

				</div>

				<div id="readpage" class="row marketing">
					<div class="col col-sm-5">
						<h1>HERO SELECTION</h1>
						<table id="movieList" class="table">

							<div class="form-group">
							    <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
							    <div class="input-group">
							      <div class="input-group-addon">
									  <span class="fa fa-search"></span>
									  <!-- checkout other fontawesome icons at http://fontawesome.io/icons/ -->
							      </div>
							      <input oninput="component.movieListInfo(this.value)" type="text" class="form-control" placeholder="Search">
							    </div>
							  </div>
							<tbody id="movieListInfo"></tbody>
						</table>
					</div>
				</div>

				<div id="updatedeletepage" class="row marketing">
					<div id="movieDetails"></div>
				</div>
				
          <footer class="footer">
          <div>
			<nav class="navbar navbar-light navbar-bottom "style="background-color:#400000" >
            	<p class="p float-xs-right" >&copy; DOTA2 2016 </p>
              <form class="form-inline navbar-form pull-right"/>
            </nav>            
                  </div>
            
          </footer>

			`
			,document.getElementById('app'));
		this.movieListInfo();
		$('#landingpage').show();
		$('#createpage').hide();		
		$('#readpage').hide();
	}

	movieListInfo(filter){
		// console.log(filter);
		let html = "";
		// let m = this.movies;
		let m = this.searchMovie(filter);
		for(let i=0;i<m.length;i++){	
			html += `
				<tr>		
				<b>${m[i].Title}</b><br>
					<a href="#">
            	<a class="navbar-brand" href="#" onclick="component.movieDetails(${i})">
            	<img class="decode-logo" src="${m[i].Images}"  height=71 width=127/>
            	<span class="sr-only">(current)</span></a>
            	</a>
            	</tr>
            
			`;
		}
		this.reRender(html,document.getElementById('movieListInfo'));
	}

	movieDetails(key){
		this.reRender(
			`
				<center><h1>HERO Details</h1>
				<div class="media">
				
				    <div class="media">

				        <a href="#">
				            <img class="media-object img-thumbnail" src="${this.movies[key].Poster}" height=500 width=500/>
				        </a>
				    
				    </div>
				    <div class="media-body" id="movieDetailsInfo">
				        <h4 class="media-heading">${this.movies[key].Title}</h4>
				    <p>	
				        <b>ROLE: </b>${this.movies[key].Year}<br>
						<b>DESCRIPTION:</b>${this.movies[key].Director}<br>
					    <b>LUXURY ITEMS:</br><img src="${this.movies[key].Actors}" height=176 width=255/>

					</p>
						<center>
						<button class="btn btn-success" onclick="component.movieUpdate(${key})">Update</button>
						<button class="btn btn-danger" onclick="component.deleteMovie(${key})">Delete</button>
						<button class="btn btn-info" onclick="component.showMovieList()">Back</button>
						</center>
					</div>
					</div>
					
				</div>			
			`,document.getElementById('movieDetails'));
			this.showUpdateDelete();
	}

	movieCreate(){
		this.render(
			`	
			<div class="col col-sm-6">
				<h1>Add hero</h1>
				<b>Hero: <input class="form-control" id="newTitle" type="" placeholder="Enter Hero Name" /><br/>
				Role: <input class="form-control" id="newYear" type="" placeholder="Enter Role" /><br/>
				Description: <input class="form-control" id="newDirector" type="" placeholder="Enter Description" /><br/>
				Hero Images: <input class="form-control" id="newPoster" type="" placeholder=".png, .jpg Files Only" /><br/>
				Hero Logo: <input class="form-control" id="newImages" type="" placeholder=".png, .jpg Files Only" /><br/>
				Hero Item: <input class="form-control" id="newActors" type="" placeholder=".png, .jpg Files Only" /><br/>
				<button class="btn btn-primary" onclick="component.createMovie()">Create</button>
			</div>
			`,document.getElementById('movieCreate'));
	}

	movieUpdate(key){
		this.reRender(
			`
				<div class="input-group input-group-md">
		        	<span class="input-group-addon">
		        		<span>ID</span>
		        	</span>
		        	<input readonly class="form-control" type="text" value="${this.movies[key].id}" /><br/>
		        </div>
		        <br/>
		        <div class="input-group input-group-md">
		        	<span class="input-group-addon">
		        		<span>HERO</span>
		        	</span>
		        	<input readonly class="form-control" id="updateTitle" type="text" value="${this.movies[key].Title}" /><br/>
		        </div>
		        <br/>
		        <div class="input-group input-group-md">
		        	<span class="input-group-addon">
		        		<span>ROLE</span>
		        	</span>
		        	<input class="form-control" id="updateYear" type="text" value="${this.movies[key].Year}" /><br/>
		        </div>
		        <br/>
		        <div class="input-group input-group-md">
		        	<span class="input-group-addon">
		        		<span>Description</span>
		        	</span>
		        	<input class="form-control" id="updateDirector" type="text" value="${this.movies[key].Director}" /><br/>
		        </div>	
		        <br/>
		        <center>
				<button class="btn btn-success" onclick="component.updateMovie(${key})">Save</button>
				<button class="btn btn-info" onclick="component.movieDetails(${key})">Back</button>
				</center>
			`,document.getElementById('movieDetails'));
	}


	
}

let component = new Component();
component.movieList();
component.movieCreate();