
import ImageLoader from '../ImageLoader.js';

describe("load images", function() {

  const images={
  'cube':'./res/07-cube.jpg',
  'vase1':'./res/vase1.jpg',
  'vase2':'./res/vase2.jpg',
  'vase3':'./res/vase3.jpg',
  'vase4':'./res/vase4.jpg',
  'vase5':'./res/vase5.jpg',
  'vase6':'./res/vase6.jpg',
  'vase7':'./res/vase7.jpg',
  'vase8':'./res/vase8.jpg',
  'vase9':'./res/vase9.jpg',
  'vase10':'./res/vase10.jpg',
  'vase11':'./res/vase11.jpg',
  'vase12':'./res/vase12.jpg',
  'vase13':'./res/vase13.jpg',
  'vase14':'./res/vase14.jpg',
  'vase15':'./res/vase15.jpg'
}
   let loader = new ImageLoader();
  beforeEach(function() {
    spyOn(loader,'load').and.callThrough();
    loader.on(null);
    loader.load(images);
  });

  it("Load image function should be called", function() {

     expect(loader.load).toHaveBeenCalledWith(images);
  });

  it("should be able to load pictures", function() {

   //  expect(loader.load).toHaveBeenCalledWith(images);
         expect(loader._loadFlag).toBe(true);
  });

  it("should be able to emit prograss", function() {

    expect(loader._emitFlag).toBe(true);

  });

/*  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });
  */
});
