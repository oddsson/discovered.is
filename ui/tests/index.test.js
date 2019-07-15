import { mount } from 'enzyme'
import React from 'react'

import ReleaseList from '../components/ReleaseList'

const releases = {
  albums: {
    href: "https://spotify.api.url",
    items: [
      {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/album/3oIFxDIo2fwuk4lwCmFZCx"
            },
            href: "https://api.spotify.com/v1/artists/6eUKZXaKkcviH0Ku9w2n3V",
            id: "6eUKZXaKkcviH0Ku9w2n3V",
            name: "Ed Sheearan",
            type: "artist",
            uri: "spotify:artist:6eUKZXaKkcviH0Ku9w2n3V"
          }
        ],
        available_markets: ["AE", "AR", "AT"],
        external_urls: {
          spotify: "https://open.spotify.com/album/3oIFxDIo2fwuk4lwCmFZCx"
        },
        genres: ["pop", "uk pop", "whatever"],
        href: "https://api.spotify.com/v1/albums/3oIFxDIo2fwuk4lwCmFZCx",
        id: "3oIFxDIo2fwuk4lwCmFZCx",
        images: [
          {
            height: 600,
            url: "https://i.scdn.co/image/4b516036a8449204a10703afa350331c57bf694c",
            width: 600
          }
        ],
        name: "No.6 Collaborations Project",
        release_date: "2019-07-12",
        release_date_precision: "day",
        total_tracks: 15,
        type: "album",
        uri: "spotify:album:3oIFxDIo2fwuk4lwCmFZCx"
      },
      {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/album/3oIFxDIo2fwuk4lwCmFZCx"
            },
            href: "https://api.spotify.com/v1/artists/6eUKZXaKkcviH0Ku9w2n3V",
            id: "6eUKZXaKkcviH0Ku9w2n3V",
            name: "Ed Sheearan",
            type: "artist",
            uri: "spotify:artist:6eUKZXaKkcviH0Ku9w2n3V"
          }
        ],
        available_markets: ["AE", "AR", "AT"],
        external_urls: {
          spotify: "https://open.spotify.com/album/3oIFxDIo2fwuk4lwCmFZCx"
        },
        genres: ["pop", "uk pop", "whatever"],
        href: "https://api.spotify.com/v1/albums/3oIFxDIo2fwuk4lwCmFZCx",
        id: "3oIFxDIo2fwuk4lwCmFZCx",
        images: [
          {
            height: 600,
            url: "https://i.scdn.co/image/4b516036a8449204a10703afa350331c57bf694c",
            width: 600
          }
        ],
        name: "Lorem nr 1",
        release_date: "2019-07-12",
        release_date_precision: "day",
        total_tracks: 15,
        type: "album",
        uri: "spotify:album:3oIFxDIo2fwuk4lwCmFZCx"
      },
      {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/album/3oIFxDIo2fwuk4lwCmFZCx"
            },
            href: "https://api.spotify.com/v1/artists/6eUKZXaKkcviH0Ku9w2n3V",
            id: "6eUKZXaKkcviH0Ku9w2n3V",
            name: "Ed Sheearan",
            type: "artist",
            uri: "spotify:artist:6eUKZXaKkcviH0Ku9w2n3V"
          }
        ],
        available_markets: ["AE", "AR", "AT"],
        external_urls: {
          spotify: "https://open.spotify.com/album/3oIFxDIo2fwuk4lwCmFZCx"
        },
        genres: ["pop", "uk pop", "whatever"],
        href: "https://api.spotify.com/v1/albums/3oIFxDIo2fwuk4lwCmFZCx",
        id: "3oIFxDIo2fwuk4lwCmFZCx",
        images: [
          {
            height: 600,
            url: "https://i.scdn.co/image/4b516036a8449204a10703afa350331c57bf694c",
            width: 600
          }
        ],
        name: "Lorem nr 2",
        release_date: "2019-07-12",
        release_date_precision: "month",
        total_tracks: 15,
        type: "album",
        uri: "spotify:album:3oIFxDIo2fwuk4lwCmFZCx"
      },
    ],
    limit: 20,
    next: "https://spotify.api.url",
    offset: 0,
    previous: null,
    total: 100
  }
}


describe("List of releases", () => {
  it("should be sorted by date ascending order if all releases have the same release date", () => {
    const rl = mount(<ReleaseList releases={releases} />)
    expect(rl.find(".AlbumName").first().text()).toEqual("No.6 Collaborations Project")
    expect(rl.find(".AlbumName").at(1).text()).toEqual("Lorem nr 1")
    expect(rl.find(".AlbumName").at(2).text()).toEqual("Lorem nr 2")
  })

  it("should sort by ascending date", () => {
    releases.albums.items[1].release_date = "2019-07-13";
    const rl = mount(<ReleaseList releases={releases} />)
    expect(rl.find(".AlbumName").first().text()).toEqual("Lorem nr 1")
    expect(rl.find(".AlbumName").at(1).text()).toEqual("No.6 Collaborations Project")
    expect(rl.find(".AlbumName").at(2).text()).toEqual("Lorem nr 2")
  })

  // TODO: Implement this so that 2019-07 is sorted lower then 2019-07-10, fx.
  // it("should sort dates with day precition higher then dates with month precition", () => {
  //   releases.albums.items[1].release_date = "2019-07";
  //   const rl = mount(<ReleaseList releases={releases} />)
  //   expect(rl.find(".AlbumName").first().text()).toEqual("No.6 Collaborations Project")
  //   expect(rl.find(".AlbumName").at(1).text()).toEqual("Lorem nr 2")
  //   expect(rl.find(".AlbumName").at(2).text()).toEqual("Lorem nr 1")
  // })
})
