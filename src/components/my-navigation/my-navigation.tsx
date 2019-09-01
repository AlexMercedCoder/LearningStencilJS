import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-navigation',
})
export class MyComponent {


  render() {
    return   <nav>
    <div class="nav-wrapper indigo">
      <a href="http://www.AlexMercedCoder.com" class="brand-logo">ALEX MERCED</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="http://www.github.com/alexmercedcoder">GitHub</a></li>
        <li><a href="https://codepen.io/AlexMercedCoder/">CodePen</a></li>
        <li><a href="http://mezz.alexmerced.com">Self-Deployed Blog</a></li>
      </ul>
    </div>
  </nav>;
  }
}