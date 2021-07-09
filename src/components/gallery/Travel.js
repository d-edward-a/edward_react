import React, {useEffect, useState} from "react";
import {Loader} from "./Loader";
import {UnsplashImage} from "./UnsplashImage";
import axios from 'axios';
import styled from "styled-components";
import {createGlobalStyle} from "styled-components";
import InfiniteScroll from 'react-infinite-scroll-component';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }
`;

const WrapperImage = styled.section`
  max-width: 70rem;
  margin: 4rem;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

export const Travel = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchImages();
        // eslint-disable-next-line
    }, []);

    const fetchImages = () => {
        const apiRoot = "https://api.unsplash.com";

        axios.get(`${apiRoot}/photos/random?client_id=ctwj_4S_BMhrS-JJCS5EBrEUH81MnXeU4vbkjheqegM&count=8`)
            .then(res => setImages([...images, ...res.data]))
    }

    return (
        <div>
            <GlobalStyle />
            <InfiniteScroll
                dataLength={images.length}
                next={fetchImages}
                hasMore={true}
                loader={<Loader />}
            >
                <WrapperImage>
                    {images.map(image => (
                        <UnsplashImage url={image.urls.thumb} key={image.id}/>
                    ))}
                </WrapperImage>
            </InfiniteScroll>
        </div>
    )
}
