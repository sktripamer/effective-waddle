import * as React from "react";

export default function CompareList() {
  return (
    <div id='compare-container'>
    <div class='compare-title-container'>
        <div class="compare-title-1">My Life <span>Today</span></div>
        <div class="compare-title-vs">VS</div>
        <div class="compare-title-2">My Life <span>Tomorrow</span></div>
    </div>

    <div class='compare-text-container'>
        <div class='compare-today-container'>
            <div class="compare-today-subtext">Lorem ipsum dolor sit amet</div>
            <div class="compare-today-subtext">Lorem ipsum dolor sit amet</div>
            <div class="compare-today-subtext">Lorem ipsum dolor sit amet</div>
            <div class="compare-today-subtext">Lorem ipsum dolor sit amet</div>
        </div>
        <div class='compare-tomorrow-container'>
            <div class="compare-tomorrow-subtext">Lorem ipsum dolor sit amet</div>
            <div class="compare-tomorrow-subtext">Lorem ipsum dolor sit amet</div>
            <div class="compare-tomorrow-subtext">Lorem ipsum dolor sit amet</div>
            <div class="compare-tomorrow-subtext">Lorem ipsum dolor sit amet</div>
        </div>
    </div>
  </div> 
  );
}
