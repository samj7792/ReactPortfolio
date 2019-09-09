import React from "react";
import { CardColumns, Card } from "react-bootstrap";
import potter from "../assets/images/harrypotter.jpg";
import solarsystem from "../assets/images/solarsystem.jpg";
import clicky from "../assets/images/clicky.jpg";
import podcast from "../assets/images/logopodcast.jpg";
import giftastic from "../assets/images/giftastic.gif"

export default function Portfolio() {
  return (
    <section id="content">
      <h2>Portfolio</h2>
      <hr />
      <CardColumns>
        <Card>
          <Card.Img src={potter} alt="Harry Potter Game" />
          <Card.ImgOverlay>
            <a
              className="text-decoration-none text-reset"
              href="https://harrypotter-csd.herokuapp.com/"
            >
              <Card.Title className="bg-secondary text-center p-1">
                Harry Potter Quiz Game
              </Card.Title>
            </a>
          </Card.ImgOverlay>
        </Card>
        <Card>
          <Card.Img src={solarsystem} alt="Solar System Adventure" />
          <Card.ImgOverlay>
            <a
              className="text-decoration-none text-reset"
              href="https://solarsystemadventure.herokuapp.com/"
            >
              <Card.Title className="bg-secondary text-center p-1">
                Solar System Adventure
              </Card.Title>
            </a>
          </Card.ImgOverlay>
        </Card>
        <Card>
          <Card.Img src={clicky} alt="Clicky Game" />
          <Card.ImgOverlay>
            <a
              className="text-decoration-none text-reset"
              href="https://fierce-fjord-59903.herokuapp.com/"
            >
              <Card.Title className="bg-secondary text-center p-1">
                Clicky Game
              </Card.Title>
            </a>
          </Card.ImgOverlay>
        </Card>
        <Card>
          <Card.Img src={podcast} alt="Harry Potter Game" />
          <Card.ImgOverlay>
            <a
              className="text-decoration-none text-reset"
              href="https://samj7792.github.io/destination_podcast/"
            >
              <Card.Title className="bg-secondary text-center p-1">
                Destination Podcast
              </Card.Title>
            </a>
          </Card.ImgOverlay>
        </Card>
        <Card>
          <Card.Img src={giftastic} alt="Harry Potter Game" />
          <Card.ImgOverlay>
            <a
              className="text-decoration-none text-reset"
              href="https://samj7792.github.io/GifTastic/"
            >
              <Card.Title className="bg-secondary text-center p-1">
                Giftastic!
              </Card.Title>
            </a>
          </Card.ImgOverlay>
        </Card>
      </CardColumns>
    </section>
  );
}
