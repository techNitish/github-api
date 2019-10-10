import React from 'react';
import './App.css';






class App extends React.Component {

  search() {

    document.getElementById('result').innerHTML = "";
    var s = document.getElementById('srch').value;
    var u = 'https://cors-anywhere.herokuapp.com/https://api.github.com/search/repositories?q=' + s;
    var xhr = new XMLHttpRequest();

    xhr.open('GET', u);
    xhr.send();
    xhr.onload = function () {
      var response = JSON.parse(this.responseText);
      var i = 0;
      while (response.items[i]) {
        var full_name = response.items[i].full_name;
        var description = response.items[i].description;
        var lang = response.items[i].language;
        var stars = response.items[i].stargazers_count;
        var resu = document.createElement('div');
        resu.id = "resulty";
        resu.className = "row";
        var col1 = document.createElement('div');
        var col6 = document.createElement('div');
        var col4 = document.createElement('div');
        var icon = document.createElement('i');
        var hr = document.createElement('hr');

        icon.className = "fa fa-star";
        col1.className = "col-md-1";
        col6.className = "col-md-6";
        col4.className = "col-md-4";
        resu.appendChild(col1);
        var a = document.createElement('a');
        a.href = response.items[i].html_url;
        a.target = "_blank"
        var head = document.createElement('h2');
        head.id = "heading";
        a.appendChild(head);
        a.appendChild(document.createElement('br'));
        a.appendChild(document.createElement('br'));
        a.appendChild(hr);

        head.innerHTML = full_name;

        var desc = document.createElement('p');
        desc.innerHTML = description;
        desc.id = "descr";


        var langu = document.createElement('p');
        langu.innerHTML = lang;
        langu.id = "lang";
        var star = document.createElement('p');
        star.innerHTML = stars;
        star.id = "star";
        icon.innerHTML = stars;




        col6.appendChild(a);
        col6.appendChild(desc);

        resu.appendChild(col6);
        col4.appendChild(langu);
        col4.appendChild(icon);

        resu.appendChild(col4);
        col4.appendChild(document.createElement('br'));

        resu.appendChild(hr);



        document.getElementById('result').appendChild(resu);

        i++;
      }
    }

  }


  render() {
    return (
      <div className="App">
        <div className="search_bar">
          <div className="search_box">
            <input type='text' className='searchTerm' id="srch" placeholder='Search Reopsitory....'></input>
            <button className='searchTerm' id="submit" onClick={this.search}><i className="fa fa-search"></i></button>
          </div>
        </div>

        <div id="result" className="container">

        </div>


      </div>
    );
  }

}
export default App;
