import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Foundation} from 'foundation-sites';


ReactDOM.render(
    <App />,
    document.getElementById('app')
)


// JS
var d = new Date();
var n = d.getFullYear();

let post = {
    id: 1,
    title: "{ React in the Future -",
    url: "http://justynclark.com",
    date: n
}

post.displayTitle = function() {
    var tank = '';
    tank += '<h1 class="red text-center">';
    tank += '<a href="' + this.url + '"' + 'target="_blank"' + '</a>';
    tank += this.title + ' ' + post.date + ' }';
    tank += '</h1>';
    return tank;
}

let titleLink = post.displayTitle();

document.getElementById('title').innerHTML = titleLink;


