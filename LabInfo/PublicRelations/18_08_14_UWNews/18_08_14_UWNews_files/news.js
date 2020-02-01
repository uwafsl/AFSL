/**
 * jQuery UW Weather v1.1 (coffeescript)
 * ==========================
*/


(function($) {
  return $.fn.extend({


    weather: function(settings) {
      var days, gather, image_url, isSuccessful, json_url, key, link, months, options, parameters, query, url, value, sizes;
      url = "http://www.atmos.washington.edu/rss/home.rss";
      link = "http://www.atmos.washington.edu/weather/forecast/";
      json_url = "http://ajax.googleapis.com/ajax/services/feed/load?";
      image_url = "http://www.washington.edu/static/image/weather/";
      days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      months = ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
      parameters = {
        v: "1.0",
        refreshInterval: 1800,
        callback: '?',
        q: url
      };
      options = {
        image: '',
        icon: '',
        city: true,
        anchor: true,
        condition: false,
        showdate: false,
        fahrenheit: true,
        ssl: false
      };
      sizes = {
        'news': 200,
        'small':56
      
      }
      $.extend(options, settings);
      if (options.ssl) {
        json_url = json_url.replace('http', 'https');
      }
      image_url = "" + image_url + options.icon + "/";
      isSuccessful = function(response) {
        return response.query.lang === "en-US";
      };
      gather = function(data) {
        return data.title.split("| ")[1];
      };

      query = ((function() {
        var _results;
        _results = [];
        for (key in parameters) {
          value = parameters[key];
          _results.push("" + key + "=" + value);
        }
        return _results;
      })()).join('&');




      return this.each(function() {

        var self;
        self = jQuery(this);
        return $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'http%3A%2F%2Fwww.atmos.washington.edu%2Frss%2Fhome.rss'&format=json&diagnostics=true&callback", function(response) {
          var city, condition, current_datetime, current_weather, data, date, entry, image, img_src, img_tag, temperature, weather_condition, weather_datetime, _ref;
          if (isSuccessful(response)) {
            data = response.query.results.item;
            _ref = [
              (function() {
                var _i, _len, _results;
                _results = [];
                for (_i = 0, _len = data.length; _i < _len; _i++) {
                  entry = data[_i];
                  _results.push(gather(entry));
                }
                return _results;
              })()
            ][0], temperature = _ref[0], condition = _ref[1], image = _ref[2];
            if (!options.fahrenheit) {
              temperature = temperature.replace('F', '');
            }
            date = new Date(Date.parse(data[0].pubDate
              ));
            current_datetime = "" + days[date.getDay()] + ", " + months[date.getMonth()] + " " + (date.getDate()) + ", " + (date.getFullYear());
            img_src = "" + image_url + image + options.image;
            if (options.ssl) {
              img_src = img_src.replace("http", "https");
            }
            city = options.city ? "<span class='weather-city'> Seattle </span>" : "";
            city += "<span class='weather-temp'>" + temperature + "</span>";
            if (condition.length) {
              current_weather = "" + condition;
            }
            img_tag = image !== "00" ? "<img src='" + img_src + "' alt='" + current_weather + "' title='" + current_weather + "' />" : "";
            //if (options.anchor) {
            img_tag = "<a href='" + link + "' style='width:"+sizes[options.icon]+"px;background-image:url("+img_src+");text-indent:-10000px;' title='"+ current_weather + "'>Forecast</a>";
            //}
            weather_condition = options.condition ? "<span class='weather-condition'>" + current_weather + "</span>" : "";
            weather_datetime = options.showdate ? "<span class='weather-datetime'>" + current_datetime + "</span>" : "";
            self.empty().append(img_tag).append(city).append(weather_condition).append(weather_datetime);
          }
        });
      });
    }
  });
})(jQuery);


$(document).ready(function() {

  var tabs = '[data-tabs]';

  $(tabs).siblings('div').show().last().hide();

  $('body').on('click.tabs', tabs, function(e) {
  
    var tab  = $(e.target)
      , pane = tab.attr('href')

    $(pane).show().siblings().not(tabs).hide();
    tab.closest('li').addClass('selected').siblings('li').removeClass('selected');

    return false;

  });
	
  $('#nc-weather').weather({icon:'news', 'condition':true, 'showdate':true, 'fahrenheit':false, ssl:true})
	
});
