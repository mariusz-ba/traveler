import React, { Component } from 'react';

import Map from '../components/map/Map';
import Navbar from '../components/navbar/Navbar';

export default class Home extends Component {
  render() {
    return (
      <div className="home-layout">
        <Navbar/>
        <div className="home-left">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel diam commodo, maximus mi eget, tincidunt odio. Sed sed gravida lacus, a varius lorem. In vel maximus nibh. Maecenas tempor nibh eget pretium molestie. Proin ante mi, semper sit amet leo ac, dignissim rhoncus enim. Nunc luctus elit nisl, sit amet ornare eros consequat at. Maecenas lacus orci, tincidunt vel dolor sed, sodales iaculis est. Proin ac orci semper, interdum nisi id, efficitur urna. Nam aliquam nunc sed ante vestibulum, eu fringilla velit ultricies. Curabitur neque eros, venenatis euismod vehicula eget, venenatis sit amet turpis. Nunc suscipit dictum nunc egestas rutrum. Nullam quis elit urna.
        </p>
        <p>
        In sed fermentum ex, ac vehicula diam. Nunc consequat eu velit non pellentesque. Ut eu egestas lacus. Etiam sit amet massa vestibulum, dictum nibh at, efficitur nulla. Nunc venenatis ac eros ac efficitur. Vestibulum commodo molestie lectus, vel volutpat dolor aliquet eu. Nulla tellus arcu, hendrerit vitae est ut, blandit vestibulum neque. Vivamus placerat a lectus at iaculis.
        </p>
        <p>
        Quisque pulvinar sapien quis ex congue, ac aliquam lacus mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer mi lorem, rutrum sit amet tincidunt sed, ultricies id libero. Ut a lorem dolor. Duis sit amet ultricies ex. Integer vehicula, ipsum a ultrices ultrices, justo purus tincidunt ipsum, eu eleifend odio lectus eu diam. Mauris sed pharetra mi.
        </p>
        <p>
        Sed vitae magna elementum neque condimentum tempus id id ipsum. Nunc ac varius enim. Quisque interdum, lorem nec finibus mollis, tortor metus facilisis lorem, vel volutpat lorem metus sed mi. Integer ultrices ligula vitae volutpat molestie. Curabitur nec tortor ac ipsum facilisis viverra. Nunc sit amet porta dolor. Integer aliquam nisl a tortor lacinia, quis ultricies ipsum ultrices. Quisque eleifend ligula scelerisque lacus sodales elementum.
        </p>
        <p>
        Etiam mi lorem, pretium ut cursus ac, ullamcorper nec nisl. Cras mauris lectus, sagittis aliquet maximus eu, cursus et metus. Morbi varius diam sed euismod dapibus. Vivamus fermentum tortor vitae purus aliquet, quis tempor enim varius. Duis et diam ac tortor tincidunt consectetur vel et sem. Nunc faucibus odio et ante sodales, et bibendum mauris condimentum. Pellentesque sed velit a ipsum venenatis lacinia. Nam efficitur, diam id vestibulum dapibus, ipsum lacus pulvinar magna, quis lacinia tellus dui eget risus. Vivamus tristique aliquam sollicitudin. Nulla lacus lorem, pharetra et facilisis quis, porttitor non magna. Fusce luctus magna velit, ut mattis ipsum blandit in. Aliquam et augue nec nulla iaculis fermentum feugiat at mauris. Nullam vitae pellentesque mi.
        </p>
        </div>
        <div className="home-right">
          <Map/>
        </div>
      </div>
    )
  }
}