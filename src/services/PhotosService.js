import axios from 'axios';

export default class PhotosService {
  async getPhotos() {
    try {
      const response = await axios.get('https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&format=json&nojsoncallback=1', {
        params: {
          api_key: 'af69d3685df6143d414271128a19badc',
          user_id: '75527516@N07',
          extras: 'date_taken, tags'
        }
      });
      return this.generatePhotos(response.data.photos.photo);
    } catch (e) {
      console.log('Error getting photos from Flickr service...', e);
    }
  }

  async getPhotoDimensions(photoId) {
    try {
      const response = await axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&format=json&nojsoncallback=1', {
        params: {
          api_key: 'af69d3685df6143d414271128a19badc',
          photo_id: photoId
        }
      });
      return response.data.sizes.size;
    } catch (e) {
      console.log('Error getting photo dimensions from Flickr service...', e);
    }
  }

  generatePhotos(photosResponse) {
    var self = this;
    let photos = [];

    // Specifies which image in array to use from Flickr response
    var FLICKR_MEDIUM = 8;
    var FLICKR_LARGE_1600 = 10; 

    photosResponse.forEach(function(p) {
      self.getPhotoDimensions(p.id).then(function(response) {
        var largeImageDimensionData = response[FLICKR_LARGE_1600];
        var lsrc = largeImageDimensionData.source;
        var msrc = response[FLICKR_MEDIUM].source;
        var width = parseInt(largeImageDimensionData.width);
        var height = parseInt(largeImageDimensionData.height);
        var title = p.title;
        var tags = JSON.stringify(p.tags);
        var date = p.datetaken;

        var photo = {
          src: lsrc,
          url: msrc,
          width: width, 
          height: height,
          w: width, 
          h: height,
          title: title, 
          tags: tags,
          date: date
        };

        photos.push(photo);
      });
    });

    return photos;
  }
}
