import React, { useState, useEffect } from 'react'
import PostCardNormal from './PostCardNormal';

const ImageGallery = ({ imageList, handleImageClick }) => {

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  var bigHeight = (windowSize.width * 2) / 3.17;
  var fixedWidth = windowSize.width;

  const combinePosts = (postsList) => {
    const finalList = [];
    for (var i = 0; i < postsList?.length; i += 6) {
      finalList.push(
        <div style={{ display: 'flex', flexDirection: "row" }}>
          <PostCardNormal
            handleImageClick={handleImageClick}
            postInfo={postsList[i]}
            fixedWidth={fixedWidth / 1.5}
            fixedHeight={bigHeight / 1.8}
          />
          <div>
            {postsList[i + 1] ? (
              <PostCardNormal
                handleImageClick={handleImageClick}
                postInfo={postsList[i + 1]}
                fixedWidth={fixedWidth / 2}
                fixedHeight={bigHeight / 3.6}
              />
            ) : null}
            {postsList[i + 2] ? (
              <PostCardNormal
                handleImageClick={handleImageClick}
                postInfo={postsList[i + 2]}
                fixedWidth={fixedWidth / 2}
                fixedHeight={bigHeight / 3.6}
              />
            ) : null}
          </div>
        </div>
      );
      finalList.push(
        <div style={{ display: 'flex', flexDirection: "row" }}>
          <div>
            {postsList[i + 3] ? (
              <PostCardNormal
                handleImageClick={handleImageClick}
                postInfo={postsList[i + 3]}
                fixedWidth={fixedWidth / 2}
                fixedHeight={bigHeight / 3.6}
              />
            ) : null}
            {postsList[i + 4] ? (
              <PostCardNormal
                handleImageClick={handleImageClick} 
                postInfo={postsList[i + 4]}
                fixedWidth={fixedWidth / 2}
                fixedHeight={bigHeight / 3.6}
              />
            ) : null}
          </div>
          {postsList[i + 5] ? (
            <PostCardNormal
              handleImageClick={handleImageClick}
              postInfo={postsList[i + 5]}
              fixedWidth={fixedWidth / 1.5}
              fixedHeight={bigHeight / 1.8}
            />
          ) : null}
        </div>
      );
    }
    return finalList;
  };

  const combineImageList = combinePosts(imageList)


  return (
    <div>{combineImageList.map((item) => (item))}</div>
  )
}

export default ImageGallery