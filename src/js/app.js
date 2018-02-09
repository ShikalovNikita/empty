import {TweenLite} from 'gsap';

let photo = document.getElementsByTagName('img');

TweenLite.to(photo,2, {width:"300px", height:"150px"});