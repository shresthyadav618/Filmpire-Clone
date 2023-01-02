import React, { useState, useEffect } from "react";
import logo from "./movielogo.jpeg";

import "./index.css";
import advent from "./advent.png";
import animation from "./animation.png";
import comedy from "./comedy.png";
import crime from "./crime.png";
import documentary from "./documentary.png";
import drama from "./drama.png";
import family from "./family.png";
import horror from "./horror.png";
import fiction from "./fiction.png";

import Links from "./links";
import Child from "./Child";

import action from "./action.png";
export default function useSider() {
  const [urlUsed, ChangeUrl] = React.useState();

  console.log(Links);
  console.log(urlUsed);
  console.log(Links.toprated);

  return (
    <>
      <div className="flex">
        <div className="sider cursor-pointer">
          <div className="w-fit block m-auto">
            <img src={logo} alt="not found" width={"100px"}></img>
          </div>

          <div className="br"></div>
          <div className="spec">Categories</div>
          <div className="allelm">
            <div
              className="myanchor"
              onClick={() => {
                ChangeUrl({ url: Links.popular, check: true });
              }}
            >
              <div className="df">
                <div className="mimg">
                  <i class="fa-solid fa-fire fa-xl"></i>
                </div>
                <li> Popular</li>
              </div>
            </div>
            <div
              className="myanchor"
              onClick={() => {
                ChangeUrl({ url: Links.toprated, check: true });
              }}
            >
              <div className="df">
                <div className="mimg">
                  <i class="fa-regular fa-star fa-xl"></i>
                </div>
                <li> Top Rated</li>
              </div>
            </div>
            <div
              href=""
              className="myanchor"
              onClick={() => {
                ChangeUrl({ url: Links.upcoming, check: true });
              }}
            >
              <div className="df">
                <div className="mimg">
                  <i class="fa-solid fa-bolt fa-xl"></i>
                </div>
                <li> Upcoming</li>
              </div>
            </div>

            <div className="br"></div>
          </div>
          <div className="spec">Genres</div>
          <div className="flex flex-col">
            <div
              className="myanchor"
              onClick={() => {
                ChangeUrl({ url: Links.action, check: false });
              }}
            >
              <div className="df">
                <div className="mimg">
                  <img src={action} alt="notfound" width="30px"></img>
                </div>
                Action
              </div>
            </div>
            <div
              className="myanchor"
              onClick={() => {
                ChangeUrl({ url: Links.popular, check: true });
              }}
            >
              <div className="df">
                <div className="mimg">
                  <img src={advent} alt="notfound" width="30px"></img>
                </div>
                Adventure
              </div>
            </div>
            <div
              className="myanchor"
              onClick={() => {
                ChangeUrl({ url: Links.trending, check: false });
              }}
            >
              <div className="df">
                <div className="mimg">
                  <img src={animation} alt="notfound" width="30px"></img>
                </div>
                Animation
              </div>
            </div>
            <div
              className="myanchor"
              onClick={() => {
                ChangeUrl({ url: Links.comedy, check: false });
              }}
            >
              <div className="df">
                <div className="mimg">
                  <img src={comedy} alt="notfound" width="30px"></img>
                </div>
                Comedy
              </div>
            </div>
            <div
              className="myanchor"
              onClick={() => {
                ChangeUrl({ url: Links.crime, check: true });
              }}
            >
              <div className="df">
                <div className="mimg">
                  <img src={crime} alt="notfound" width="30px"></img>
                </div>
                Crime
              </div>
            </div>
            <div
              className="myanchor"
              onClick={() => {
                ChangeUrl({ url: Links.documentaries, check: false });
              }}
            >
              <div className="df">
                <div className="mimg">
                  <img src={documentary} alt="notfound" width="30px"></img>
                </div>
                Documentary
              </div>
            </div>
            <div
              className="myanchor"
              onClick={() => {
                ChangeUrl({ url: Links.comedy, check: false });
              }}
            >
              <div className="df">
                <div className="mimg">
                  <img src={drama} alt="notfound" width="30px"></img>
                </div>
                Drama
              </div>
            </div>
            <div
              className="myanchor"
              onClick={() => {
                ChangeUrl({ url: Links.trending, check: false });
              }}
            >
              <div className="df">
                <div className="mimg">
                  <img src={family} alt="notfound" width="30px"></img>
                </div>
                Family
              </div>
            </div>
            <div
              className="myanchor"
              onClick={() => {
                ChangeUrl({ url: Links.horror, check: false });
              }}
            >
              <div className="df">
                <div className="mimg">
                  <img src={horror} alt="notfound" width="30px"></img>
                </div>
                Horror
              </div>
            </div>
            <div
              className="myanchor"
              onClick={() => ChangeUrl({ url: Links.fiction, check: true })}
            >
              <div className="df">
                <div className="mimg">
                  <img src={fiction} alt="notfound" width="30px"></img>
                </div>
                Ficton
              </div>
            </div>
          </div>
          {/* //   trending action documentaries comedy horror */}
        </div>

        <div className="bgc"></div>
        <div>
          <Child
            GetUrl={urlUsed === undefined ? Links.popular : urlUsed.url}
            Check={urlUsed === undefined ? true : urlUsed.check}
          />
        </div>
      </div>
    </>
  );
}
