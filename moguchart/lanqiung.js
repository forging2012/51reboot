"use strict";
angular.module("config", []).constant("SITE", {
  apiDomain: "/static/data/",
  locale: "zh_CN",
  useStaticFeed: true,
  defaultCountry: "CN",
  expandFilterToggle: true,
  useDoubleNamePlayerIndex: true,
  fullWidthNav: true,
  aTarget: "_parent",
  gameUrlConfig: {
    live: {
      sequence: 10,
      target: "_parent"
    },
    leaguepass: {
      sequence: 11,
      target: "_parent"
    },
    "stats-preview": {
      sequence: 12,
      target: "_parent"
    },
    "stats-boxscore": {
      sequence: 13,
      target: "_parent"
    },
    "stats-playbyplay": {
      sequence: 14,
      target: "_parent"
    }
  },
  pbpActiveTab: 2,
  useCustomTeamNav: false,
  useConsolidatedPlayerFeed: true,
  playerImage: {
    head: {
      notfound: "/media/img/players/head/230x185/not_found.png",
      img: "/media/img/players/head/260x190/%id%.png"
    },
    silo: {
      notfound: "/media/img/players/silos/220x350/not_found.png",
      img: "/media/img/players/silos/220x350/%id%.png"
    }
  }
}).constant("Site", {
  apiDomain: "/static/data/",
  locale: "zh_CN",
  useStaticFeed: true,
  defaultCountry: "CN",
  expandFilterToggle: true,
  useDoubleNamePlayerIndex: true,
  fullWidthNav: true,
  aTarget: "_parent",
  gameUrlConfig: {
    live: {
      sequence: 10,
      target: "_parent"
    },
    leaguepass: {
      sequence: 11,
      target: "_parent"
    },
    "stats-preview": {
      sequence: 12,
      target: "_parent"
    },
    "stats-boxscore": {
      sequence: 13,
      target: "_parent"
    },
    "stats-playbyplay": {
      sequence: 14,
      target: "_parent"
    }
  },
  pbpActiveTab: 2,
  useCustomTeamNav: false,
  useConsolidatedPlayerFeed: true,
  playerImage: {
    head: {
      notfound: "/media/img/players/head/230x185/not_found.png",
      img: "/media/img/players/head/260x190/%id%.png"
    },
    silo: {
      notfound: "/media/img/players/silos/220x350/not_found.png",
      img: "/media/img/players/silos/220x350/%id%.png"
    }
  }
});
"use strict";
angular.module("jm.i18next").config(["$i18nextProvider", "Site", function($i18nextProvider, Site) {
  "use strict";
  $i18nextProvider.options = {
    cookieExpirationTime: 86400,
    useCookie: true,
    lng: Site.locale,
    useLocalStorage: false,
    fallbackLng: "en",
    resGetPath: "/scripts/locales/__lng__/__ns__.json"
  }
}]);
var sib = angular.module("sib", ["config", "highcharts-ng", "jm.i18next", "tmh.dynamicLocale", "ngCookies", "ngSanitize", "ngLocale", "pasvaz.bindonce", "ngAnimate", "ngDialog"]).constant("FEEDS_CONFIG", {
  locale: "en",
  feedLocalePrefix: "",
  prefix: "stats2/",
  debug: false,
  liveGameTrackerFeedUpdateInterval: 21e3,
  liveFeedUpdateInterval: 2e4,
  staticFeedUpdateInterval: 3e5,
  scoreboardUpdateInterval: 26e3,
  requestMethod: "get",
  useStaticFeed: false,
  defaultCountry: "US",
  playByPlay: "game/playbyplay.json",
  gameProfile: "game/profile.json",
  gameSnapshot: "game/snapshot.json",
  gameSnapshotLive: "game/snapshotlive.json",
  miniScoreBoard: "scores/miniscoreboard.json",
  miniScoreBoardLive: "scores/miniscoreboardlive.json",
  playerAwards: "player/awards.json",
  teamAwards: "team/awards.json",
  playerStats: "player/stats.json",
  historicalPlayerStats: "player/historicalstats.json",
  playerHotzones: "player/hotzone.json",
  playerSnapshot: "player/snapshot.json",
  whosHot: "league/playerwhoshot.json",
  playerList: "league/playerlist.json",
  historicalPlayerList: "league/historicalplayerlist.json",
  schedule: "season/schedule.json",
  broadcasterSchedule: "season/broadcasterSchedule.json",
  broadcasterScheduleForm: "season/broadcasterScheduleForm.json",
  scores: "scores/daily.json",
  playerStatsForm: "league/playerstatsform.json",
  historicalplayerListForm: "league/historicalplayerlistform.json",
  conferenceTeamList: "league/conferenceteamlist.json",
  divisionTeamList: "league/divisionteamlist.json",
  historicalTeamList: "league/historicalteamlist.json",
  historicalTeamStats: "team/historicalstats.json",
  conferenceStanding: "season/conferencestanding.json",
  divisionStanding: "season/divisionstanding.json",
  leagueLeadingPlayers: "league/dailyplayerleader.json",
  leaguePlayerStats: "league/playerstats.json",
  leaguePlayerStatsForm: "league/playerstatsform.json",
  leagueTeamStats: "league/teamstats.json",
  leagueTeamStatsForm: "league/teamstatsform.json",
  leagueAdvancedTeamStats: "league/advancedteamstats.json",
  leagueAdvancedTeamStatsForm: "league/advancedteamstatsform.json",
  teamLeaders: "team/leader.json",
  teamSchedule: "team/schedule.json",
  gamePreview: "game/preview.json",
  gameDayStatus: "scores/gamedaystatus.json",
  teamStats: "team/stats.json",
  teamRoster: "team/roster.json",
  teamHotzones: "team/hotzone.json",
  teamPlayerStats: "team/playerstats.json",
  teamStanding: "team/standing.json",
  playoffBracket: "playoff/bracket.json",
  playoffSummary: "playoff/summary.json",
  playoffSummarylive: "playoff/summarylive.json",
  playoffSeries: "playoff/series.json",
  playoffSerieslive: "playoff/serieslive.json",
  playoffPictureMatchup: "playoff/picturematchup.json",
  leaguePlayerHotzones: "league/playerhotzone.json",
  leagueTeamHotzones: "league/teamhotzone.json",
  playerCareerStats: "player/careerstats.json",
  playoffSeriesScore: "playoff/seriesScore.json",
  playoffSeriesScoreLive: "playoff/seriesScoreLive.json",
  teamCode: ["hawks", "celtics", "nets", "hornets", "bulls", "cavaliers", "pistons", "pacers", "heat", "bucks", "knicks", "magic", "sixers", "raptors", "wizards", "mavericks", "nuggets", "warriors", "rockets", "clippers", "lakers", "grizzlies", "timberwolves", "pelicans", "thunder", "suns", "blazers", "kings", "spurs", "jazz"]
}).constant("TEAM_TWITTER", {
  raptors: "Raptors",
  warriors: "warriors",
  nuggets: "nuggets",
  thunder: "okcthunder",
  pelicans: "PelicansNBA",
  mavericks: "dallasmavs",
  bobcats: "hornets",
  hornets: "hornets",
  lakers: "Lakers",
  knicks: "nyknicks",
  timberwolves: "Timberwolves",
  clippers: "LAClippers",
  magic: "OrlandoMagic",
  pacers: "Pacers",
  cavaliers: "cavs",
  rockets: "HoustonRockets",
  nets: "BrooklynNets",
  suns: "Suns",
  spurs: "spurs",
  jazz: "utahjazz",
  celtics: "celtics",
  hawks: "ATLHawks",
  pistons: "detroitpistons",
  bulls: "chicagobulls",
  sixers: "Sixers",
  bucks: "Bucks",
  wizards: "WashWizards",
  heat: "MiamiHEAT",
  grizzlies: "memgrizz",
  blazers: "trailblazers",
  kings: "SacramentoKings"
});
sib.config(["$locationProvider", function($locationProvider) {
  $locationProvider.html5Mode(false);
  $locationProvider.hashPrefix("!")
}]);
sib.run(["$rootScope", "Page", "tmhDynamicLocale", "$cookies", "$timeout", "$location", "FEEDS_CONFIG", "Site", function($rootScope, Page, tmhDynamicLocale, $cookies, $timeout, $location, FEEDS_CONFIG, Site) {
  $rootScope.debug = FEEDS_CONFIG.debug;
  $rootScope.errors = [];
  if (Site != null) {
    FEEDS_CONFIG.prefix = Site.apiDomain;
    angular.extend(FEEDS_CONFIG, Site)
  }
  $rootScope.showNav = $location.search().showNav == "false" ? false : true;
  $rootScope.showFooter = $location.search().showFooter == "false" ? false : true;
  $rootScope.mobileAppViewMode = $location.search().isMobileApp == "true" ? true : false;
  if ($rootScope.mobileAppViewMode) {
    $.cookie("isMobileApp", "true", {
      path: "/"
    })
  }
  try {
    if ($rootScope.mobileAppViewMode || angular.isDefined($.cookie("isMobileApp")) && $.cookie("isMobileApp") != null) {
      $rootScope.showNav = false;
      $rootScope.showFooter = false
    }
  } catch (e) {
    console.log("Error in app.js" + e)
  }
  Page.setLoading(true);
  var lang = $cookies.get("i18next");
  tmhDynamicLocale.set(lang);
  Page.changeLanguage(lang, false);
  $rootScope.$on("i18nextLanguageChange", function(language) {
    var lang = $cookies.get("i18next");
    Page.setLanguageLoading(false);
    Page.setPermitLoading(false);
    Page.setLoading(false)
  });
  $rootScope.$on("event:xhr", function(event, arg) {
    if (typeof window.onXhr !== "undefined") {
      window.onXhr(arg)
    }
  });
  $rootScope.facebookAppId = "373035032722929";
  $rootScope.copyrightYear = (new Date).getFullYear();
  if (Site.fullWidthNav != null && angular.isDefined(Site.fullWidthNav)) {
    $rootScope.fullWidthNav = Site.fullWidthNav
  } else {
    $rootScope.fullWidthNav = false
  }
}]);
sib.controller("DraftController", ["Page", "$scope", function DraftController(Page, $scope) {
  "use strict";
  if (window.location.pathname.indexOf("draft") > 0) {
    Page.setTitle("_page.draft")
  }
  $scope.showDraftStream = false;
  $scope.toggleTable = function() {
    $(".toggle").toggleClass("on");
    $scope.showDraftStream = !$scope.showDraftStream;
    if ($scope.showDraftStream == true) {
      $(window).trigger("resize")
    }
  };
  var element = document.getElementById("toggle-control");
  if (!$("html").hasClass("ie8") && element) {
    Hammer(element).on("swipeleft", function(event) {
      if ($(".toggle.on").length == 0) {
        $(".toggle").toggleClass("on")
      }
      $scope.showDraftStream = false;
      if (!$scope.$$phase) {
        $scope.$apply()
      }
    });
    Hammer(element).on("swiperight", function(event) {
      if ($(".toggle.on").length > 0) {
        $(".toggle").toggleClass("on")
      }
      $scope.showDraftStream = true;
      if (!$scope.$$phase) {
        $scope.$apply()
      }
    });
    if (window.isAndroid) {
      Hammer(element).on("dragleft", function(event) {
        event.preventDefault();
        Hammer(element).trigger("swipeleft", event)
      });
      Hammer(element).on("dragright", function(event) {
        event.preventDefault();
        Hammer(element).trigger("swiperight", event)
      })
    }
  }
}]);
sib.controller("DraftBoardController", ["$scope", "$timeout", "SimpleFeedFetcher", "FEEDS_CONFIG", function DraftBoardController($scope, $timeout, SimpleFeedFetcher, FEEDS_CONFIG) {
  "use strict";
  var updateInterval = 3e4;
  var userSelectedRound = -1;
  var picksPerRound = 30;
  var maxRounds = 2;
  var timer;
  $scope.selectRound = function(roundNo) {
    userSelectedRound = roundNo;
    selectRound(userSelectedRound)
  };

  function selectRound(roundNo) {
    $scope.selectedRound = roundNo
  }

  function getDraftNameCode(headShotUrl) {
    var splitHeadShotUrl = headShotUrl.split("/");
    var playerCodeImg = splitHeadShotUrl[splitHeadShotUrl.length - 1];
    var playerCode = playerCodeImg.substring(0, playerCodeImg.length - 4);
    return playerCode
  }

  function loadDraftPicks() {
    var feed = "/feeds/DraftPicks/draftpicks.json";
    SimpleFeedFetcher.get(feed).then(function(data) {
      var defaultRound = 1;
      var lastRound = defaultRound;
      var selectedPlayers = 0;
      angular.forEach(data, function(item) {
        if (item.PlayerName && item.PlayerName.trim().length > 0) {
          selectedPlayers++;
          lastRound = item.Round;
          item.PlayerCode = getDraftNameCode(item.Headshot)
        }
      });
      if (selectedPlayers > picksPerRound && selectedPlayers < picksPerRound * maxRounds) {
        defaultRound = lastRound
      }
      $scope.draftees = data;
      if (angular.isDefined($scope.draftees) && selectedPlayers == 60) {
        $timeout.cancel(timer)
      } else {
        timer = $timeout(loadDraftPicks, updateInterval)
      }
      selectRound(userSelectedRound == -1 ? defaultRound : userSelectedRound)
    })
  }
  loadDraftPicks()
}]);
"use strict";
sib.controller("ActiveBoxscoreTabCtrl", ["$scope", "$location", "$filter", "$timeout", "FEEDS_CONFIG", function ActiveBoxscoreTabCtrl($scope, $location, $filter, $timeout, FEEDS_CONFIG) {
  if (!$("html").hasClass("ie8")) {
    $scope.$watch("activeBoxscoreTab", function(value) {
      if (typeof $scope.game == "undefined") {
        return
      }
      var url = "";
      if ($scope.activeBoxscoreTab == "playerstats") {
        url = "/boxscore/#!/" + $scope.game.gameProfile.gameId
      } else if ($scope.activeBoxscoreTab == "gamestream") {
        var gamestreamUrlDate = $filter("date")($scope.game.gameProfile.utcMillis, "yyyyMMdd");
        var gamestreamUrlParamDate = $filter("date")($scope.game.gameProfile.utcMillis, "yyyy-MM-dd");
        var teamAbbr = $scope.game.awayTeam.profile.abbr + "|" + $scope.game.homeTeam.profile.abbr;
        url = "/scores/" + $scope.activeBoxscoreTab + "/#!/" + gamestreamUrlDate + "?ds=single&gameDate=" + gamestreamUrlParamDate + "&teams=" + teamAbbr
      } else {
        url = "/boxscore/" + $scope.activeBoxscoreTab + "/#!/" + $scope.game.gameProfile.gameId
      }
      window.location = url
    })
  }

  function removeHiddenElements() {
    $timeout(function() {
      var $gamestream = $("option.gamestream");
      $gamestream.css("display") == "none" ? $gamestream.remove() : $.noop;
      var $playbyplay1 = $("option.play-by-play-1");
      $playbyplay1.css("display") == "none" ? $playbyplay1.remove() : $.noop
    })
  }
  removeHiddenElements()
}]);
"use strict";
sib.controller("BoxscoreNavCtrl", ["$scope", "$location", "$timeout", "SimpleFeedFetcher", "FEEDS_CONFIG", "Site", "$filter", function BoxscoreNavCtrl($scope, $location, $timeout, SimpleFeedFetcher, FEEDS_CONFIG, Site, $filter) {
  $scope.recapExist = false;
  $scope.gamestreamExist = false;
  $scope.$on("activeBoxscoreTabBroadcast", function(event, args) {
    $scope.activeBoxscoreTab = args.tab
  });
  $scope.$on("event:$scope.game", function() {
    if (Site.hasOwnProperty("gameRecap") && Site.gameRecap == true) {
      angular.forEach($scope.game.urls, function(url) {
        if (url.type == "Recap") {
          $scope.recapExist = true
        }
      })
    }
    if (Site.hasOwnProperty("gameStream")) {
      $scope.gamestreamUrlDate = $filter("date")($scope.game.gameProfile.utcMillis, "yyyyMMdd");
      $scope.gamestreamUrlParamDate = $filter("date")($scope.game.gameProfile.utcMillis, "yyyy-MM-dd");
      for (var i = 0; i < Site.gameStream.games.length; i++) {
        if (Site.gameStream.games[i] == $scope.game.gameProfile.gameId) {
          $scope.gamestreamExist = true
        }
      }
      if (angular.isUndefined(Site.gameStream.leagueId) || Site.gameStream.leagueId.length == 0) {
        for (var j = 0; j < Site.gameStream.seasonTypes.length; j++) {
          if (Site.gameStream.seasonTypes[j] == $scope.game.gameProfile.seasonType) {
            $scope.gamestreamExist = true
          }
        }
      }
      if (angular.isDefined(Site.gameStream.leagueId) && Site.gameStream.leagueId.length > 0) {
        var leagueId = $scope.game.gameProfile.gameId.substr(0, 2);
        for (var j = 0; j < Site.gameStream.seasonTypes.length; j++) {
          for (var i = 0; i < Site.gameStream.leagueId.length; i++) {
            if (Site.gameStream.seasonTypes[j] == $scope.game.gameProfile.seasonType && Site.gameStream.leagueId[i] == leagueId) {
              $scope.gamestreamExist = true
            }
          }
        }
      }
    }
  })
}]);
"use strict";
sib.controller("BoxScorePlayByPlayCtrl", ["$scope", "$location", "$timeout", "Page", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", "Site", function BoxScorePlayByPlayCtrl($scope, $location, $timeout, Page, StatsFeedFetcher, UrlParams, FEEDS_CONFIG, Site) {
  Page.setTitle("_page.boxscore");
  $scope.$emit("activeBoxscoreTabEmit", {
    tab: "playbyplay"
  });
  loadLibraries();
  $scope.filterQuarter = 0;
  $scope.selectedPeriod = -1;
  $scope.currentPeriod = 0;
  $scope.activeTab = 1;
  $scope.chartConfig = {
    options: {
      chart: {
        type: "spline",
        marginBottom: 70
      },
      plotOptions: {
        series: {
          marker: {
            enabled: false
          }
        }
      },
      legend: {
        align: "left",
        floating: true,
        x: 30,
        borderRadius: 0,
        itemStyle: {
          fontFamily: "'Lato', sans-serif"
        }
      },
      tooltip: {
        borderRadius: 0,
        borderWidth: 0,
        backgroundColor: "#f6f6f6",
        crosshairs: [true, false],
        shadow: false,
        xDateFormat: "%H:%M",
        headerFormat: "",
        useHTML: true,
        style: {
          padding: 0,
          fontFamily: "'Lato', sans-serif"
        },
        pointFormat: '<div class="row tooltip-event">' + '<div class="col-6">{point.score}</div>' + '<div class="col-6 text-right">{point.gameClock} {point.quarter}</div>' + "</div>" + '<div class="row">' + '<div class="col-12">{point.name}</div>' + "</div>"
      },
      title: null
    },
    series: [{
      name: "homeTeam",
      color: "#FF0000",
      pointInterval: 1e3,
      data: []
    }, {
      name: "awayTeam",
      pointInterval: 1e3,
      color: "#000000",
      data: []
    }],
    yAxis: {
      allowDecimals: false,
      startOnTick: true,
      title: {
        enabled: false
      },
      labels: {
        style: {
          fontFamily: "'Lato', sans-serif"
        }
      }
    },
    xAxis: {
      type: "datetime",
      tickPositioner: function() {
        var inc = parseInt((this.dataMax - this.dataMin) * .25);
        var tickOffset = inc * .45;
        return [0 + tickOffset, inc + tickOffset, inc * 2 + tickOffset, inc * 3 + tickOffset]
      },
      labels: {
        enabled: true,
        formatter: function() {
          var pct = parseInt(1 + this.value / this.axis.dataMax * 100 / 25);
          if (pct > 4) {
            var qtr = "Q" + pct
          } else {
            var qtr = "OT" + (pct - 4)
          }
          return qtr
        },
        style: {
          fontFamily: "'Lato', sans-serif"
        }
      },
      title: {
        color: "#000"
      },
      plotLines: []
    },
    credits: {
      enabled: false
    },
    loading: true
  };

  function fetchPlayByPlay(currentPeriod) {
    var additionalParameters = {};
    if (currentPeriod != undefined) {
      if (currentPeriod == 0) {
        currentPeriod = "all"
      }
      additionalParameters.period = currentPeriod
    }
    StatsFeedFetcher.fetch(FEEDS_CONFIG.playByPlay, UrlParams.create(["gameId"], additionalParameters, false, false)).then(function(data) {
      $scope.chartConfig.loading = true;
      $scope.pbp = data;
      $scope.pbp.boxscore.period = Number($scope.pbp.boxscore.period);
      $scope.quarterArray = [];
      for (var i = 0; i < $scope.currentPeriod; i++) {
        var x = i + 1;
        $scope.quarterArray.push(x)
      }
      $scope.filterChart($scope.filterQuarter);
      $scope.filterList($scope.filterQuarter);
      $scope.chartConfig.loading = false
    })
  }
  $scope.filterBy = function(period) {
    $scope.filterQuarter = period;
    $scope.selectedPeriod = period;
    if (FEEDS_CONFIG.debug) console.log("Filtering by Q: " + period);
    fetchPlayByPlay(period)
  };
  $scope.filterList = function(period) {
    if (typeof $scope.game == "undefined" || typeof $scope.game.homeTeam == "undefined" || typeof $scope.game.awayTeam == "undefined") {
      return
    }
    if (period < 1) period = 1;
    angular.forEach($scope.pbp.playByPlays, function(data) {
      if (data.period == period) {
        var eventsData = data.events;
        var events = [];
        var awayTeamId = $scope.pbp.gameProfile.awayTeamId;
        var homeTeamId = $scope.pbp.gameProfile.homeTeamId;
        angular.forEach(eventsData, function(eventData) {
          var event = {
            gameClock: eventData.gameClock,
            homeScore: eventData.homeScore,
            awayScore: eventData.awayScore,
            points: eventData.points,
            playerId: eventData.playerId,
            description: eventData.description
          };
          if (eventData.teamId == awayTeamId) {
            event.team = $scope.game.awayTeam.profile;
            event.team.teamId = awayTeamId
          } else if (eventData.teamId == homeTeamId) {
            event.team = $scope.game.homeTeam.profile;
            event.team.teamId = homeTeamId
          }
          if (eventData.teamId == awayTeamId && eventData.playerId > 0) {
            angular.forEach($scope.game.awayTeam.gamePlayers, function(player) {
              if (player.profile.playerId == eventData.displayPlayerId) {
                event.player = player.profile;
                return
              }
            })
          } else if (eventData.teamId == homeTeamId && eventData.playerId > 0) {
            angular.forEach($scope.game.homeTeam.gamePlayers, function(player) {
              if (player.profile.playerId == eventData.displayPlayerId) {
                event.player = player.profile;
                return
              }
            })
          }
          if (eventData.teamId == awayTeamId && eventData.points > 0) {
            event.awayScored = true
          } else if (eventData.teamId == homeTeamId && eventData.points > 0) {
            event.homeScored = true
          }
          events.push(event)
        });
        $scope.events = events;
        return
      }
    })
  };
  $scope.filterChart = function(period) {
    if (typeof $scope.game == "undefined" || typeof $scope.game.homeTeam == "undefined" || typeof $scope.game.awayTeam == "undefined") {
      return
    }
    $scope.chartConfig.loading = true;
    $scope.chartConfig.series[0].data = [];
    $scope.chartConfig.series[0].name = $scope.game.homeTeam.profile.displayAbbr;
    $scope.chartConfig.series[1].data = [];
    $scope.chartConfig.series[1].name = $scope.game.awayTeam.profile.displayAbbr;
    $scope.chartConfig.xAxis.plotLines = [];
    if (period == 0) {
      $scope.chartConfig.yAxis.min = 0;
      $scope.chartConfig.xAxis.labels.enabled = true
    } else {
      $scope.chartConfig.xAxis.labels.enabled = false
    }
    var lastHomeScore = null;
    var lastAwayScore = null;
    var lastPeriod = 1;
    var lastOffset = null;
    var offsetAdjustment = 0;
    if (period == 1) {
      $scope.chartConfig.xAxis.plotLines = [];
      $scope.chartConfig.yAxis.min = 0
    } else {
      $scope.chartConfig.xAxis.plotLines = [];
      $scope.chartConfig.yAxis.min = null
    }
    var events = [];
    angular.forEach($scope.pbp.playByPlays, function(data) {
      if (data.period == period) {
        events = data.events.slice().reverse();
        return
      } else if (period == 0) {
        events = events.concat(data.events)
      }
    });
    if (period == 0) {
      events = events.slice().reverse()
    }
    var startWallClockAsInt = $scope.pbp.playByPlays[0] ? $scope.pbp.playByPlays[0].events[0] ? $scope.pbp.playByPlays[0].events[0].wallClockAsInt : 0 : 0;
    angular.forEach(events, function(event) {
      var offsetTime = parseInt((event.wallClockAsInt - startWallClockAsInt) * 100) - offsetAdjustment;
      if (period == 0 || period == event.period) {
        if (lastPeriod != event.period) {
          if (lastPeriod == 2 && event.period == 3) {
            offsetAdjustment = offsetTime - lastOffset;
            offsetTime -= offsetAdjustment
          }
          if (period == 0) {
            $scope.chartConfig.yAxis.min = 0;
            $scope.chartConfig.xAxis.plotLines.push({
              color: "#000",
              width: 1,
              dashStyle: "dot",
              value: offsetTime
            })
          }
        }
        if (event.period > 4) {
          event.quarter = "OT" + (event.period - 4)
        } else {
          event.quarter = "Q" + event.period
        }
        if (event.homeScore !== lastHomeScore || event.description == "End Period" || event.description == "Start Period") {
          event.description = event.description == null ? "" : event.description;
          $scope.chartConfig.series[0].data.push({
            score: "<strong>" + event.homeScore + "</strong>-" + event.awayScore,
            gameClock: event.gameClock,
            period: event.period,
            quarter: event.quarter,
            name: event.description.replace(/^\[(.*)\]/, ""),
            x: offsetTime,
            y: parseInt(event.homeScore)
          })
        }
        if (event.awayScore !== lastAwayScore || event.description == "End Period" || event.description == "Start Period") {
          event.description = event.description == null ? "" : event.description;
          $scope.chartConfig.series[1].data.push({
            score: event.homeScore + "-<strong>" + event.awayScore + "</strong>",
            gameClock: event.gameClock,
            period: event.period,
            quarter: event.quarter,
            name: event.description.replace(/^\[(.*)\]/, ""),
            x: offsetTime,
            y: parseInt(event.awayScore)
          })
        }
        lastPeriod = event.period;
        lastOffset = offsetTime;
        lastHomeScore = event.homeScore;
        lastAwayScore = event.awayScore
      }
    });
    $scope.chartConfig.loading = false;
    $timeout(function() {
      $(window).trigger("resize")
    }, 250)
  };
  $scope.switchTab = function(tab) {
    switch (tab) {
      case 2:
        $scope.activeTab = tab;
        $scope.filterList($scope.filterQuarter);
        break;
      case 1:
      default:
        $scope.activeTab = 1;
        $scope.filterChart(0)
    }
  };
  if (Site.hasOwnProperty("pbpActiveTab") && angular.isNumber(Site.pbpActiveTab)) {
    $scope.switchTab(Site.pbpActiveTab)
  }

  function loadLibraries() {
    $.ajax({
      async: false,
      url: "/scripts/extra/highcharts/highcharts.js",
      dataType: "script",
      cache: true
    })
  }
  $scope.$on("event:$scope.game", function(event, args) {
    $scope.currentPeriod = $scope.game.boxscore.period;
    if ($scope.selectedPeriod >= 0 && $scope.selectedPeriod < $scope.game.boxscore.period) {
      fetchPlayByPlay($scope.selectedPeriod)
    } else {
      $scope.filterQuarter = $scope.game.boxscore.period;
      $scope.selectedPeriod = -1;
      fetchPlayByPlay($scope.game.boxscore.period)
    }
  })
}]);
"use strict";
sib.controller("BoxScorePlayByPlayCtrl2", ["$scope", "$location", "$timeout", "Page", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", function BoxScorePlayByPlayCtrl2($scope, $location, $timeout, Page, StatsFeedFetcher, UrlParams, FEEDS_CONFIG) {
  Page.setTitle("_page.boxscore");

  function activeTab() {
    $scope.$emit("activeBoxscoreTabEmit", {
      tab: "playbyplay2"
    })
  }
  activeTab();
  loadLibraries();
  $scope.filterQuarter = 0;
  $scope.selectedPeriod = -1;
  $scope.currentPeriod = 0;
  $scope.activeTab = 2;
  $scope.chartConfig = {
    options: {
      chart: {
        type: "spline",
        marginBottom: 70
      },
      plotOptions: {
        series: {
          marker: {
            enabled: false
          }
        }
      },
      legend: {
        align: "left",
        floating: true,
        x: 30,
        borderRadius: 0,
        itemStyle: {
          fontFamily: "'Lato', sans-serif"
        }
      },
      tooltip: {
        borderRadius: 0,
        borderWidth: 0,
        backgroundColor: "#f6f6f6",
        crosshairs: [true, false],
        shadow: false,
        xDateFormat: "%H:%M",
        headerFormat: "",
        useHTML: true,
        style: {
          padding: 0,
          fontFamily: "'Lato', sans-serif"
        },
        pointFormat: '<div class="row tooltip-event">' + '<div class="col-6">{point.score}</div>' + '<div class="col-6 text-right">{point.gameClock} {point.quarter}</div>' + "</div>" + '<div class="row">' + '<div class="col-12">{point.name}</div>' + "</div>"
      },
      title: null
    },
    series: [{
      name: "homeTeam",
      color: "#FF0000",
      pointInterval: 1e3,
      data: []
    }, {
      name: "awayTeam",
      pointInterval: 1e3,
      color: "#000000",
      data: []
    }],
    yAxis: {
      allowDecimals: false,
      startOnTick: true,
      title: {
        enabled: false
      },
      labels: {
        style: {
          fontFamily: "'Lato', sans-serif"
        }
      }
    },
    xAxis: {
      type: "datetime",
      tickPositioner: function() {
        var inc = parseInt((this.dataMax - this.dataMin) * .25);
        var tickOffset = inc * .45;
        return [0 + tickOffset, inc + tickOffset, inc * 2 + tickOffset, inc * 3 + tickOffset]
      },
      labels: {
        enabled: true,
        formatter: function() {
          var pct = parseInt(1 + this.value / this.axis.dataMax * 100 / 25);
          if (pct > 4) {
            var qtr = "Q" + pct
          } else {
            var qtr = "OT" + (pct - 4)
          }
          return qtr
        },
        style: {
          fontFamily: "'Lato', sans-serif"
        }
      },
      title: {
        color: "#000"
      },
      plotLines: []
    },
    credits: {
      enabled: false
    },
    loading: true
  };

  function fetchPlayByPlay(currentPeriod) {
    var additionalParameters = {};
    if (currentPeriod != undefined) {
      if (currentPeriod == 0) {
        currentPeriod = "all"
      }
      additionalParameters.period = currentPeriod
    }
    StatsFeedFetcher.fetch(FEEDS_CONFIG.playByPlay, UrlParams.create(["gameId"], additionalParameters, false, false)).then(function(data) {
      $scope.chartConfig.loading = true;
      $scope.pbp = data;
      $scope.pbp.boxscore.period = Number($scope.pbp.boxscore.period);
      $scope.quarterArray = [];
      for (var i = 0; i < $scope.currentPeriod; i++) {
        var x = i + 1;
        $scope.quarterArray.push(x)
      }
      $scope.filterChart($scope.filterQuarter);
      $scope.filterList($scope.filterQuarter);
      $scope.chartConfig.loading = false
    })
  }
  $scope.filterBy = function(period) {
    $scope.filterQuarter = period;
    $scope.selectedPeriod = period;
    if (FEEDS_CONFIG.debug) console.log("Filtering by Q: " + period);
    fetchPlayByPlay(period)
  };
  $scope.filterList = function(period) {
    if (typeof $scope.game == "undefined" || typeof $scope.game.homeTeam == "undefined" || typeof $scope.game.awayTeam == "undefined") {
      return
    }
    if (period < 1) period = 1;
    angular.forEach($scope.pbp.playByPlays, function(data) {
      if (data.period == period) {
        var eventsData = data.events;
        var events = [];
        var awayTeamId = $scope.pbp.gameProfile.awayTeamId;
        var homeTeamId = $scope.pbp.gameProfile.homeTeamId;
        angular.forEach(eventsData, function(eventData) {
          var event = {
            gameClock: eventData.gameClock,
            quarter: eventData.quarter,
            homeScore: eventData.homeScore,
            awayScore: eventData.awayScore,
            points: eventData.points,
            playerId: eventData.playerId,
            description: eventData.description
          };
          if (eventData.teamId == awayTeamId) {
            event.team = $scope.game.awayTeam.profile;
            event.team.teamId = awayTeamId
          } else if (eventData.teamId == homeTeamId) {
            event.team = $scope.game.homeTeam.profile;
            event.team.teamId = homeTeamId
          }
          if (eventData.teamId == awayTeamId && eventData.playerId > 0) {
            angular.forEach($scope.game.awayTeam.gamePlayers, function(player) {
              if (player.profile.playerId == eventData.displayPlayerId) {
                event.player = player.profile;
                return
              }
            })
          } else if (eventData.teamId == homeTeamId && eventData.playerId > 0) {
            angular.forEach($scope.game.homeTeam.gamePlayers, function(player) {
              if (player.profile.playerId == eventData.displayPlayerId) {
                event.player = player.profile;
                return
              }
            })
          }
          if (eventData.teamId == awayTeamId && eventData.points > 0) {
            event.awayScored = true
          } else if (eventData.teamId == homeTeamId && eventData.points > 0) {
            event.homeScored = true
          }
          events.push(event)
        });
        $scope.events = events;
        return
      }
    })
  };
  $scope.filterChart = function(period) {
    if (typeof $scope.game == "undefined" || typeof $scope.game.homeTeam == "undefined" || typeof $scope.game.awayTeam == "undefined") {
      return
    }
    $scope.chartConfig.loading = true;
    $scope.chartConfig.series[0].data = [];
    $scope.chartConfig.series[0].name = $scope.game.homeTeam.profile.displayAbbr;
    $scope.chartConfig.series[1].data = [];
    $scope.chartConfig.series[1].name = $scope.game.awayTeam.profile.displayAbbr;
    $scope.chartConfig.xAxis.plotLines = [];
    if (period == 0) {
      $scope.chartConfig.yAxis.min = 0;
      $scope.chartConfig.xAxis.labels.enabled = true
    } else {
      $scope.chartConfig.xAxis.labels.enabled = false
    }
    var lastHomeScore = null;
    var lastAwayScore = null;
    var lastPeriod = 1;
    var lastOffset = null;
    var offsetAdjustment = 0;
    if (period == 1) {
      $scope.chartConfig.xAxis.plotLines = [];
      $scope.chartConfig.yAxis.min = 0
    } else {
      $scope.chartConfig.xAxis.plotLines = [];
      $scope.chartConfig.yAxis.min = null
    }
    var events = [];
    angular.forEach($scope.pbp.playByPlays, function(data) {
      if (data.period == period) {
        events = data.events.slice().reverse();
        return
      } else if (period == 0) {
        events = events.concat(data.events)
      }
    });
    if (period == 0) {
      events = events.slice().reverse()
    }
    var startWallClockAsInt = $scope.pbp.playByPlays[0] ? $scope.pbp.playByPlays[0].events[0] ? $scope.pbp.playByPlays[0].events[0].wallClockAsInt : 0 : 0;
    angular.forEach(events, function(event) {
      var offsetTime = parseInt((event.wallClockAsInt - startWallClockAsInt) * 100) - offsetAdjustment;
      if (period == 0 || period == event.period) {
        if (lastPeriod != event.period) {
          if (lastPeriod == 2 && event.period == 3) {
            offsetAdjustment = offsetTime - lastOffset;
            offsetTime -= offsetAdjustment
          }
          if (period == 0) {
            $scope.chartConfig.yAxis.min = 0;
            $scope.chartConfig.xAxis.plotLines.push({
              color: "#000",
              width: 1,
              dashStyle: "dot",
              value: offsetTime
            })
          }
        }
        if (event.period > 4) {
          event.quarter = "OT" + (event.period - 4)
        } else {
          event.quarter = "Q" + event.period
        }
        if (event.homeScore !== lastHomeScore || event.description == "End Period" || event.description == "Start Period") {
          event.description = event.description == null ? "" : event.description;
          $scope.chartConfig.series[0].data.push({
            score: "<strong>" + event.homeScore + "</strong>-" + event.awayScore,
            gameClock: event.gameClock,
            period: event.period,
            quarter: event.quarter,
            name: event.description.replace(/^\[(.*)\]/, ""),
            x: offsetTime,
            y: parseInt(event.homeScore)
          })
        }
        if (event.awayScore !== lastAwayScore || event.description == "End Period" || event.description == "Start Period") {
          event.description = event.description == null ? "" : event.description;
          $scope.chartConfig.series[1].data.push({
            score: event.homeScore + "-<strong>" + event.awayScore + "</strong>",
            gameClock: event.gameClock,
            period: event.period,
            quarter: event.quarter,
            name: event.description.replace(/^\[(.*)\]/, ""),
            x: offsetTime,
            y: parseInt(event.awayScore)
          })
        }
        lastPeriod = event.period;
        lastOffset = offsetTime;
        lastHomeScore = event.homeScore;
        lastAwayScore = event.awayScore
      }
    });
    $scope.chartConfig.loading = false;
    $(window).trigger("resize")
  };

  function loadLibraries() {
    $.ajax({
      async: false,
      url: "/scripts/extra/highcharts/highcharts.js",
      dataType: "script",
      cache: true
    })
  }
  $scope.$on("event:$scope.game", function(event, args) {
    $scope.currentPeriod = $scope.game.boxscore.period;
    if ($scope.selectedPeriod >= 0 && $scope.selectedPeriod < $scope.game.boxscore.period) {
      fetchPlayByPlay($scope.selectedPeriod)
    } else {
      $scope.filterQuarter = $scope.game.boxscore.period;
      $scope.selectedPeriod = -1;
      fetchPlayByPlay($scope.game.boxscore.period)
    }
  })
}]);
"use strict";
sib.controller("BoxScorePlayerStatsController", ["$scope", "Page", function BoxScorePlayerStatsController($scope, Page) {
  Page.setTitle("_page.boxscore");
  $scope.$emit("activeBoxscoreTabEmit", {
    tab: "playerstats"
  });
  $scope.showPlusMinus = true;
  $scope.hideMins = true;
  $scope.$on("event:$scope.game", function(event, args) {
    $scope.awayCurrentLineup = $.grep($scope.game.awayTeam.gamePlayers, function(n, i) {
      return n.boxscore.onCourt === "true"
    }).slice(0, 5);
    $scope.homeCurrentLineup = $.grep($scope.game.homeTeam.gamePlayers, function(n, i) {
      return n.boxscore.onCourt === "true"
    }).slice(0, 5);
    for (var i = 0; i < $scope.game.homeTeam.gamePlayers.length; i++) {
      var feedSecs = Number($scope.game.homeTeam.gamePlayers[i].statTotal.secs);
      var feedMins = Number($scope.game.homeTeam.gamePlayers[i].statTotal.mins);
      if (feedSecs < 10) {
        var secs = "0" + String(feedSecs);
        $scope.game.homeTeam.gamePlayers[i].statTotal.secs = secs
      }
      if (feedMins < 10) {
        var mins = "0" + String(feedMins);
        $scope.game.homeTeam.gamePlayers[i].statTotal.mins = mins
      }
    }
    for (var i = 0; i < $scope.game.awayTeam.gamePlayers.length; i++) {
      var feedSecs = Number($scope.game.awayTeam.gamePlayers[i].statTotal.secs);
      var feedMins = Number($scope.game.awayTeam.gamePlayers[i].statTotal.mins);
      if (feedSecs < 10) {
        var secs = "0" + String(feedSecs);
        $scope.game.awayTeam.gamePlayers[i].statTotal.secs = secs
      }
      if (feedMins < 10) {
        var mins = "0" + String(feedMins);
        $scope.game.awayTeam.gamePlayers[i].statTotal.mins = mins
      }
    }
    $scope.teams = [$scope.game.awayTeam, $scope.game.homeTeam]
  })
}]);
"use strict";
sib.controller("BoxscoreRecapCtrl", ["$scope", "$location", "$timeout", "Page", "UrlParams", "FEEDS_CONFIG", "SimpleFeedFetcher", function BoxscoreRecapCtrl($scope, $location, $timeout, Page, UrlParams, FEEDS_CONFIG, SimpleFeedFetcher) {
  Page.setTitle("_page.recap");
  $scope.$emit("activeBoxscoreTabEmit", {
    tab: "recap"
  });
  $scope.recapExist = false;
  var fetchRecapRotoWireInterval = 12e4;
  var updateRecapRotoWireInterval = 3e5;
  var gameId = $location.path().substring(1);

  function fetchRecapFeed() {
    var args = {
      url: "http://stats-prod.nba.com/feed/",
      params: {
        feedType: "rotowire_game_recap",
        gameId: gameId
      }
    };
    SimpleFeedFetcher.proxy(args).then(function(data) {
      $scope.recapExist = true;
      $scope.recapContent = data.RecapRotowires[0];
      $timeout(function() {
        fetchRecapFeed(gameId)
      }, updateRecapRotoWireInterval)
    }, function(reason) {
      if (FEEDS_CONFIG.debug) {
        console.log(reason.statusText)
      }
      $timeout(function() {
        fetchRecapFeed(gameId)
      }, fetchRecapRotoWireInterval)
    })
  }
  fetchRecapFeed()
}]);
"use strict";
sib.controller("BoxScoreTeamComparisonCtrl", ["$scope", "Page", function BoxScoreTeamComparisonCtrl($scope, Page) {
  Page.setTitle("_page.boxscore");
  $scope.$emit("activeBoxscoreTabEmit", {
    tab: "teamcomparison"
  });
  $scope.selectstats = false;
  $scope.togglestats = function() {
    if ($scope.selectstats == false) {
      $scope.selectstats = true
    } else {
      $scope.selectstats = false
    }
  };
  $scope.stats = {
    ast: true,
    reb: true,
    tpp: true,
    ftp: true,
    fgp: true,
    blk: false,
    to: false,
    fbp: false,
    pitp: false,
    pot: false,
    bl: false
  };
  $scope.$on("event:$scope.game", function(event, args) {})
}]);
"use strict";
sib.controller("GamePreviewCtrl", ["$scope", "$location", "Page", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", "SimpleFeedFetcher", "$timeout", "Site", function GamePreviewCtrl($scope, $location, Page, StatsFeedFetcher, UrlParams, FEEDS_CONFIG, SimpleFeedFetcher, $timeout, Site) {
  Page.setTitle("_page.gamePreview");
  $scope.selectstats = false;
  $scope.togglestats = function() {
    if ($scope.selectstats == false) {
      $scope.selectstats = true
    } else {
      $scope.selectstats = false
    }
  };
  $scope.stats = {
    fgp: true,
    tpp: true,
    ftp: true,
    reb: true,
    ast: false,
    blk: false,
    to: false,
    fbp: false,
    pitp: false,
    pot: false
  };
  var gameId = $location.path().substring(1);
  var fetchPreviewRotoWireInterval = 3e5;
  var updatePreviewRotoWireInterval = 6e5;
  $scope.showPreview = false;

  function fetchPreviewFeed() {
    var listUrl = "/feeds/RotoWirePreview-589031/" + gameId + "_Preview.json";
    SimpleFeedFetcher.get(listUrl).then(function(data) {
      $scope.showPreview = true;
      $scope.previewContent = data.PreviewRotowires[0];
      $timeout(function() {
        fetchPreviewFeed()
      }, updatePreviewRotoWireInterval)
    }, function(reason) {
      console.log(reason.statusText);
      $timeout(function() {
        fetchPreviewFeed()
      }, fetchPreviewRotoWireInterval)
    })
  }
  $scope.$watch(function() {
    return $location.path()
  }, function(path) {
    StatsFeedFetcher.fetch(FEEDS_CONFIG.gamePreview, UrlParams.create(["gameId"], {}, true, false)).then(function(data) {
      $scope.game = data;
      $scope.game.homeTeam.score = $scope.game.homeTeam.statTotal;
      $scope.game.awayTeam.score = $scope.game.awayTeam.statTotal;
      $scope.game.homeTeam.profile.conferenceAnchor = $scope.game.homeTeam.profile.conference.toLowerCase();
      $scope.game.awayTeam.profile.conferenceAnchor = $scope.game.awayTeam.profile.conference.toLowerCase();
      $scope.schedule = $scope.game.series;
      $scope.homeConfRank = {
        conf: $scope.game.homeTeam.profile.displayConference,
        rank: $scope.game.homeTeam.standing.confRank
      };
      $scope.awayConfRank = {
        conf: $scope.game.awayTeam.profile.displayConference,
        rank: $scope.game.awayTeam.standing.confRank
      }
    });
    if (Site.hasOwnProperty("gameRotoPreview") && Site.gameRotoPreview == true) {
      fetchPreviewFeed()
    }
  })
}]);
sib.controller("GameScoreboardController", ["$scope", "$location", "$timeout", "Page", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", "SimpleFeedFetcher", function GameScoreboardController($scope, $location, $timeout, Page, StatsFeedFetcher, UrlParams, FEEDS_CONFIG, SimpleFeedFetcher) {
  "use strict";
  var isLive = false;
  var cache = {
    game: {
      awayTeam: {},
      homeTeam: {}
    }
  };
  $scope.$on("activeBoxscoreTabEmit", function(event, args) {
    $scope.$broadcast("activeBoxscoreTabBroadcast", args)
  });

  function synchCache() {
    $scope.game.broadcasters ? cache.game.broadcasters = $scope.game.broadcasters : $scope.game.broadcasters = cache.game.broadcasters;
    $scope.game.awayTeam.standing ? cache.game.awayTeam.standing = $scope.game.awayTeam.standing : $scope.game.awayTeam.standing = cache.game.awayTeam.standing;
    $scope.game.awayTeam.matchup ? cache.game.awayTeam.matchup = $scope.game.awayTeam.matchup : $scope.game.awayTeam.matchup = cache.game.awayTeam.matchup;
    $scope.game.homeTeam.standing ? cache.game.homeTeam.standing = $scope.game.homeTeam.standing : $scope.game.homeTeam.standing = cache.game.homeTeam.standing;
    $scope.game.homeTeam.matchup ? cache.game.homeTeam.matchup = $scope.game.homeTeam.matchup : $scope.game.homeTeam.matchup = cache.game.homeTeam.matchup;
    $scope.game.urls ? cache.game.urls = $scope.game.urls : $scope.game.urls = cache.game.urls
  }

  function run() {
    var feedUrl = isLive ? FEEDS_CONFIG.gameSnapshotLive : FEEDS_CONFIG.gameSnapshot;
    StatsFeedFetcher.fetch(feedUrl, UrlParams.create(["gameId"], {}, true, false)).then(function(data) {
      var updatedLiveGameData = data;
      var gameState;
      if ($scope.game != updatedLiveGameData) {
        $scope.game = updatedLiveGameData;
        synchCache();
        $scope.game.boxscore.awayScore = Number($scope.game.boxscore.awayScore);
        $scope.game.boxscore.homeScore = Number($scope.game.boxscore.homeScore);
        $scope.showGameStream = false;
        $scope.$broadcast("event:$scope.game")
      }
      if ($scope.game.boxscore.status == "2") {
        if (FEEDS_CONFIG.debug) console.log("Boxscore contains a live game, fetching updates in: " + FEEDS_CONFIG.liveFeedUpdateInterval);
        if (!isLive) {
          isLive = true;
          run()
        } else {
          $scope.liveGameDelay = $timeout(function() {
            run()
          }, FEEDS_CONFIG.liveFeedUpdateInterval)
        }
      }
    });
    Page.setPermitLoading(false)
  }
  run()
}]);
"use strict";
sib.controller("GamesHeaderController", ["$scope", "$location", "$timeout", "FEEDS_CONFIG", function GamesHeaderController($scope, $location, $timeout, FEEDS_CONFIG) {
  var mobileBp = 768;
  $scope.totalTimeout = 6;
  $scope.mobile = false;
  $scope.collapse = false;
  var collapsePressed = false;
  $scope.getWidth = function() {
    return $(window).innerWidth()
  };
  $scope.$watch($scope.getWidth, function(newValue, oldValue) {
    var window_width = newValue;
    $scope.mobile = window_width < mobileBp;
    if (!collapsePressed) {
      if ($scope.mobile) {
        $scope.collapse = true
      } else {
        $scope.collapse = false
      }
    }
  });
  window.addEventListener("resize", function() {
    $timeout(function() {
      $scope.$apply()
    })
  });
  $scope.onCollapse = function() {
    collapsePressed = true;
    $scope.collapse = !$scope.collapse
  };
  $scope.$on("event:$scope.game", function() {
    $(".sib3-games-header").addClass($scope.game.homeTeam.profile.abbr.toLowerCase())
  });
  $scope.getTimeoutCount = function(num) {
    var array = [];
    for (var i = 0; i < num; i++) {
      array.push(i)
    }
    return array
  }
}]);
"use strict";
sib.controller("GameSnapshotCtrl", ["$scope", "$location", "FEEDS_CONFIG", function GameSnapshotCtrl($scope, $location, FEEDS_CONFIG) {
  $scope.currentpage = 1;
  $scope.paginate = true;
  var maxPages = 3;
  var elements = $(".snapshot-responsive-table-wrapper");
  if (!$("html").hasClass("ie8") && $(".snapshot-responsive-table-wrapper").length > 0) {
    for (var i = 0; i < elements.length; i++) {
      Hammer(elements[i]).on("swipeleft", function(event) {
        if ($scope.currentpage < maxPages) {
          $scope.currentpage++;
          if (!$scope.$$phase) {
            $scope.$apply()
          }
        }
      });
      Hammer(elements[i]).on("swiperight", function(event) {
        if ($scope.currentpage > 1) {
          $scope.currentpage--;
          if (!$scope.$$phase) {
            $scope.$apply()
          }
        }
      });
      if (window.isAndroid) {
        Hammer(elements[i]).on("dragleft", function(event) {
          event.preventDefault();
          Hammer(elements[i]).trigger("swipeleft", event)
        });
        Hammer(elements[i]).on("dragright", function(event) {
          event.preventDefault();
          Hammer(elements[i]).trigger("swiperight", event)
        })
      }
    }
  }
}]);
"use strict";
sib.controller("GameStatsPlayerCtrl", ["$scope", "$location", "FEEDS_CONFIG", function GameStatsPlayerCtrl($scope, $location, FEEDS_CONFIG) {
  $scope.predicate = "";
  $scope.reverse = false;
  $scope.sortTable = function(string) {
    $scope.predicate = string;
    $scope.reverse = true
  };
  $scope.currentpage = 1;
  $scope.paginate = false;
  if (!$("html").hasClass("ie8")) {
    $scope.getWidth = function() {
      return $(window).width()
    };
    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
      $scope.window_width = newValue;
      if ($scope.window_width < 700) {
        $scope.paginate = true
      } else {
        $scope.paginate = false
      }
    });
    window.addEventListener("resize", function() {
      if (!$scope.$$phase) {
        $scope.$apply()
      }
    })
  }
  $scope.tabletabbed = "home";
  var maxPages = 4;
  var element = document.getElementById("game_stats_player");
  if (!$("html").hasClass("ie8") && element) {
    if (window.isAndroid) {
      Hammer(element).on("dragleft", function(event) {
        event.preventDefault();
        Hammer(element).trigger("swipeleft", event)
      });
      Hammer(element).on("dragright", function(event) {
        event.preventDefault();
        Hammer(element).trigger("swiperight", event)
      })
    }
    Hammer(element).on("swipeleft", function(event) {
      if ($scope.currentpage < maxPages) {
        $scope.currentpage++;
        if (!$scope.$$phase) {
          $scope.$apply()
        }
      }
    });
    Hammer(element).on("swiperight", function(event) {
      if ($scope.currentpage > 1) {
        $scope.currentpage--;
        if (!$scope.$$phase) {
          $scope.$apply()
        }
      }
    })
  }
}]);
"use strict";
sib.controller("GameStreamController", ["$rootScope", "$scope", "$location", "$timeout", "Page", "StatsFeedFetcher", "SimpleFeedFetcher", "UrlParams", "FEEDS_CONFIG", "ngDialog", "$window", function GameStreamController($rootScope, $scope, $location, $timeout, Page, StatsFeedFetcher, SimpleFeedFetcher, UrlParams, FEEDS_CONFIG, ngDialog, $window) {
  Page.setTitle("_page.boxscore");
  $scope.$emit("activeBoxscoreTabEmit", {
    tab: "gamestream"
  });
  var game;
  var timer;
  var parameters = {};
  var visibilityTimer;
  var autoWindowStartMillis = 36e5;
  var autoWindowEndMillis = 24e6;
  var autoGameEndMills = 18e6;
  var isDayParam = false;
  var urlParameters = ["showHeader", "showNav", "showFooter"];
  $scope.firstLoad = true;
  $scope.isGameComplete = false;
  $scope.isLoadingPosts = true;
  $scope.allowLiveContentUpdate = true;
  $scope.pageNo = 0;
  $scope.gameEventMap = {};
  $scope.gameTrackerFeeds = [];
  $scope.newItems = [];

  function loadMapping() {
    $.ajax({
      type: "GET",
      url: "/feeds/coveritlivemapping/gametoeventcode.json?callback=?",
      async: false,
      jsonpCallback: "jsonGameToEventMappingCallback",
      contentType: "application/json",
      dataType: "jsonp",
      cache: true,
      success: function(json) {
        $scope.gameEventMap = json
      },
      error: function(e) {}
    })
  }
  loadMapping();
  $scope.feedDirection = 1;
  $scope.feedCount = 25;
  $scope.feedTopID = "0";
  $scope.feedLowerID = "0";
  var tagColorParam = "";
  var tagCategoryParam = "";
  $scope.showPreviousPageButton = true;
  $scope.activeTab = 4;
  $scope.autoUpdate = true;
  $(window).bind("scroll resize", function() {
    var $title = $("#sib_game_stream .title");
    var titleVisible = isScrolledIntoView($title);
    var $bar = $("#sib_game_stream #gamestream-filter-wrap");
    var barWidth = $bar.width();
    var $posts = $("#sib_game_stream .gamestream-posts");
    var postVisible = isScrolledIntoView($posts);
    var postWidth = $posts.width();
    if (!titleVisible) {
      if ($rootScope.showNav == true && $(".sib3-navbar").length) {
        $bar.addClass("sticky")
      } else {
        $bar.addClass("sticky-no-nav")
      }
      $bar.width(postWidth)
    } else {
      $bar.removeClass("sticky");
      $bar.removeClass("sticky-no-nav");
      $bar.css("width", "")
    }
    setAutoUpdate()
  });

  function showAllPosts() {
    if (FEEDS_CONFIG.debug) console.log("showAllPosts()");
    $timeout.cancel(visibilityTimer);
    visibilityTimer = $timeout(function() {
      angular.forEach($scope.newItems, function(item) {
        $scope.gameTrackerFeeds.unshift(item)
      });
      $scope.newItems = []
    })
  }

  function setAutoUpdate() {
    if (FEEDS_CONFIG.debug) console.log("setAutoUpdate()");
    $scope.autoUpdate = true;
    if ($scope.pageNo == 0) {
      var isVisible = false;
      var $posts = $(".gamestream-post-item:visible");
      if ($posts.length > 0) {
        isVisible = isScrolledIntoView($posts[0]);
        $scope.allowLiveContentUpdate = isVisible;
        if ($scope.allowLiveContentUpdate) {
          showAllPosts()
        }
        if (FEEDS_CONFIG.debug) {
          console.log(isVisible ? "Top most is visible" : "Top most is not visible")
        }
      } else {
        if (FEEDS_CONFIG.debug) console.log("No top post found, most likely waiting for angular to refresh the view. Forcing autoUpdate to true")
      }
      if ($scope.autoUpdate) {
        if (isDayParam) {
          setAutoUpdateBaseOnDay()
        } else {
          setAutoUpdateBasedOnGame()
        }
      }
    } else {
      if (FEEDS_CONFIG.debug) console.log("Top most post not visibile, not on first page")
    }
    if (FEEDS_CONFIG.debug) console.log("autoUpdate: " + $scope.autoUpdate)
  }
  $scope.hideNextFeedButton = function() {
    return $scope.pageNo == 0
  };
  $scope.onLatestClicked = function() {
    if (FEEDS_CONFIG.debug) console.log("latest clicked");
    reload()
  };
  $scope.onFullFeedClicked = function() {
    if (FEEDS_CONFIG.debug) console.log("post clicked");
    var paramString = "";
    angular.forEach($location.search(), function(value, key) {
      if (urlParameters.indexOf(key) > -1) {
        paramString = paramString + "&" + key + "=" + value
      }
    });
    $window.location = $window.location.href.split("?")[0] + "?ds=single&gameDate=" + $location.search().gameDate + paramString;
    $window.location.reload()
  };
  $scope.onNewItemsClicked = function() {
    if (FEEDS_CONFIG.debug) console.log("new items clicked");
    scrollToTop()
  };

  function clearPosts() {
    $scope.feedTopID = 0;
    $scope.feedLowerID = 0;
    $scope.feedDirection = 1;
    $scope.gameTrackerFeeds = [];
    if (FEEDS_CONFIG.debug) console.log("enabling auto update");
    $scope.autoUpdate = true;
    $scope.pageNo = 0;
    if (FEEDS_CONFIG.debug) console.log("clearing pending timer");
    $timeout.cancel(timer)
  }

  function reload() {
    $scope.isLoadingPosts = true;
    clearPosts();
    fetchLiveFeed();
    scrollToTop()
  }

  function scrollToTop() {
    var $target = $("html,body");
    $target.animate({
      scrollTop: $("#app-container").offset().top
    }, 0)
  }

  function scrollToBottom() {
    $timeout(function() {
      var $target = $("html,body");
      $target.animate({
        scrollTop: $target.height()
      }, 1e3)
    }, 1500)
  }

  function isScrolledIntoView(elem) {
    var $elem = $(elem);
    var $window = $(window);
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();
    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();
    var partialTop = elemTop < docViewBottom && elemBottom > docViewBottom;
    var partialBottom = elemTop < docViewTop && elemBottom > docViewTop;
    var fullElement = elemTop >= docViewTop && elemBottom <= docViewBottom;
    return partialTop || partialBottom || fullElement
  }
  var feedURLPrefix = "/statsm2/jsp/proxy.jsp?url=";
  var extraParam = "&contenttype=text/javascript";
  var feedUrlHost = "https://api.coveritlive.com/remote/2/event/data?event_code=";
  var tokenId = "&token=1b3b74241b875460a932cdb4f1b45b94";

  function getFeedItemURL(item_id) {
    var feedFullURL = "";
    var feedURL = feedUrlHost + $scope.eventId + tokenId;
    feedURL += "&single_item=y";
    feedURL += "&item_id=" + item_id;
    feedURL = encodeURIComponent(feedURL).replace(/'/g, "%27").replace(/"/g, "%22");
    feedFullURL = feedURLPrefix + feedURL + extraParam;
    if (FEEDS_CONFIG.debug) console.log(feedFullURL);
    return feedFullURL
  }

  function getFeedURL(direction, topID, lowerID) {
    var feedFullURL = "";
    var feedURL = feedUrlHost + $scope.eventId + tokenId;
    feedURL = $scope.isGameComplete ? feedURL + "&tag_category=postgame" : feedURL;
    feedURL = $scope.hasSelectedGame && !$scope.isGameComplete ? feedURL + "&tag_category=" + $scope.participantAwayteam + "||" + $scope.participantHometeam : feedURL;
    feedURL = $scope.hasSelectedGame && $scope.isGameComplete ? feedURL + "," + $scope.participantAwayteam + "||postgame," + $scope.participantHometeam : feedURL;
    var addtlParam = extraParam;
    if (!$scope.isGameComplete) {
      var item_count = $scope.feedCount * direction;
      feedURL += "&item_count=" + item_count
    }
    if (topID != 0 && lowerID != 0) {
      var item_id = 0;
      if (direction == -1) {
        item_id = lowerID
      } else {
        item_id = topID
      }
      feedURL += "&item_id=" + item_id
    }
    feedURL = encodeURIComponent(feedURL).replace(/'/g, "%27").replace(/"/g, "%22");
    feedFullURL = feedURLPrefix + feedURL + addtlParam;
    return feedFullURL
  }

  function setPageNo() {
    if ($scope.feedDirection == -1) {
      $scope.pageNo += 1;
      if (FEEDS_CONFIG.debug) console.log("paging back to page number :" + $scope.pageNo)
    } else if ($scope.feedDirection == 1) {
      $scope.pageNo = $scope.pageNo > 0 ? $scope.pageNo - 1 : $scope.pageNo;
      if (FEEDS_CONFIG.debug) console.log("paging forward to page number :" + $scope.pageNo)
    }
  }

  function updateContent(items, replaceContent) {
    var priorAutoUpdate = $scope.autoUpdate;
    if (FEEDS_CONFIG.debug) console.log("updateContent() autoUpdate: " + $scope.autoUpdate + " items.length: " + items.length + " replaceContent: " + replaceContent + " direction: " + $scope.feedDirection);
    if (items.length > 0) {
      if (FEEDS_CONFIG.debug) console.log("data items found");
      $scope.hidePreviousPageButton = items.length < $scope.feedCount;
      if (FEEDS_CONFIG.debug) console.log("items: " + items.length + " $scope.feedCount: " + $scope.feedCount + " hide bottom arrow: " + $scope.hidePreviousPageButton);
      var dataTopId = items[0].itemID;
      var dataLowerId = items[items.length - 1].itemID;
      if ($scope.feedTopID != dataTopId && $scope.feedLowerID != dataLowerId) {
        setPageNo();
        if (replaceContent) {
          if (FEEDS_CONFIG.debug) console.log("replacing page content");
          $scope.feedTopID = dataTopId;
          $scope.feedLowerID = dataLowerId;
          $scope.gameTrackerFeeds = items;
          if ($scope.feedDirection == -1) {
            if (FEEDS_CONFIG.debug) console.log("a. scrolling to top");
            var $target = $("html,body");
            $target.animate({
              scrollTop: 0
            }, 0)
          } else if ($scope.feedDirection == 1) {
            if (FEEDS_CONFIG.debug) console.log("a. scrolling to bottom");
            $timeout(function() {
              var $target = $("html,body");
              $target.animate({
                scrollTop: $target.height()
              }, 0)
            }, 600)
          }
        } else {
          if (Number(dataLowerId) > Number($scope.feedTopID)) {
            if (FEEDS_CONFIG.debug) console.log("dataLowerId [" + dataLowerId + "] > $scope.feedTopID [" + $scope.feedTopID + "]");
            if (typeof $scope.gameTrackerFeeds === "undefined" || $scope.gameTrackerFeeds.length == 0) {
              if (FEEDS_CONFIG.debug) console.log("no current items. initializing view");
              $scope.gameTrackerFeeds = items;
              $scope.feedTopID = dataTopId;
              $scope.feedLowerID = dataLowerId
            } else {
              if (FEEDS_CONFIG.debug) console.log("found current items. appending to current view");
              if ($scope.allowLiveContentUpdate) {
                for (var i = items.length - 1; i >= 0; i--) {
                  $scope.gameTrackerFeeds.unshift(items[i])
                }
              } else {
                for (var i = 0; i < items.length; i++) {
                  $scope.newItems.push(items[i])
                }
              }
              $scope.feedTopID = dataTopId;
              $scope.feedLowerID = $scope.gameTrackerFeeds[$scope.gameTrackerFeeds.length - 1].itemID
            }
          } else {
            console.log("Unsupported condition met")
          }
        }
      } else {
        if (FEEDS_CONFIG.debug) console.log("current displaying same items as feed items, doing nothing...")
      }
    } else {
      if (FEEDS_CONFIG.debug) console.log("no new items found when trying to paging forward")
    }
    if ($scope.isLoadingPosts) {
      $timeout(function() {
        $scope.isLoadingPosts = false
      }, 300)
    }
    if ($scope.pageNo == 0) {
      if (FEEDS_CONFIG.debug) console.log("On page 0");
      setAutoUpdate();
      if (priorAutoUpdate === false && $scope.autoUpdate) {
        if (FEEDS_CONFIG.debug) console.log("Auto update was false, now its true... re-enable polling");
        fetchLiveFeed()
      }
    }
    if (FEEDS_CONFIG.debug) console.log("Top: " + $scope.feedTopID);
    if (FEEDS_CONFIG.debug) console.log("Lower: " + $scope.feedLowerID)
  }

  function setAutoUpdateBasedOnGame() {
    if (FEEDS_CONFIG.debug) console.log("setting auto update based on game");
    if (game) {
      if (FEEDS_CONFIG.debug) console.log("Checking if game is in progress");
      var gameUtcMillis = Number(game.gameProfile.utcMillis);
      var startTime = gameUtcMillis - autoWindowStartMillis;
      var endTime = gameUtcMillis + autoWindowEndMillis;
      var now = (new Date).getTime();
      $scope.autoUpdate = now > startTime && now < endTime;
      $scope.isGameComplete = now > endTime
    } else {
      $scope.autoUpdate = true;
      $scope.isGameComplete = false
    }
    if (FEEDS_CONFIG.debug) console.log("Current auto update " + $scope.autoUpdate + ". This was based on whether game is in progress/recently ended or there is no game associated with this event")
  }

  function setAutoUpdateBaseOnDay() {
    if (FEEDS_CONFIG.debug) console.log("setting auto update based on day");
    if (game) {
      if (FEEDS_CONFIG.debug) console.log("Checking if day is in progress");
      var gameUtcMillis = Number(game.profile.utcMillis);
      var endTime = gameUtcMillis + autoWindowEndMillis;
      var now = (new Date).getTime();
      var scheduleEndTime = gameUtcMillis + autoGameEndMills;
      $scope.autoUpdate = now < scheduleEndTime;
      $scope.isGameComplete = now >= scheduleEndTime
    } else {
      $scope.autoUpdate = true;
      $scope.isGameComplete = false
    }
    if (FEEDS_CONFIG.debug) console.log("Current auto update " + $scope.autoUpdate + ". This was based on whether game is in progress/recently ended or there is no game associated with this event")
  }

  function scheduleGameStreamPoll() {
    if (FEEDS_CONFIG.debug) console.log("clearing pending timer");
    $timeout.cancel(timer);
    if (FEEDS_CONFIG.debug) console.log("scheduleGameStreamPoll() for " + FEEDS_CONFIG.liveGameTrackerFeedUpdateInterval + " ms");
    timer = $timeout(function() {
      fetchLiveFeed()
    }, FEEDS_CONFIG.liveGameTrackerFeedUpdateInterval)
  }

  function scroll() {
    if ($scope.feedDirection == -1) {
      if (FEEDS_CONFIG.debug) console.log("b. scrolling to top");
      scrollToTop()
    } else {
      scrollToBottom();
      if (FEEDS_CONFIG.debug) console.log("b. scrolling to bottom")
    }
  }
  $scope.onChangePageClicked = function(fDirection) {
    if (!$scope.isGameComplete) {
      fetchNonLiveFeed(fDirection)
    } else {
      if (FEEDS_CONFIG.debug) console.log("disable auto update");
      $scope.autoUpdate = false;
      $scope.feedDirection = fDirection;
      setPageNo();
      var totalItems = $scope.gameTrackerFeeds.length;
      var currentPagedItems = $scope.feedCount * ($scope.pageNo + 1);
      var nonPagedItems = totalItems - currentPagedItems;
      $scope.hidePreviousPageButton = nonPagedItems <= 0;
      if (FEEDS_CONFIG.debug) console.log("totalItems: " + totalItems + " currentPagedItems: " + currentPagedItems + " nonPagedItems: " + nonPagedItems + " hidePreviousPageButton: " + $scope.hidePreviousPageButton);
      scroll()
    }
  };

  function fetchLiveFeed() {
    if (FEEDS_CONFIG.debug) console.log("fetchLiveFeed()");
    if ($scope.autoUpdate === false && !$scope.firstLoad) {
      if (FEEDS_CONFIG.debug) console.log("auto content update disabled");
      scheduleGameStreamPoll()
    } else {
      var url = getFeedURL($scope.feedDirection, $scope.feedTopID, $scope.feedLowerID);
      SimpleFeedFetcher.get(url + "&cachebust=" + getCacheBusterValue()).then(function(data) {
        var feeds = data;
        try {
          if (feeds.data.item_count > 0) {
            updateContent(feeds.data.event_items, false)
          }
        } catch (e) {
          console.log("Error in feed " + e)
        }
        scheduleGameStreamPoll()
      }, function(reason) {
        console.log("failed : " + reason);
        if (FEEDS_CONFIG.debug) console.log("update content failed");
        scheduleGameStreamPoll()
      })
    }
    $scope.firstLoad = false
  }

  function getCacheBusterValue() {
    var sTime = (new Date).getTime() + "";
    var cacheTime = sTime.substring(0, sTime.length - 4);
    return cacheTime
  }

  function fetchNonLiveFeed(direction) {
    if (FEEDS_CONFIG.debug) console.log("fetchNonLiveFeed()");
    if (FEEDS_CONFIG.debug) console.log("clearing pending timer");
    $timeout.cancel(timer);
    var url = getFeedURL(direction, $scope.feedTopID, $scope.feedLowerID);
    SimpleFeedFetcher.get(url + "&cachebust=" + getCacheBusterValue()).then(function(data) {
      var feeds = data;
      try {
        if (feeds.data.item_count > 0) {
          $scope.feedDirection = direction;
          $scope.autoUpdate = false;
          scroll();
          updateContent(feeds.data.event_items, true)
        } else {
          $scope.hidePreviousPageButton = true
        }
      } catch (e) {
        console.log("Error in feed " + e)
      }
    })
  }

  function initializeAutoUpdate() {
    if (parameters.eventCode) {
      game = null;
      setAutoUpdate();
      fetchLiveFeed()
    } else if (angular.isDefined($scope.game)) {
      game = $scope.game;
      setAutoUpdate();
      fetchLiveFeed()
    } else if (parameters.dateId) {
      isDayParam = true;
      var param = {};
      var feedDate = parameters.dateId.substring(0, 4) + "-" + parameters.dateId.substring(4, 6) + "-" + parameters.dateId.substring(6, 8);
      param = {
        gameDate: feedDate
      };
      StatsFeedFetcher.fetch(FEEDS_CONFIG.scores, UrlParams.create([], param, true, true)).then(function(data) {
        game = data.date.games[data.date.games.length - 1];
        loadMatchTeam();
        setAutoUpdate();
        fetchLiveFeed()
      })
    } else {
      StatsFeedFetcher.fetch(FEEDS_CONFIG.gameProfile, UrlParams.create(["gameId"], {}, false, false)).then(function(data) {
        game = data;
        setAutoUpdate();
        fetchLiveFeed()
      })
    }
  }

  function load(parameters) {
    if (parameters.gameId) {
      $.each($scope.gameEventMap, function(key, value) {
        if (key == parameters.gameId) {
          $scope.eventId = value[0]
        }
      })
    } else if (parameters.dateId) {
      $.each($scope.gameEventMap, function(key, value) {
        if (key == parameters.dateId) {
          $scope.eventId = value[0]
        }
      })
    } else {
      $scope.eventId = parameters.eventCode
    }
    initializeAutoUpdate();
    if (parameters.itemId) {
      var itemUrl = getFeedItemURL(parameters.itemId);
      SimpleFeedFetcher.get(itemUrl).then(function(xhr) {
        try {
          if (xhr.data != null && typeof xhr.data != undefined) {
            openDialog(xhr.data.event_items[0])
          }
        } catch (e) {
          console.log("Error in feed " + e)
        }
      }, function() {
        ngDialog.open({
          template: "<p>Sorry, the item does not exist</p>",
          plain: true
        })
      })
    }
  }
  parameters = UrlParams.create(["id", "itemId"], {}, false, false);
  if (!/^\d+$/.test(parameters.id)) {
    parameters.eventCode = parameters.id
  } else if (parameters.id.length == 10) {
    parameters.gameId = parameters.id
  } else {
    parameters.dateId = parameters.id
  }
  if (parameters.eventCode || parameters.gameId || parameters.dateId) {
    load(parameters)
  }
  $scope.init = function(options) {
    var options = angular.fromJson(options);
    parameters.eventCode = options.eventCode;
    var path = $location.path();
    if (path.length < 2) {
      $location.path(parameters.eventCode)
    }
    load(parameters)
  };
  $scope.hasSelectedGame = angular.isDefined($location.search().teams);

  function loadMatchTeam() {
    if ($scope.hasSelectedGame) {
      $scope.participantAwayteam = $location.search().teams.split("|")[0];
      $scope.participantHometeam = $location.search().teams.split("|")[1];
      $scope.teamMessage = $scope.participantAwayteam + " vs. " + $scope.participantHometeam
    }
  }
}]);
sib.controller("GamestreamFilterController", ["$scope", "$timeout", "$location", function GamestreamFilterCtrl($scope, $timeout, $location) {
  var timer = null;
  $scope.boardShow = false;
  $scope.showScoreboard = function() {
    $(".widget-scoreboard").slideToggle("slow");
    var $target = $("html,body");
    $scope.boardShow = !$scope.boardShow;
    if ($scope.boardShow) {
      $target.animate({
        scrollTop: $("#app-container").offset().top
      }, 0)
    }
    $scope.filterMessageLeft = "Select a game to see what's TRENDING";
    $scope.filterMessageRight = "VIEW ALL GAMES "
  };

  function flashMessage(msg) {
    $scope.showMessage = true;
    $scope.filterMessage = msg;
    if (timer != null) {
      $timeout.cancel(timer)
    }
    timer = $timeout(function() {
      $scope.showMessage = false;
      $scope.filterMessage = ""
    }, 1500)
  }
}]);
"use strict";
sib.controller("HomepageScoreboardCtrl", ["$scope", "$location", "$timeout", "StatsFeedFetcher", "UrlParams", "Page", "FEEDS_CONFIG", "Site", function HomepageScoreboardCtrl($scope, $location, $timeout, StatsFeedFetcher, UrlParams, Page, FEEDS_CONFIG, Site) {
  Page.setTitle("_page.home");
  $scope.mobilePage = 0;
  var dayStatusKeys = ["previous", "today", "next", "next2", "next3", "next4", "next5", "next6", "next7"];
  var gameStatusKeys = ["N/A", "pre", "live", "post"];
  var displayOrder = {
    live: 0,
    pre: 1,
    post: 2
  };
  $scope.gameDate = $location.search().gameDate;
  $scope.singleGameDate = $location.search().ds == "single" || angular.isDefined($location.search().gameDate) ? true : false;
  if (Site.hasOwnProperty("scoreboardHover") && Site.scoreboardHover == true) {
    $scope.scoreboardHover = true
  } else {
    $scope.scoreboardHover = false
  }
  $scope.showOrHideOverlay = function(event) {
    var navPageExist = $(".nav-page-left").parent().css("display");
    if (navPageExist == "block" || $scope.scoreboardHover) {
      if (event.type == "mouseenter") {
        $(event.currentTarget).find(".overlay").css("display", "block")
      } else if (event.type == "mouseleave") {
        $(event.currentTarget).find(".overlay").css("display", "none")
      }
    } else if (navPageExist != "block") {
      if (event.type == "click" && $(event.currentTarget).find(".overlay").css("display") != "block") {
        $(".overlay").each(function() {
          $(this).css("display", "none")
        });
        $(event.currentTarget).find(".overlay").css("display", "block")
      } else if (event.type == "click" && $(event.currentTarget).find(".overlay").css("display") != "none") {
        $(event.currentTarget).find(".overlay").css("display", "none")
      }
    }
  };

  function fetchStaticGames() {
    var additionalParams = $scope.leagueId ? {
      leagueId: $scope.leagueId
    } : {};
    if ($scope.singleGameDate) {
      additionalParams = angular.extend(additionalParams, {
        gameDate: $scope.gameDate,
        ds: "single"
      })
    }
    StatsFeedFetcher.fetchData(FEEDS_CONFIG.miniScoreBoard, [], additionalParams, true, true).then(function(data) {
      var gameData = null;
      var gamesByDay = [];
      var gameCount = 0;
      var hasSetTodayIndex = false;
      gameData = data;
      $scope.msb = gameData;
      $scope.liveGames = [];
      if ($scope.msb.previous != null && $scope.msb.previous.games.length > 0) {
        $scope.currentDate = $scope.msb.previous.games[0].profile.utcMillis;
        $scope.currentGames = $scope.msb.previous.games
      } else if ($scope.msb.today != null && $scope.msb.today.games.length > 0) {
        $scope.currentDate = $scope.msb.today.games[0].profile.utcMillis;
        $scope.currentGames = $scope.msb.today.games
      } else {
        $scope.currentDate = $scope.msb.next.games[0].profile.utcMillis;
        $scope.currentGames = $scope.msb.next.games
      }
      angular.forEach(dayStatusKeys, function(statusKey) {
        if (gameData[statusKey] == null || gameData[statusKey].games[0] == null) {
          return
        }
        var day = {
          utcMillis: gameData[statusKey].games[0].profile.utcMillis,
          key: statusKey,
          games: []
        };
        var gameDayIndex = gamesByDay.push(day);
        gameDayIndex--;
        if (!hasSetTodayIndex) {
          if (statusKey == "today" || statusKey == "next") {
            $scope.mobilePage = gameDayIndex;
            hasSetTodayIndex = true
          }
        }
        angular.forEach(gameData[statusKey].games, function(game) {
          switch (Number(game.boxscore.status)) {
            case 2:
              game.status = "live";
              break;
            case 3:
              game.status = "post";
              break;
            default:
              game.status = "pre"
          }
          game.displayOrder = displayOrder[game.status];
          game.sequence = Number(game.profile.sequence);
          game.time = Number(game.profile.utcMillis);
          gamesByDay[gameDayIndex].games.push(game);
          gameCount++
        })
      });
      if (FEEDS_CONFIG.debug) {
        console.log(gamesByDay)
      }
      $scope.gamesByDay = gamesByDay;
      $scope.gameCount = gameCount;
      fetchLiveGames()
    });
    Page.setPermitLoading(false);
    $scope.staticGameDelay = $timeout(function() {
      updateStaticGames()
    }, FEEDS_CONFIG.staticFeedUpdateInterval)
  }
  $scope.nextMobilePage = function() {
    $scope.mobilePage += 1
  };
  $scope.prevMobilePage = function() {
    if ($scope.mobilePage > 0) {
      $scope.mobilePage -= 1
    }
  };
  $scope.isWinner = function(score, comparisonScore) {
    return Number(score) > Number(comparisonScore)
  };

  function fetchLiveGames() {
    var updateInterval = FEEDS_CONFIG.staticFeedUpdateInterval;
    if (FEEDS_CONFIG.debug) {
      console.log("fetching live games")
    }
    var additionalParams = $scope.leagueId ? {
      leagueId: $scope.leagueId
    } : {};
    if ($scope.singleGameDate) {
      additionalParams = angular.extend(additionalParams, {
        gameDate: $scope.gameDate,
        ds: "single"
      })
    }
    StatsFeedFetcher.fetch(FEEDS_CONFIG.gameDayStatus, UrlParams.create([], additionalParams, false, true)).then(function(data) {
      var gameDayStatus = data;
      var todaysGames = gameDayStatus.gameDates[0].games;
      var liveGames = [];
      updateInterval = FEEDS_CONFIG.staticFeedUpdateInterval;
      angular.forEach(todaysGames, function(gameStatus) {
        var status = gameStatusKeys[gameStatus.status];
        var gameid = gameStatus.gameId;
        angular.forEach($scope.gamesByDay, function(day) {
          angular.forEach(day.games, function(game) {
            if (game.profile.gameId == gameid) {
              game.status = status;
              game.displayOrder = displayOrder[game.status];
              if (game.status == "live") {
                liveGames.push(game.profile.gameId)
              }
            }
          })
        })
      });
      if (liveGames.length) {
        updateLiveGames();
        updateInterval = FEEDS_CONFIG.scoreboardUpdateInterval;
        if (FEEDS_CONFIG.debug) {
          console.log("Live games detected. Update interval: " + updateInterval)
        }
      }
      Page.setPermitLoading(false);
      $scope.liveGameDelay = $timeout(function() {
        fetchLiveGames()
      }, updateInterval)
    })
  }

  function updateStaticGames() {
    Page.setPermitLoading(false);
    var additionalParams = $scope.leagueId ? {
      leagueId: $scope.leagueId
    } : {};
    if ($scope.singleGameDate) {
      additionalParams = angular.extend(additionalParams, {
        gameDate: $scope.gameDate,
        ds: "single"
      })
    }
    StatsFeedFetcher.fetch(FEEDS_CONFIG.miniScoreBoard, UrlParams.create([], additionalParams, true, true)).then(function(data) {
      var gameData = data;
      var todayIndex = 0;
      angular.forEach(dayStatusKeys, function(statusKey) {
        if (gameData[statusKey]) {
          angular.forEach(gameData[statusKey].games, function(gameUpdate) {
            for (var todayIndex in $scope.gamesByDay) {
              for (var gameIndex in $scope.gamesByDay[todayIndex].games) {
                var current = $scope.gamesByDay[todayIndex].games[gameIndex];
                if (typeof current.profile == "undefined" || current.profile.gameId != gameUpdate.profile.gameId) {
                  continue
                }
                gameUpdate.status = current.status;
                current.boxscore = gameUpdate.boxscore;
                current.displayOrder = displayOrder[gameUpdate.status];
                current.urls = gameUpdate.urls
              }
            }
          })
        }
      });
      removeHiddenElements();
      $scope.staticGameDelay = $timeout(function() {
        updateStaticGames()
      }, FEEDS_CONFIG.staticFeedUpdateInterval)
    })
  }

  function updateLiveGames() {
    Page.setPermitLoading(false);
    var additionalParams = $scope.leagueId ? {
      leagueId: $scope.leagueId
    } : {};
    if ($scope.singleGameDate) {
      additionalParams = angular.extend(additionalParams, {
        gameDate: $scope.gameDate,
        ds: "single"
      })
    }
    StatsFeedFetcher.fetch(FEEDS_CONFIG.miniScoreBoardLive, UrlParams.create([], additionalParams, true, true)).then(function(data) {
      var gameData = data;
      var todayGameUpdates = gameData.today.games;
      var todayIndex = 0;
      for (var index in $scope.gamesByDay) {
        if ($scope.gamesByDay[index].key == "today") {
          todayIndex = index
        }
      }
      angular.forEach(todayGameUpdates, function(gameUpdate) {
        for (var game in $scope.gamesByDay[todayIndex].games) {
          var current = $scope.gamesByDay[todayIndex].games[game];
          if (typeof current.profile == "undefined" || current.profile.gameId != gameUpdate.profile.gameId) {
            continue
          }
          gameUpdate.status = current.status;
          current.boxscore = gameUpdate.boxscore;
          current.displayOrder = displayOrder[gameUpdate.status];
          delete current.boxscore.$$hashKey;
          delete current.$$hashKey
        }
      });
      removeHiddenElements();
      $scope.gamesByDay[todayIndex].games = $scope.gamesByDay[todayIndex].games.slice(0)
    })
  }

  function removeHiddenElements() {
    $timeout(function() {
      var $gamestream = $(".overlay a.gamestream ");
      $gamestream.css("display") == "none" ? $gamestream.remove() : $.noop
    })
  }
  $scope.init = function(options) {
    var options = angular.fromJson(options);
    angular.extend($scope, options);
    $scope.msb = {};
    $scope.liveGames = [];
    $scope.gamesByDay = [];
    $timeout.cancel($scope.liveGameDelay);
    $timeout.cancel($scope.staticGameDelay);
    fetchStaticGames()
  }
}]);
"use strict";
sib.controller("HomePageScoreboardSwitchCtrl", ["$scope", "$location", "FEEDS_CONFIG", function HomePageScoreboardSwitchCtrl($scope, $location, FEEDS_CONFIG) {
  $scope.mobile = false;
  if (!$("html").hasClass("ie8")) {
    $scope.$watch(function() {
      return window.innerWidth
    }, function(value) {
      if (value < 768) {
        $scope.mobile = true
      } else {
        $scope.mobile = false
      }
    });
    window.addEventListener("resize", function() {
      if (!$scope.$$phase) {
        $scope.$apply()
      }
    })
  }
}]);
"use strict";
sib.controller("PlayoffScoreboardCtrl", ["$scope", "$location", "$timeout", "Page", "FEEDS_CONFIG", function PlayoffScoreboardCtrl($scope, $location, $timeout, Page, FEEDS_CONFIG) {
  Page.setTitle("_page.playoffSeries");
  var gameData = null;
  $scope.mobilePage = 0;
  $scope.$watch("seriesData", function() {
    gameData = $scope.seriesData.group.round.series;
    $scope.playoffSeriesData = gameData;
    $scope.gameCount = gameData.games.length
  });
  $scope.nextMobilePage = function() {
    $scope.mobilePage += 1
  };
  $scope.prevMobilePage = function() {
    if ($scope.mobilePage > 0) {
      $scope.mobilePage -= 1
    }
  };
  $scope.isWinner = function(score, comparisonScore) {
    var winner = false;
    if (Number(score) > Number(comparisonScore)) {
      winner = true
    }
    return winner
  }
}]);
"use strict";
sib.controller("AdvancedTeamStatsCtrl", ["$scope", "$filter", "Page", "Site", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", function AdvancedTeamStatsCtrl($scope, $filter, Page, Site, StatsFeedFetcher, UrlParams, FEEDS_CONFIG) {
  Page.setTitle("_page.advancedTeamStats");
  $scope.tabletabbed = "avg";
  $scope.teamPageTabbed = "team";
  $scope.suffix = "";
  $scope.moduleLoading = false;
  $scope.predicate = "index";
  $scope.sortingPredicate = null;
  $scope.reverse = true;
  $scope.showDescription = false;
  $scope.currentpage = 1;
  $scope.paginate = false;
  var nameMapping = {
    total: {
      suffix: "",
      fieldName: "statTotal"
    },
    perGame: {
      suffix: "Pg",
      fieldName: "statAverage"
    },
    per48: {
      suffix: "P48",
      fieldName: "advancedStatPer48"
    },
    paceAdjusted: {
      suffix: "PaceAdj",
      fieldName: "advancedStatAdjusted"
    },
    paceAdjustedPer48: {
      suffix: "PaceAdjP48",
      fieldName: "advancedStatAdjustedPer48"
    }
  };
  $scope.showDes = function() {
    $scope.showDescription = !$scope.showDescription
  };
  $scope.filtertoggle = function() {
    $scope.showfilters = !$scope.showfilters
  };
  if (Site.hasOwnProperty("expandFilterToggle") && Site.expandFilterToggle) {
    $scope.showfilters = true
  } else {
    $scope.showfilters = false
  }
  $scope.changePredicate = function(string) {
    $scope.predicate = string;
    if ($scope.category == "advancedStats" || $scope.category == "miscellaneous") {
      $scope.sortingPredicate = "teamStats.team." + string
    } else if (string == "games") {
      $scope.sortingPredicate = "teamStats.team.statAverage.games"
    } else {
      $scope.sortingPredicate = "teamStats.team." + $scope.fieldName + "." + string + $scope.suffix
    }
  };
  $scope.filterTable = function() {
    $scope.moduleLoading = true;
    $scope.sortingPredicate = null;
    $scope.fetchData(fetchParams())
  };
  $scope.setFilterVariables = function() {
    if ($scope.selectedFilters.category.value == "gameInfractions") {
      if ($scope.selectedFilters.dataType.value != "total" && $scope.selectedFilters.dataType.value != "perGame") {
        $scope.showDQ = false
      } else {
        $scope.showDQ = true
      }
    }
    if ($scope.selectedFilters.category.value == "offensive") {
      if ($scope.selectedFilters.dataType.value == "total") {
        $scope.showPct = false
      } else {
        $scope.showPct = true
      }
    }
    $scope.category = $scope.selectedFilters.category.value;
    $scope.suffix = nameMapping[$scope.selectedFilters.dataType.value]["suffix"];
    $scope.filterSeason = $scope.selectedFilters.season.display;
    $scope.seasonType = $scope.selectedFilters.seasonType.display;
    $scope.fieldName = nameMapping[$scope.selectedFilters.dataType.value]["fieldName"];
    $scope.currentpage = 1;
    $scope.predicate = "index";
    $scope.sortingPredicate = null
  };

  function fetchParams() {
    var obj = {
      season: $scope.selectedFilters.season.value,
      seasonType: $scope.selectedFilters.seasonType.value,
      category: $scope.selectedFilters.category.value,
      dataType: $scope.selectedFilters.dataType.value,
      conference: $scope.selectedFilters.conference.value
    };
    if (obj.category == "advancedStats" || obj.category == "miscellaneous") {
      obj.dataType = null
    }
    return obj
  }
  $scope.fetchData = function(paramObj) {
    StatsFeedFetcher.fetch(FEEDS_CONFIG.leagueAdvancedTeamStats, UrlParams.create([], paramObj, false, false)).then(function(data) {
      $scope.moduleLoading = false;
      $scope.seasonStats = data.seasonStats;
      handleData();
      $scope.setFilterVariables()
    })
  };

  function handleData() {
    angular.forEach($scope.seasonStats, function(singleTeamData) {
      singleTeamData.teamStats.team.statAverage.fgpctPg = singleTeamData.teamStats.team.statAverage.fgpct;
      singleTeamData.teamStats.team.statAverage.ftpctPg = singleTeamData.teamStats.team.statAverage.ftpct;
      singleTeamData.teamStats.team.statAverage.tppctPg = singleTeamData.teamStats.team.statAverage.tppct;
      singleTeamData.teamStats.opponent.statAverage.fgpctPg = singleTeamData.teamStats.opponent.statAverage.fgpct;
      singleTeamData.teamStats.opponent.statAverage.ftpctPg = singleTeamData.teamStats.opponent.statAverage.ftpct;
      singleTeamData.teamStats.opponent.statAverage.tppctPg = singleTeamData.teamStats.opponent.statAverage.tppct
    })
  }
  StatsFeedFetcher.fetch(FEEDS_CONFIG.leagueAdvancedTeamStatsForm, UrlParams.create([], {}, false, false)).then(function(data) {
    $scope.filterData = {};
    $scope.selectedFilters = {};
    angular.forEach(data.fields, function(field) {
      var fieldName = field.name;
      $scope.filterData[fieldName] = field.fieldValues;
      angular.forEach($scope.filterData[fieldName], function(fieldValue) {
        if (fieldName == "category") {
          if (fieldValue.value == "advancedStats") {
            fieldValue.display = $filter("i18next")("advancedTeamStats.advancedStats")
          }
        }
        if (fieldValue.isDefault == "true") {
          $scope.selectedFilters[fieldName] = fieldValue
        }
      })
    });
    $scope.fetchData(fetchParams());
    $scope.$watch(function() {
      return $scope.selectedFilters.category.value
    }, function(newValue) {
      if (newValue == "advancedStats" || newValue == "miscellaneous") {
        $scope.showDataType = false
      } else {
        $scope.showDataType = true
      }
    })
  });
  if (!$("html").hasClass("ie8")) {
    $scope.getWidth = function() {
      return $(window).width()
    };
    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
      $scope.window_width = newValue;
      if ($scope.window_width < 700) {
        $scope.paginate = true
      } else {
        $scope.paginate = false
      }
    });
    window.addEventListener("resize", function() {
      if (!$scope.$$phase) {
        $scope.$apply()
      }
    })
  }
}]);
"use strict";
sib.controller("FullPlayerStatsCtrl", ["$scope", "$location", "$timeout", "Page", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", "Site", function FullPlayerStatsCtrl($scope, $location, $timeout, Page, StatsFeedFetcher, UrlParams, FEEDS_CONFIG, Site) {
  Page.setTitle("_page.individualStats");
  $scope.playerPage = 1;
  $scope.playerMaxPages = 9;
  $scope.currentpage = 1;
  $scope.paginate = false;
  $scope.players = {};
  $scope.selectedFilters = {};
  $scope.predicate = "rank";
  $scope.reverse = false;
  $scope.moduleLoading = true;
  $scope.sortTable = function(string) {
    $scope.predicate = string;
    $scope.reverse = !$scope.reverse
  };
  $scope.sortTable("rank");
  if (!$("html").hasClass("ie8")) {
    $scope.getWidth = function() {
      return $(window).width()
    };
    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
      $scope.window_width = newValue;
      if ($scope.window_width < 700) {
        $scope.paginate = true;
        if (Site.hasOwnProperty("expandFilterToggle")) {
          $scope.showfilters = Site.expandFilterToggle
        } else {
          $scope.showfilters = false
        }
      } else {
        $scope.paginate = false;
        $scope.showfilters = true
      }
    });
    window.addEventListener("resize", function() {
      if (!$scope.$$phase) {
        $scope.$apply()
      }
    })
  }
  $scope.filtertoggle = function() {
    if ($scope.showfilters == false) {
      $scope.showfilters = true
    } else {
      $scope.showfilters = false
    }
  };
  StatsFeedFetcher.fetch(FEEDS_CONFIG.leaguePlayerStatsForm, UrlParams.create([], {}, false, false)).then(function(data) {
    var formData = data.fields;
    var filterData = {};
    for (var field in formData) {
      for (var item in formData[field].fieldValues) {
        if (typeof filterData[formData[field].name] == "undefined") {
          filterData[formData[field].name] = []
        }
        filterData[formData[field].name].push(formData[field].fieldValues[item]);
        if (formData[field].fieldValues[item].isDefault === "true" && !$scope.selectedFilters[formData[field].name]) {
          $scope.selectedFilters[formData[field].name] = formData[field].fieldValues[item]
        }
      }
    }
    $scope.filterData = filterData;
    $scope.filterTable()
  });
  $scope.filterTable = function(resetIndex) {
    var getPage = $scope.playerPage - 1;
    var parameters = {};
    $scope.moduleLoading = true;
    Page.showLoading(false);
    for (var index in $scope.selectedFilters) {
      parameters[index] = $scope.selectedFilters[index].value
    }
    if (parameters.total === "total" || parameters.total === null) {
      $scope.showingTotal = true
    } else {
      $scope.showingTotal = false
    }
    if (resetIndex) {
      parameters.pageIndex = 0
    } else {
      parameters.pageIndex = getPage
    }
    parameters.division = null;
    StatsFeedFetcher.fetch(FEEDS_CONFIG.leaguePlayerStats, UrlParams.create([], parameters, false, false)).then(function(data) {
      $scope.moduleLoading = false;
      var teamData = data;
      $scope.players = data.players;
      $scope.playerMaxPages = Number(teamData.paging.totalPages) + 1;
      for (var i = 0; i < $scope.players.length; i++) {
        $scope.players[i].rank = Number($scope.players[i].rank)
      }
      if (resetIndex == true) {
        $scope.playerPage = 1
      }
    })
  };
  $scope.playerPaginate = function(direction) {
    $scope.paginating = true;
    switch (direction) {
      case "prev":
        if ($scope.playerPage > 1) {
          $scope.playerPage--;
          $scope.filterTable()
        }
        break;
      case "next":
        if ($scope.playerPage < $scope.playerMaxPages) {
          $scope.playerPage++;
          $scope.filterTable()
        }
        break
    }
  };
  var maxPages = 5;
  var element = document.getElementById("sib-full-player-stats");
  if (!$("html").hasClass("ie8") && element) {
    if (window.isAndroid) {
      Hammer(element).on("dragleft", function(event) {
        event.preventDefault();
        Hammer(element).trigger("swipeleft", event)
      });
      Hammer(element).on("dragright", function(event) {
        event.preventDefault();
        Hammer(element).trigger("swiperight", event)
      })
    }
    Hammer(element).on("swipeleft", function(event) {
      event.preventDefault();
      if ($scope.currentpage < maxPages) {
        $scope.currentpage++;
        if (!$scope.$$phase) {
          $scope.$apply()
        }
      }
    });
    Hammer(element).on("swiperight", function(event) {
      event.preventDefault();
      if ($scope.currentpage > 1) {
        $scope.currentpage--;
        if (!$scope.$$phase) {
          $scope.$apply()
        }
      }
    })
  }
}]);
"use strict";
sib.controller("FullTeamStatsCtrl", ["$scope", "$location", "Page", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", "Site", function FullTeamStatsCtrl($scope, $location, Page, StatsFeedFetcher, UrlParams, FEEDS_CONFIG, Site) {
  Page.setTitle("_page.teamStats");
  $scope.currentpage = 1;
  $scope.paginate = false;
  $scope.positivelyViewed = true;
  $scope.teams = {};
  $scope.selectedFilters = {};
  $scope.predicate = null;
  $scope.reverse = false;
  $scope.moduleLoading = true;
  var seasonTypeArray = ["preseason", "regularSeason", "allStar", "playoffSeason"];
  $scope.sortTable = function(string, positivelyViewed) {
    if ($scope.predicate != string) {
      if (positivelyViewed == false) {
        $scope.reverse = false
      } else {
        $scope.reverse = true
      }
    } else {
      $scope.reverse = !$scope.reverse
    }
    $scope.predicate = string;
    if (positivelyViewed == false) {
      $scope.positivelyViewed = false
    } else {
      $scope.positivelyViewed = true
    }
  };
  if (!$("html").hasClass("ie8")) {
    $scope.getWidth = function() {
      return $(window).width()
    };
    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
      $scope.window_width = newValue;
      if ($scope.window_width < 700) {
        $scope.paginate = true
      } else {
        $scope.paginate = false
      }
    });
    window.addEventListener("resize", function() {
      if (!$scope.$$phase) {
        $scope.$apply()
      }
    })
  }
  if (Site.hasOwnProperty("expandFilterToggle")) {
    $scope.showfilters = Site.expandFilterToggle
  } else {
    $scope.showfilters = false
  }
  $scope.tabletabbed = "avg";
  $scope.filtertoggle = function() {
    if ($scope.showfilters == false) {
      $scope.showfilters = true
    } else {
      $scope.showfilters = false
    }
  };
  StatsFeedFetcher.fetch(FEEDS_CONFIG.leagueTeamStatsForm, UrlParams.create([], {}, false, false)).then(function(data) {
    var formData = data.fields;
    var filterData = {};
    for (var field in formData) {
      for (var item in formData[field].fieldValues) {
        if (typeof filterData[formData[field].name] == "undefined") {
          filterData[formData[field].name] = []
        }
        filterData[formData[field].name].push(formData[field].fieldValues[item]);
        if (formData[field].fieldValues[item].isDefault === "true" && !$scope.selectedFilters[formData[field].name]) {
          $scope.selectedFilters[formData[field].name] = formData[field].fieldValues[item]
        }
      }
    }
    $scope.filterData = filterData;
    $scope.filterTable()
  });
  $scope.filterTable = function() {
    var parameters = {};
    for (var index in $scope.selectedFilters) {
      parameters[index] = $scope.selectedFilters[index].value
    }
    $scope.filterSeason = $scope.selectedFilters.season.display;
    $scope.seasonType = seasonTypeArray[$scope.selectedFilters.seasonType.value - 1];
    Page.showLoading(false);
    $scope.moduleLoading = true;
    StatsFeedFetcher.fetch(FEEDS_CONFIG.leagueTeamStats, UrlParams.create([], parameters, false, false)).then(function(data) {
      var teamData = data;
      $scope.moduleLoading = false;
      if (teamData) {
        $scope.teams = teamData.teams
      } else {
        $scope.teams = {}
      }
    })
  };
  var maxPages = 5;
  var elements = $(".sib-full-team-stats");
  if (!$("html").hasClass("ie8") && $(".sib-full-team-stats").length > 0) {
    for (var i = 0; i < elements.length; i++) {
      if (window.isAndroid) {
        Hammer(elements[i]).on("dragleft", function(event) {
          event.preventDefault();
          Hammer(elements[i]).trigger("swipeleft", event)
        });
        Hammer(elements[i]).on("dragright", function(event) {
          event.preventDefault();
          Hammer(elements[i]).trigger("swiperight", event)
        })
      }
      Hammer(elements[i]).on("swipeleft", function(event) {
        if ($scope.currentpage < maxPages) {
          $scope.currentpage++;
          if (!$scope.$$phase) {
            $scope.$apply()
          }
        }
      });
      Hammer(elements[i]).on("swiperight", function(event) {
        if ($scope.currentpage > 1) {
          $scope.currentpage--;
          if (!$scope.$$phase) {
            $scope.$apply()
          }
        }
      })
    }
  }
}]);
"use strict";
sib.controller("LeagueLeadersCtrl", ["$scope", "$location", "$timeout", "Page", "Site", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", function LeagueLeadersCtrl($scope, $location, $timeout, Page, Site, StatsFeedFetcher, UrlParams, FEEDS_CONFIG) {
  $scope.tabbed = "last";
  $scope.category = "point";
  var lastLeadingPlayers = {};
  var seasonLeadingPlayers = {};
  $scope.starPlayer = {};
  $scope.players = [];
  var seasonTypeArray = ["preseason", "regularSeason", "allStar", "playoffSeason"];
  $scope.setLastCategory = function(category) {
    $scope.category = category;
    var leaders = lastLeadingPlayers[category + "Leaders"];
    if (!leaders) {
      var feedParams = UrlParams.create([], {
        statType: $scope.category + "s"
      }, false, false);
      StatsFeedFetcher.fetch(FEEDS_CONFIG.leagueLeadingPlayers, feedParams).then(function(data) {
        lastLeadingPlayers[category + "Leaders"] = data[category + "Leaders"];
        $scope.starPlayer = lastLeadingPlayers[category + "Leaders"][0];
        $scope.players = lastLeadingPlayers[category + "Leaders"].slice(1, 5);
        $scope.seasonType = seasonTypeArray[data.season.statsSeasonType - 1]
      })
    } else {
      $scope.starPlayer = leaders[0];
      $scope.players = leaders.slice(1, 5)
    }
  };
  $scope.setSeasonCategory = function(category) {
    $scope.category = category;
    $scope.starPlayer = {};
    $scope.players = {};
    if (!seasonLeadingPlayers[category]) {
      if ($scope.tabbed == "last") {
        var total = "total"
      } else {
        var total = "perGame"
      }
      var requestCategory = category === "rebs" ? "rebounds" : category;
      var feedParams = UrlParams.create([], {
        statType: requestCategory,
        qualified: true,
        maxRecordsPerPage: 5,
        total: total
      }, false, false);
      StatsFeedFetcher.fetch(FEEDS_CONFIG.leaguePlayerStats, feedParams).then(function(data) {
        seasonLeadingPlayers[category] = data.players;
        $scope.starPlayer = seasonLeadingPlayers[category][0];
        $scope.players = seasonLeadingPlayers[category].slice(1, 5);
        $scope.seasonType = seasonTypeArray[data.season.statsSeasonType - 1];
        Page.setPermitLoading(true)
      })
    } else {
      $scope.starPlayer = seasonLeadingPlayers[category][0];
      $scope.players = seasonLeadingPlayers[category].slice(1, 5);
      Page.setPermitLoading(false)
    }
  };
  $scope.switchTab = function(tab) {
    switch (tab) {
      case 2:
        $scope.tabbed = "season";
        $scope.setSeasonCategory($scope.category + "s");
        break;
      case 1:
      default:
        $scope.tabbed = "last";
        $scope.setLastCategory($scope.category)
    }
  };
  if (Site.hasOwnProperty("leagueLeaderTab") && angular.isNumber(Site.leagueLeaderTab)) {
    $scope.switchTab(Site.leagueLeaderTab)
  } else {
    $scope.setLastCategory($scope.category)
  }
}]);
"use strict";
sib.controller("LeagueLeadingTeamsCtrl", ["$scope", "Page", "$location", "$timeout", "$filter", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", function LeagueLeadingTeamsCtrl($scope, Page, $location, $timeout, $filter, StatsFeedFetcher, UrlParams, FEEDS_CONFIG) {
  Page.setTitle("_page.leagueLeaders");
  $scope.tabbed = "last";
  $scope.category = "statAverage.pointsPg";
  var seasonTypeArray = ["preseason", "regularSeason", "allStar", "playoffSeason"];
  StatsFeedFetcher.fetch(FEEDS_CONFIG.leagueTeamStats, UrlParams.create([], {}, false, false)).then(function(data) {
    $scope.leagueTeamStats = data.teams;
    $scope.seasonType = seasonTypeArray[data.season.statsSeasonType - 1]
  });
  $scope.sortTeams = function(category) {
    $scope.category = category
  }
}]);
"use strict";
sib.controller("WhosHotCtrl", ["$scope", "$location", "$timeout", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", function WhosHotCtrl($scope, $location, $timeout, StatsFeedFetcher, UrlParams, FEEDS_CONFIG) {
  $scope.tabbed = "ppg";
  $scope.moduleLoading = true;
  StatsFeedFetcher.fetch(FEEDS_CONFIG.whosHot, UrlParams.create([], {}, false, false)).then(function(data) {
    $scope.whosHot = data;
    if (!$scope.whosHot.pointHotPlayers) {
      $scope.showLeaders = false
    } else {
      $scope.showLeaders = true
    }
    $scope.moduleLoading = false
  })
}]);
"use strict";
sib.controller("ArticleCtrl", ["$scope", "Page", "SimpleFeedFetcher", "$location", function ArticleCtrl($scope, Page, SimpleFeedFetcher, $location) {
  Page.setTitle("_page.article");
  loadArticle();

  function loadArticle() {
    var articleURL = $location.path();
    if (!articleURL) {
      return
    }
    SimpleFeedFetcher.get(articleURL).then(function(data) {
      $scope.article = data
    })
  }
}]);
"use strict";
sib.controller("CalendarCtrl", ["$scope", "$location", "FEEDS_CONFIG", function CalendarCtrl($scope, $location, FEEDS_CONFIG) {
  $scope.offsets = [-1, 0, 1];
  $scope.clickRight = function() {
    if (FEEDS_CONFIG.debug) console.log("event fired");
    for (var i = 0; i < $scope.offsets.length; i++) {
      $scope.offsets[i]++
    }
    if (FEEDS_CONFIG.debug) console.log($scope.offsets)
  };
  $scope.clickLeft = function() {
    if (FEEDS_CONFIG.debug) console.log("event fired");
    for (var i = 0; i < $scope.offsets.length; i++) {
      $scope.offsets[i]--
    }
    if (FEEDS_CONFIG.debug) console.log($scope.offsets)
  }
}]);
"use strict";
sib.controller("NavCtrl", ["$scope", "Page", "tmhDynamicLocale", "$i18next", "$http", "$cookies", "FEEDS_CONFIG", function NavCtrl($scope, Page, tmhDynamicLocale, $i18next, $http, $cookies, FEEDS_CONFIG) {
  $scope.changeLanguage = function(lng, country) {
    Page.setLoading(true);
    if (FEEDS_CONFIG.debug) console.log("Changing language: " + lng);
    $i18next.options.lng = lng;
    $cookies.put("i18next", lng, {
      path: "/"
    });
    $cookies.put("locale", lng, {
      path: "/"
    });
    $cookies.put("countryCode", country, {
      path: "/"
    });
    document.location.reload(true)
  }
}]);
"use strict";
sib.controller("NavbarCtrl", ["$scope", "$location", "FEEDS_CONFIG", function NavbarCtrl($scope, $location, FEEDS_CONFIG) {
  $scope.navDrop = false;
  $scope.dropNav = function() {
    if ($scope.navDrop == true) {
      $scope.navDrop = false
    } else {
      $scope.navDrop = true
    }
  }
}]);
sib.controller("BreakingNewsController", ["Page", "$scope", "$timeout", "SimpleFeedFetcher", function NewsTabController(Page, $scope, $timeout, SimpleFeedFetcher) {
  "use strict";
  var url = "/frags/editorial_hp_breaking_news.html";
  var timerId;
  var pollingInterval = 5 * 60 * 1e3;
  $scope.hasBreakingNews = false;
  $scope.$on("$destroy", function() {
    $timeout.cancel(timerId)
  });

  function load() {
    var sTime = (new Date).getTime() + "";
    var cacheTime = sTime.substring(0, sTime.length - 5);
    SimpleFeedFetcher.get(url + "?cachebuster=" + cacheTime).then(function(data) {
      if (data.trim().length > 0) {
        $scope.content = data;
        $scope.hasBreakingNews = true
      } else {
        $scope.hasBreakingNews = false
      }
      timerId = $timeout(function() {
        $timeout.cancel(timerId);
        load()
      }, pollingInterval)
    })
  }
  load()
}]);
sib.controller("NewsTabController", ["Page", "$scope", function NewsTabController(Page, $scope) {
  "use strict";
  $scope.selectedTab = 0;
  $scope.selectTab = function(i) {
    $scope.selectedTab = i
  };
  $scope.$watch(function() {
    return $(document).width()
  }, function(newValue, oldValue) {
    var ww = newValue;
    $scope.tabbed = ww < 766
  })
}]);
"use strict";
sib.controller("ActivePlayerTabCtrl", ["$scope", "$location", "$timeout", "FEEDS_CONFIG", "Site", function ActivePlayerTabCtrl($scope, $location, $timeout, FEEDS_CONFIG, Site) {
  $scope.tabClass = "";
  if (Site.hasOwnProperty("playerNews") && Site.playerNews == true) {
    $scope.tabCount = "5";
    $scope.showNews = true
  }
  if (!$("html").hasClass("ie8")) {
    $scope.$watch("activePlayerTab", function(value) {
      if (typeof $scope.player == "undefined" || typeof $scope.player.playerProfile == "undefined") {
        return
      }
      var url = "";
      if ($scope.activePlayerTab == "profile") {
        url = "/players/#!/" + $scope.player.playerProfile.code
      } else {
        url = "/players/" + $scope.activePlayerTab + "/#!/" + $scope.player.playerProfile.code
      }
      window.location = url
    })
  }
}]);
"use strict";
sib.controller("CurrentPlayerIndexCtrl", ["$scope", "Site", "$filter", "$i18next", "Page", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", function CurrentPlayerIndexCtrl($scope, Site, $filter, $i18next, Page, StatsFeedFetcher, UrlParams, FEEDS_CONFIG) {
  Page.setTitle("_page.playerIndex");
  $scope.clearBtnShow = false;
  $scope.activeInitial = "all";
  $scope.search = "";
  $scope.country = "";
  $scope.countries = [];
  $scope.teams = [];
  $scope.team = "";
  $scope.moduleLoading = true;
  $scope.formSrc = "/templates/fragments/player-index/current-form.html";
  $scope.paginate = false;
  $scope.currentpage = 1;
  $scope.$watch("search", function() {
    if ($scope.search == "") {
      $scope.clearBtnShow = false
    } else {
      $scope.clearBtnShow = true
    }
  });
  $scope.getFullPlayerList = function() {
    $scope.moduleLoading = true;
    StatsFeedFetcher.fetch(FEEDS_CONFIG.playerList, UrlParams.create([], {}, false, false)).then(function(data) {
      $scope.allPlayers = data.players;
      $scope.moduleLoading = false
    })
  };

  function checkInitial(playerObj, initialLetterObj) {
    if (playerObj.lastNameEn) {
      return angular.lowercase(playerObj.lastNameEn.charAt(0)) == angular.lowercase(initialLetterObj.lastNameEn)
    } else {
      return false
    }
  }
  $scope.searchPlayers = function() {
    if (!$scope.search.length) {
      $scope.activeInitial = "A";
      var playerArray = [];
      for (var i = 0; i < $scope.allPlayers.length; i++) {
        var player = $scope.allPlayers[i];
        if (player.playerProfile.lastNameEn.charAt(0) === $scope.activeInitial) {
          playerArray.push(player)
        }
      }
      $scope.players = playerArray
    } else if ($scope.search.length < 2) {
      $scope.players = {}
    } else {
      var playerArray = [];
      for (var i = 0; i < $scope.allPlayers.length; i++) {
        var player = $scope.allPlayers[i];
        if (player.playerProfile.lastName.toLowerCase().includes($scope.search.toLowerCase()) || player.playerProfile.firstName.toLowerCase().includes($scope.search.toLowerCase()) || player.playerProfile.lastNameEn.toLowerCase().includes($scope.search.toLowerCase()) || player.playerProfile.firstNameEn.toLowerCase().includes($scope.search.toLowerCase())) {
          playerArray.push(player)
        }
      }
      $scope.players = playerArray;
      $scope.country = $scope.countries[0].display;
      $scope.team = $scope.teams[0].value;
      $scope.activeInitial = "all"
    }
  };
  $scope.onCountrySelect = function() {
    if ($scope.country != "") {
      var playerArray = [];
      for (var i = 0; i < $scope.allPlayers.length; i++) {
        var player = $scope.allPlayers[i];
        if (player.playerProfile.country === $scope.country) {
          playerArray.push(player)
        }
      }
      $scope.players = playerArray;
      $scope.team = $scope.teams[0].value;
      $scope.search = "";
      $scope.activeInitial = "all"
    } else {
      var playerArray = [];
      for (var i = 0; i < $scope.allPlayers.length; i++) {
        var player = $scope.allPlayers[i];
        if (player.playerProfile.lastNameEn.charAt(0) === $scope.activeInitial) {
          playerArray.push(player)
        }
      }
      $scope.players = playerArray
    }
  };
  $scope.onTeamSelect = function() {
    if ($scope.team != "") {
      var playerArray = [];
      for (var i = 0; i < $scope.allPlayers.length; i++) {
        var player = $scope.allPlayers[i];
        if (player.teamProfile.code === $scope.team) {
          playerArray.push(player)
        }
      }
      $scope.players = playerArray;
      $scope.country = $scope.countries[0].display;
      $scope.search = "";
      $scope.activeInitial = "all"
    } else {
      var playerArray = [];
      for (var i = 0; i < $scope.allPlayers.length; i++) {
        var player = $scope.allPlayers[i];
        if (player.playerProfile.lastNameEn.charAt(0) === $scope.activeInitial) {
          playerArray.push(player)
        }
      }
      $scope.players = playerArray
    }
  };
  $scope.fetchPlayers = function(initial) {
    Page.setPermitLoading(false);
    $scope.search = "";
    $scope.country = "";
    $scope.team = "";
    var obj = {};
    if (initial) {
      $scope.activeInitial = initial
    }
    if ($scope.activeInitial == "all") {
      $scope.players = {}
    } else {
      obj.lastName = $scope.activeInitial;
      $scope.getPlayerList(obj)
    }
  };
  $scope.fetchPlayersByLetter = function() {
    var playerArray = [];
    for (var i = 0; i < $scope.allPlayers.length; i++) {
      var player = $scope.allPlayers[i];
      if (player.playerProfile.lastNameEn.charAt(0) === $scope.activeInitial) {
        playerArray.push(player)
      }
    }
    $scope.players = playerArray
  };
  $scope.changeInitial = function(initial) {
    if (initial) {
      $scope.activeInitial = initial
    }
    $scope.fetchPlayersByLetter()
  };
  $scope.fetchCountry = function(country) {
    Page.setPermitLoading(false);
    $scope.search = "";
    $scope.team = $scope.teams[0].value;
    $scope.activeInitial = "all";
    var obj = {
      country: country
    };
    $scope.getPlayerList(obj)
  };
  $scope.getPlayerList = function(obj) {
    $scope.moduleLoading = true;
    StatsFeedFetcher.fetch(FEEDS_CONFIG.playerList, UrlParams.create([], obj, false, false)).then(function(data) {
      $scope.players = data.players;
      $scope.moduleLoading = false
    })
  };
  $scope.getFormData = function() {
    StatsFeedFetcher.fetch(FEEDS_CONFIG.playerStatsForm, UrlParams.create([], {}, false, false)).then(function(data) {
      var formData = data;
      for (var fieldIndex in formData.fields) {
        var field = formData.fields[fieldIndex];
        if (field.name == "country") {
          $scope.countries = field.fieldValues;
          $scope.countries[0].display = $filter("i18next")("playerIndex.byCountry");
          $scope.country = $scope.countries[0].display
        } else if (field.name == "team") {
          $scope.teams = field.fieldValues;
          $scope.teams[0].display = $filter("i18next")("playerIndex.byTeam");
          $scope.teams[0].value = "";
          $scope.team = $scope.teams[0].value
        }
      }
    })
  };
  if (!$("html").hasClass("ie8")) {
    $scope.getWidth = function() {
      return $(window).width()
    };
    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
      $scope.window_width = newValue;
      if ($scope.window_width < 500) {
        $scope.paginate = true
      } else {
        $scope.paginate = false
      }
    });
    window.addEventListener("resize", function() {
      if (!$scope.$$phase) {
        $scope.$apply()
      }
    })
  }
  if (Site.hasOwnProperty("useDoubleNamePlayerIndex") && Site.useDoubleNamePlayerIndex) {
    $scope.tableSrc = "/templates/fragments/player-index/double-name-table.html"
  } else {
    $scope.tableSrc = "/templates/fragments/player-index/single-name-table.html"
  }
  $scope.getFormData();
  $scope.fetchPlayers("A");
  $scope.getFullPlayerList()
}]);
"use strict";
sib.controller("HistoricalPlayerIndexCtrl", ["$scope", "$filter", "Site", "Page", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", function HistoricalPlayerIndexCtrl($scope, $filter, Site, Page, StatsFeedFetcher, UrlParams, FEEDS_CONFIG) {
  Page.setTitle("_page.historicalPlayerIndex");
  $scope.activeInitial = "A";
  $scope.moduleLoading = true;
  $scope.seasonRange = [];
  $scope.season = "";
  $scope.players = [];
  $scope.search = "";
  $scope.clearBtnShow = false;
  $scope.formSrc = "/templates/fragments/player-index/history-form.html";
  $scope.history = true;
  $scope.paginate = false;
  $scope.currentpage = 1;
  $scope.$watch("search", function(newValue, oldValue) {
    if (newValue != oldValue) {
      if ($scope.search.length > 0) {
        $scope.clearBtnShow = true
      } else if ($scope.clearBtnShow) {
        $scope.clearBtnShow = false;
        $scope.closeBtn()
      }
    }
  });
  $scope.closeBtn = function() {
    $scope.season = $scope.seasonRange[1].value;
    $scope.changeInitial("A")
  };
  $scope.searchPlayers = function(event) {
    if (!event || event.which === 13) {
      if ($scope.search.length >= 3) {
        $scope.activeInitial = "all";
        $scope.season = "all";
        var obj = {
          firstOrLastName: $scope.search
        };
        $scope.getPlayerList(obj)
      }
    }
  };
  $scope.getFormData = function() {
    StatsFeedFetcher.fetch(FEEDS_CONFIG.historicalplayerListForm, UrlParams.create([], {}, false, false)).then(function(data) {
      var formData = data;
      for (var fieldIndex in formData.fields) {
        var field = formData.fields[fieldIndex];
        if (field.name == "seasonRange") {
          $scope.seasonRange = field.fieldValues;
          var allDecade = {
            display: $filter("i18next")("historicalPlayerIndex.filterByDecade"),
            value: "all",
            isDefault: false
          };
          $scope.seasonRange.unshift(allDecade);
          $scope.season = $scope.seasonRange[1].value;
          var obj = {
            seasonRange: $scope.season,
            lastName: $scope.activeInitial
          };
          $scope.getPlayerList(obj)
        }
      }
    })
  };
  $scope.getPlayerList = function(obj) {
    $scope.moduleLoading = true;
    StatsFeedFetcher.fetch(FEEDS_CONFIG.historicalPlayerList, UrlParams.create([], obj, false, false)).then(function(data) {
      $scope.players = data != null ? data.players : null;
      $scope.moduleLoading = false
    })
  };
  $scope.onSeasonChange = function(season) {
    $scope.clearBtnShow = false;
    $scope.search = "";
    if ($scope.activeInitial == "all") {
      $scope.activeInitial = "A"
    }
    if ($scope.season != "all") {
      var obj = {
        seasonRange: $scope.season,
        lastName: $scope.activeInitial
      };
      $scope.getPlayerList(obj)
    }
  };
  $scope.changeInitial = function(initial) {
    $scope.clearBtnShow = false;
    $scope.search = "";
    if (initial) {
      $scope.activeInitial = initial
    }
    if ($scope.season == "all") {
      $scope.season = $scope.seasonRange[1].value
    }
    var obj = {
      seasonRange: $scope.season,
      lastName: $scope.activeInitial
    };
    $scope.getPlayerList(obj)
  };
  if (!$("html").hasClass("ie8")) {
    $scope.getWidth = function() {
      return $(window).width()
    };
    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
      $scope.window_width = newValue;
      if ($scope.window_width < 500) {
        $scope.paginate = true
      } else {
        $scope.paginate = false
      }
    });
    window.addEventListener("resize", function(e) {
      if (!$scope.$$phase) {
        $scope.$apply()
      }
    })
  }
  if (Site.hasOwnProperty("useDoubleNamePlayerIndex") && Site.useDoubleNamePlayerIndex) {
    $scope.tableSrc = "/templates/fragments/player-index/double-name-table.html"
  } else {
    $scope.tableSrc = "/templates/fragments/player-index/single-name-table.html"
  }
  $scope.getFormData()
}]);
"use strict";
sib.controller("LastFiveStatsCtrl", ["$scope", "$location", "FEEDS_CONFIG", function LastFiveStatsCtrl($scope, $location, FEEDS_CONFIG) {
  $scope.currentpage = 1;
  $scope.paginate = false;
  $scope.predicate = "";
  $scope.reverse = false;
  $scope.sortTable = function(string) {
    $scope.predicate = string;
    $scope.reverse = true
  };
  if (!$("html").hasClass("ie8")) {
    $scope.getWidth = function() {
      return $(window).width()
    };
    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
      $scope.window_width = newValue;
      if ($scope.window_width < 700) {
        $scope.paginate = true
      } else {
        $scope.paginate = false
      }
    });
    window.addEventListener("resize", function() {
      if (!$scope.$$phase) {
        $scope.$apply()
      }
    })
  }
  var maxPages = 4;
  var element = document.getElementById("sib-player-last-five-stats");
  if (!$("html").hasClass("ie8") && element) {
    if (window.isAndroid) {
      Hammer(element).on("dragleft", function(event) {
        event.preventDefault();
        Hammer(element).trigger("swipeleft", event)
      });
      Hammer(element).on("dragright", function(event) {
        event.preventDefault();
        Hammer(element).trigger("swiperight", event)
      })
    }
    Hammer(element).on("swipeleft", function(event) {
      event.preventDefault();
      if ($scope.currentpage < maxPages) {
        $scope.currentpage++;
        if (!$scope.$$phase) {
          $scope.$apply()
        }
      }
    });
    Hammer(element).on("swiperight", function(event) {
      event.preventDefault();
      if ($scope.currentpage > 1) {
        $scope.currentpage--;
        if (!$scope.$$phase) {
          $scope.$apply()
        }
      }
    })
  }
}]);
"use strict";
sib.controller("PlayerAwardsCtrl", ["$scope", "$location", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", function PlayerAwardsCtrl($scope, $location, StatsFeedFetcher, UrlParams, FEEDS_CONFIG) {
  function fetchPlayerAwards() {
    var param = $location.path().substring(1);
    var paramObj = isNaN(param) ? {
      playerCode: param
    } : {
      playerId: param
    };
    StatsFeedFetcher.fetch(FEEDS_CONFIG.playerAwards, UrlParams.create([], paramObj, false, false)).then(function(data) {
      var awardsData = data;
      var awards = {};
      if (!awardsData) {
        return
      }
      for (var i = 0; i < awardsData.PlayerAwards.length; i++) {
        var awardData = awardsData.PlayerAwards[i].Award[0];
        var awardCount = awardsData.PlayerAwards[i].Award[1].YearsAwarded.length;
        var icon = "";
        switch (awardData.SubType1) {
          case "Olympic":
            icon = "icon-globe";
            break;
          case "Kia Motors":
            icon = "icon-trophy";
            break;
          default:
            icon = "icon-star";
            break
        }
        var award = {
          name: awardData.AwardName,
          icon: icon,
          count: awardCount
        };
        awards[awardData.AwardName] = award
      }
      var awardsList = [];
      for (var award in awards) {
        awardsList.push(awards[award])
      }
      $scope.awards = awardsList
    })
  }
  fetchPlayerAwards()
}]);
"use strict";
sib.controller("PlayerCareerCtrl", ["$scope", "$location", "$timeout", "Page", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", function PlayerSnapshotCtrl($scope, $location, $timeout, Page, StatsFeedFetcher, UrlParams, FEEDS_CONFIG) {
  $scope.paginate = false;
  $scope.currentpage = 1;
  $scope.predicate = "$index";
  $scope.reverse = false;
  $scope.sortTable = function(string) {
    $scope.predicate = string;
    $scope.reverse = true
  };
  $scope.fetchPlayerCareerBySeasonType = function(seasonType) {
    StatsFeedFetcher.fetch(FEEDS_CONFIG.playerCareerStats, UrlParams.create(["playerCodes"], {}, false, false)).then(function(data) {
      var playerCareerData = data;
      var players = [];
      var careerStats = null;
      for (var i = 0; i < playerCareerData.player.length; i++) {
        var player = playerCareerData.player[i];
        if (seasonType === 2) {
          careerStats = player.regularCareerStatsAverage != null ? player.regularCareerStatsAverage : null
        } else if (seasonType === 4) {
          careerStats = player.playoffCareerStatsAverage != null ? player.playoffCareerStatsAverage : null
        }
        var scopePlayer = {
          playerProfile: player.playerProfile,
          teamProfile: player.teamProfile,
          careerStats: careerStats
        };
        players.push(scopePlayer)
      }
      $scope.players = players
    });
    Page.setPermitLoading(false)
  };
  $scope.getWidth = function() {
    return $(window).width()
  };
  $scope.$watch($scope.getWidth, function(newValue, oldValue) {
    $scope.window_width = newValue;
    if ($scope.window_width < 700) {
      $scope.paginate = true
    } else {
      $scope.paginate = false
    }
  });
  window.addEventListener("resize", function() {
    if (!$scope.$$phase) {
      $scope.$apply()
    }
  })
}]);
"use strict";
sib.controller("PlayerComparisonCtrl", ["$scope", "$location", "Page", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", "$window", function PlayerComparisonCtrl($scope, $location, Page, StatsFeedFetcher, UrlParams, FEEDS_CONFIG, $window) {
  Page.setTitle("_page.playerComparison");
  $scope.activePlayerTab = "vs";
  $scope.selectstats = false;
  $scope.lastFiveStats = false;
  $scope.playerOneId = null;
  $scope.playerTwoId = null;
  $scope.playerOneSelect = false;
  $scope.playerTwoSelect = false;
  $scope.playerOneSearch = "";
  $scope.playerTwoSearch = "";
  $scope.seasonIndex = null;
  $scope.splitIndex = null;
  $scope.leagueHotzoneData = {};
  $scope.stats = {
    ppg: true,
    apg: true,
    rpg: true,
    tpp: true,
    ftp: true,
    g: false,
    gs: false,
    mpg: false,
    fg: false,
    oreb: false,
    dreb: false,
    spg: false,
    bpg: false,
    to: false,
    pf: false,
    lastFive: {
      ppg: true,
      apg: true,
      rpg: true,
      g: false,
      gs: false,
      mpg: false,
      fg: false,
      tpp: false,
      ftp: false,
      oreb: false,
      dreb: false,
      spg: false,
      bpg: false,
      to: false,
      pf: false
    }
  };
  $scope.playerComparisonChartData = {
    playerOne: {},
    playerTwo: {}
  };
  $scope.playerShotChartData = {
    playerOne: {},
    playerTwo: {}
  };
  $scope.leagueSeasonAverage = {};
  StatsFeedFetcher.fetch(FEEDS_CONFIG.playerList, UrlParams.create([], {}, false, false)).then(function(data) {
    var playerListData = data;
    $scope.playerList = playerListData.players
  });
  StatsFeedFetcher.fetch(FEEDS_CONFIG.leaguePlayerHotzones, UrlParams.create([], {}, false, false)).then(function(data) {
    var leagueHotzoneData = data;
    $scope.leagueHotzoneData = leagueHotzoneData.hotZone;
    var seasonIndex = leagueHotzoneData.hotZone.seasons.length - 1;
    $scope.seasonIndex = seasonIndex;
    var splitIndex = null;
    for (var i = 0; i < leagueHotzoneData.hotZone.seasons[seasonIndex].splits.length; i++) {
      if (leagueHotzoneData.hotZone.seasons[seasonIndex].splits[i].type == "Total") {
        splitIndex = i;
        $scope.splitIndex = i
      }
    }
    $scope.leagueSeasonAverage = leagueHotzoneData.hotZone.seasons[seasonIndex].splits[splitIndex].statAverage
  });
  $scope.changePlayer = function(playerIndex, playerParam) {
    if (playerParam.length < 1) {
      return
    }
    var locationData = $location.path().replace(/(^\/|\/$)/, "").split("/");
    if (playerIndex == "playerOne") {
      var scopeVar = "playerOneId";
      if (locationData[1] !== undefined) {
        $location.path("/" + playerParam + "/" + locationData[1])
      } else {
        $location.path("/" + playerParam + "/")
      }
    } else {
      var scopeVar = "playerTwoId";
      $location.path("/" + locationData[0] + "/" + playerParam)
    }
    $location.search([]);
    $window.location.hash = "#!" + $location.path();
    $scope[scopeVar] = playerParam;
    $scope.playerComparisonChartData[playerIndex] = {
      last5: {}
    };
    var paramObj = isNaN(playerParam) ? {
      playerCode: playerParam
    } : {
      playerId: playerParam
    };
    var feedParams = UrlParams.create([], paramObj, false, false);
    StatsFeedFetcher.fetch(FEEDS_CONFIG.playerHotzones, feedParams).then(function(data) {
      var playerData = data;
      $scope.playerShotChartData[playerIndex] = playerData.hotZone;
      $scope.playerComparisonChartData[playerIndex].playerProfile = playerData.profile;
      if (playerIndex === "playerOne") {
        $scope.player = $scope.playerComparisonChartData[playerIndex]
      }
      $scope.playerComparisonChartData[playerIndex].teamProfile = playerData.teamProfile;
      var seasonIndex = playerData.hotZone.seasons.length - 1;
      $scope.seasonIndex = seasonIndex;
      angular.forEach(playerData.hotZone.seasons[seasonIndex].splits, function(split) {
        if (split.type == "Last 5") {
          $scope.playerComparisonChartData[playerIndex].last5.statAverage = split.statAverage;
          $scope.playerComparisonChartData[playerIndex].last5.statTotal = split.statTotal
        } else if (split.type == "Total") {
          $scope.playerComparisonChartData[playerIndex].statAverage = split.statAverage;
          $scope.playerComparisonChartData[playerIndex].statTotal = split.statTotal
        }
      })
    });
    $scope.playerOneSelect = $scope.playerTwoSelect = false
  };
  var locationData = $location.path().replace(/(^\/|\/$)/, "").split("/");
  if (locationData[0] !== undefined) {
    $scope.changePlayer("playerOne", locationData[0])
  }
  if (locationData[1] !== undefined) {
    $scope.changePlayer("playerTwo", locationData[1])
  }
}]);
"use strict";
sib.controller("PlayerLeagueComparisonCtrl", ["$scope", "$location", "FEEDS_CONFIG", function PlayerLeagueComparisonCtrl($scope, $location, FEEDS_CONFIG) {
  $scope.leagueSeasonAveragePct = {};
  $scope.currentSeasonStatsPct = {};
  $scope.$watch("player", function(player) {
    if ($scope.player) {
      $scope.currentSeasonStats = $scope.player.stats.currentSeasonTypeStat.currentSeasonTypePlayerTeamStats[$scope.player.stats.currentSeasonTypeStat.currentSeasonTypePlayerTeamStats.length - 1]
    }
  });
  $scope.$watch("leagueSeasonAverage", function(leagueSeasonAverage) {
    if ($scope.leagueSeasonAverage) {
      $scope.leagueSeasonAveragePct.pointsPg = $scope.leagueSeasonAverage.pointsPg * 2.5;
      $scope.currentSeasonStatsPct.pointsPg = $scope.currentSeasonStats.statAverage.pointsPg * 2.5;
      $scope.leagueSeasonAveragePct.rebsPg = $scope.leagueSeasonAverage.rebsPg * 5;
      $scope.currentSeasonStatsPct.rebsPg = $scope.currentSeasonStats.statAverage.rebsPg * 5;
      $scope.leagueSeasonAveragePct.assistsPg = $scope.leagueSeasonAverage.assistsPg * 7;
      $scope.currentSeasonStatsPct.assistsPg = $scope.currentSeasonStats.statAverage.assistsPg * 7
    }
    if ($("html").hasClass("ie8")) {
      $("#cs-ppg").attr("style", "height:" + $scope.currentSeasonStatsPct.pointsPg + "%");
      $("#la-ppg").attr("style", "height:" + $scope.leagueSeasonAveragePct.pointsPg + "%");
      $("#cs-rpg").attr("style", "height:" + $scope.currentSeasonStatsPct.rebsPg + "%");
      $("#la-rpg").attr("style", "height:" + $scope.leagueSeasonAveragePct.rebsPg + "%");
      $("#cs-apg").attr("style", "height:" + $scope.currentSeasonStatsPct.assistsPg + "%");
      $("#la-apg").attr("style", "height:" + $scope.leagueSeasonAveragePct.assistsPg + "%");
      $("#cs-ftpct").attr("style", "height:" + $scope.currentSeasonStats.statAverage.ftpct + "%");
      $("#la-ftpct").attr("style", "height:" + $scope.leagueSeasonAverage.ftpct + "%");
      $("#cs-tppct").attr("style", "height:" + $scope.currentSeasonStats.statAverage.tppct + "%");
      $("#la-tppct").attr("style", "height:" + $scope.leagueSeasonAverage.tppct + "%")
    }
  })
}]);
"use strict";
sib.controller("PlayerSnapshotCtrl", ["$scope", "$location", "$timeout", "Page", "Site", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", function PlayerSnapshotCtrl($scope, $location, $timeout, Page, Site, StatsFeedFetcher, UrlParams, FEEDS_CONFIG) {
  $scope.tabbed = "season";
  $scope.paginate = false;
  $scope.currentpage = 1;
  $scope.predicate = "$index";
  fetchPlayerSnapshot();
  $scope.reverse = false;
  $scope.sortTable = function(string) {
    $scope.predicate = string;
    $scope.reverse = true
  };

  function fetchPlayerSnapshot() {
    StatsFeedFetcher.fetch(FEEDS_CONFIG.playerSnapshot, UrlParams.create(["playerCode"], {}, false, false)).then(function(data) {
      var playerSnapshotData = data;
      var players = [];
      for (var i = 0; i < playerSnapshotData.players.length; i++) {
        var player = playerSnapshotData.players[i];
        var teamStats = player.stats.currentSeasonTypeStat.currentSeasonTypePlayerTeamStats;
        var seasonStats = teamStats.length > 0 ? teamStats[teamStats.length - 1].statAverage : null;
        var dailyStats = player.stats.last5Games.length > 0 ? player.stats.last5Games[0].statTotal : null;
        var scopePlayer = {
          playerProfile: player.playerProfile,
          teamProfile: player.teamProfile,
          seasonStats: seasonStats,
          dailyStats: dailyStats
        };
        players.push(scopePlayer)
      }
      $scope.players = players
    });
    Page.setPermitLoading(false)
  }
  $scope.switchTab = function(tab) {
    switch (tab) {
      case 2:
        $scope.tabbed = "daily";
        break;
      case 1:
      default:
        $scope.tabbed = "season"
    }
  };
  if (Site.hasOwnProperty("playerSnapshotTab") && angular.isNumber(Site.playerSnapshotTab)) {
    $scope.switchTab(Site.playerSnapshotTab)
  }
  if (!$("html").hasClass("ie8")) {
    $scope.getWidth = function() {
      return $(window).width()
    };
    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
      $scope.window_width = newValue;
      if ($scope.window_width < 700) {
        $scope.paginate = true
      } else {
        $scope.paginate = false
      }
    });
    window.addEventListener("resize", function() {
      if (!$scope.$$phase) {
        $scope.$apply()
      }
    })
  }
}]);
"use strict";
sib.controller("SingleHistoricalPlayerStatsCtrl", ["$scope", "Page", "$location", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", function SingleHistoricalPlayerStatsCtrl($scope, Page, $location, StatsFeedFetcher, UrlParams, FEEDS_CONFIG) {
  Page.setTitle("_page.historicalPlayerStats");
  $scope.sectiontabbed = "stats";
  $scope.tabletabbed = "avg";
  $scope.currentpage = 1;
  $scope.paginate = false;
  $scope.predicate = "season";
  $scope.reverse = true;
  $scope.history = true;
  $scope.sortTable = function(string) {
    $scope.predicate = string;
    $scope.reverse = !$scope.reverse
  };

  function fetchPlayerStats() {
    var param = $location.path().substring(1);
    var paramObj = isNaN(param) ? {
      playerCode: param
    } : {
      playerId: param
    };
    StatsFeedFetcher.fetch(FEEDS_CONFIG.historicalPlayerStats, UrlParams.create([], paramObj, false, false)).then(function(data) {
      var playerData = data;
      $scope.player = playerData.player;
      $scope.careerAverage = $scope.player.stats.regularSeasonCareerStat.statAverage;
      StatsFeedFetcher.fetch(FEEDS_CONFIG.playerAwards, UrlParams.create([], {
        playerId: $scope.player.playerProfile.playerId
      }, false, false)).then(function(data) {
        var awardsData = data;
        var awards = {};
        if (!awardsData) {
          return
        }
        for (var i = 0; i < awardsData.PlayerAwards.length; i++) {
          var awardData = awardsData.PlayerAwards[i].Award[0];
          var awardCount = awardsData.PlayerAwards[i].Award[1].YearsAwarded.length;
          var icon = "";
          switch (awardData.SubType1) {
            case "Olympic":
              icon = "icon-globe";
              break;
            case "Kia Motors":
              icon = "icon-trophy";
              break;
            default:
              icon = "icon-star";
              break
          }
          var award = {
            name: awardData.AwardName,
            icon: icon,
            count: awardCount
          };
          awards[awardData.AwardName] = award
        }
        var awardsList = [];
        for (var award in awards) {
          awardsList.push(awards[award])
        }
        $scope.awards = awardsList
      })
    })
  }
  fetchPlayerStats();
  if (!$("html").hasClass("ie8")) {
    $scope.getWidth = function() {
      return $(window).width()
    };
    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
      $scope.window_width = newValue;
      if ($scope.window_width < 700) {
        $scope.paginate = true
      } else {
        $scope.paginate = false
      }
    });
    window.addEventListener("resize", function() {
      if (!$scope.$$phase) {
        $scope.$apply()
      }
    })
  }
  var maxPages = 4;
  var element = document.getElementById("single_player_stats");
  if (!$("html").hasClass("ie8") && element) {
    if (window.isAndroid) {
      Hammer(element).on("dragleft", function(event) {
        event.preventDefault();
        Hammer(element).trigger("swipeleft", event)
      });
      Hammer(element).on("dragright", function(event) {
        event.preventDefault();
        Hammer(element).trigger("swiperight", event)
      })
    }
    Hammer(element).on("swipeleft", function(event) {
      if ($scope.currentpage < maxPages) {
        $scope.currentpage++;
        if (!$scope.$$phase) {
          $scope.$apply()
        }
      }
    });
    Hammer(element).on("swiperight", function(event) {
      if ($scope.currentpage > 1) {
        $scope.currentpage--;
        if (!$scope.$$phase) {
          $scope.$apply()
        }
      }
    })
  }
}]);
"use strict";
sib.controller("SinglePlayerHotzoneCtrl", ["$scope", "$location", "Page", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", function SinglePlayerHotzoneCtrl($scope, $location, Page, StatsFeedFetcher, UrlParams, FEEDS_CONFIG) {
  Page.setTitle("_page.playerHotZones");
  $scope.activePlayerTab = "hotzones";
  $scope.chartTabbed = "full";
  $scope.player = {};
  $scope.hotzones = {};
  $scope.leagueSeasonAverage = {};
  $scope.hotzoneSeasonData = {};
  var hotzoneData = {};
  var leagueHotzoneData = {};
  var totalSplit = null;
  var last5Split = null;
  var selectSeason = "";
  $scope.allSeasons = [];
  $scope.hotZoneDataTotal = {};
  $scope.hotZoneDataLast5 = {};

  function fetchStats() {
    var param = $location.path().substring(1);
    var paramObj = isNaN(param) ? {
      playerCode: param
    } : {
      playerId: param
    };
    StatsFeedFetcher.fetch(FEEDS_CONFIG.playerHotzones, UrlParams.create([], paramObj, false, false)).then(function(data) {
      $scope.player = {
        playerProfile: data.profile,
        teamProfile: data.teamProfile,
        stats: {
          currentSeasonTypeStat: data.currentSeasonTypeStat
        }
      };
      hotzoneData = data;
      $scope.sectionTabbed = 1;
      selectSeason = hotzoneData.hotZone.seasons.length - 1;
      for (var i = 0; i < hotzoneData.hotZone.seasons[selectSeason].splits.length; i++) {
        if (hotzoneData.hotZone.seasons[selectSeason].splits[i].type == "Total") {
          totalSplit = i
        } else if (hotzoneData.hotZone.seasons[selectSeason].splits[i].type == "Last 5") {
          last5Split = i
        }
      }
      StatsFeedFetcher.fetch(FEEDS_CONFIG.leaguePlayerHotzones, UrlParams.create([], {}, false, false)).then(function(data) {
        if (totalSplit != null) {
          $scope.hotZoneDataTotal = hotzoneData.hotZone.seasons[selectSeason].splits[totalSplit]
        }
        if (last5Split != null) {
          $scope.hotZoneDataLast5 = hotzoneData.hotZone.seasons[selectSeason].splits[last5Split]
        }
        $scope.selectSeasonDes = hotzoneData.hotZone.seasons[selectSeason].season.typeDisplay;
        angular.forEach(hotzoneData.hotZone.seasons, function(item) {
          $scope.allSeasons.push(item.season)
        });
        leagueHotzoneData = data;
        $scope.leagueHotzoneData = leagueHotzoneData.hotZone.seasons[selectSeason].splits[totalSplit]
      })
    })
  }
  $scope.$watch("sectionTabbed", function(section) {
    if (typeof hotzoneData.hotZone != "undefined" && typeof leagueHotzoneData.hotZone != "undefined") {
      if (section == 0) {
        selectSeason = hotzoneData.hotZone.seasons.length - 2
      } else if (section == 1) {
        selectSeason = hotzoneData.hotZone.seasons.length - 1
      }
      $scope.hotZoneDataTotal = hotzoneData.hotZone.seasons[selectSeason].splits[totalSplit];
      $scope.hotZoneDataLast5 = hotzoneData.hotZone.seasons[selectSeason].splits[last5Split];
      $scope.selectSeasonDes = hotzoneData.hotZone.seasons[selectSeason].season.typeDisplay;
      $scope.leagueHotzoneData = leagueHotzoneData.hotZone.seasons[selectSeason].splits[totalSplit]
    }
  });
  fetchStats()
}]);
"use strict";
sib.controller("SinglePlayerNewsCtrl", ["$scope", "$location", "$timeout", "Page", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", "SimpleFeedFetcher", "Site", function SinglePlayerNewsCtrl($scope, $location, $timeout, Page, StatsFeedFetcher, UrlParams, FEEDS_CONFIG, SimpleFeedFetcher, Site) {
  Page.setTitle("_page.playerNews");
  $scope.activePlayerTab = "news";
  var param = $location.path().substring(1);

  function fetchPlayerStats() {
    if (Site.hasOwnProperty("useConsolidatedPlayerFeed") && Site.useConsolidatedPlayerFeed == true) {
      var paramObj = isNaN(param) ? {
        playerCode: param
      } : {
        playerId: param
      }
    } else {
      var paramObj = isNaN(param) ? {
        playerCode: param,
        ds: "simpleProfile"
      } : {
        playerId: param,
        ds: "simpleProfile"
      }
    }
    StatsFeedFetcher.fetch(FEEDS_CONFIG.playerStats, UrlParams.create([], paramObj, false, false)).then(function(data) {
      $scope.player = data.player;
      $scope.leagueSeasonAverage = data.leagueSeasonAverage
    })
  }
  fetchPlayerStats()
}]);
"use strict";
sib.controller("SinglePlayerProfileCtrl", ["$scope", "$location", "$timeout", "Page", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", "Site", function SinglePlayerProfileCtrl($scope, $location, $timeout, Page, StatsFeedFetcher, UrlParams, FEEDS_CONFIG, Site) {
  Page.setTitle("_page.playerProfile");
  $scope.activePlayerTab = "profile";

  function fetchPlayerStats() {
    var param = $location.path().substring(1);
    var paramObj = {};
    if (Site.hasOwnProperty("useConsolidatedPlayerFeed") && Site.useConsolidatedPlayerFeed == true) {
      var paramObj = isNaN(param) ? {
        playerCode: param
      } : {
        playerId: param
      }
    } else {
      var paramObj = isNaN(param) ? {
        playerCode: param,
        ds: "profile"
      } : {
        playerId: param,
        ds: "profile"
      }
    }
    StatsFeedFetcher.fetch(FEEDS_CONFIG.playerStats, UrlParams.create([], paramObj, false, false)).then(function(data) {
      var playerData = data;
      $scope.player = playerData.player;
      $scope.leagueSeasonAverage = playerData.leagueSeasonAverage;
      $scope.player.stats.lastFive = $scope.player.stats.seasonGames.slice(0, 5);
      for (var i = 0; i < $scope.player.stats.playerSplit.splits.length; i++) {
        if ($scope.player.stats.playerSplit.splits[i].type == "Last 5 Games") {
          $scope.player.stats.lastFiveTotal = $scope.player.stats.playerSplit.splits[i].statTotal;
          $scope.player.stats.lastFiveAverage = $scope.player.stats.playerSplit.splits[i].statAverage
        }
      }
    })
  }
  fetchPlayerStats()
}]);
"use strict";
sib.controller("SinglePlayerStatsCtrl", ["$scope", "$location", "Page", "FEEDS_CONFIG", function SinglePlayerStatsCtrl($scope, $location, Page, FEEDS_CONFIG) {
  Page.setTitle("_page.playerStats");
  $scope.currentpage = 1;
  $scope.paginate = false;
  $scope.statsTabletabbed = {
    careerStats: "avg",
    playoffStats: "avg"
  };
  $scope.statsPredicate = {
    careerStats: {
      avg: "season",
      total: "season"
    },
    playoffStats: {
      avg: "season",
      total: "season"
    },
    allStarStats: "season"
  };
  $scope.statsReverse = true;
  $scope.tabletabbed = "avg";
  $scope.splitsPredicate = {
    avg: "name",
    total: "name"
  };
  $scope.splitsReverse = false;
  $scope.predicate = "profile.utcMillis";
  $scope.reverse = true;
  $scope.statsSortTable = function(string, tableType) {
    if (tableType == "allStarStats") {
      $scope.statsPredicate[tableType] = string
    } else {
      $scope.statsPredicate[tableType][$scope.statsTabletabbed[tableType]] = string
    }
  };
  $scope.sortTable = function(string) {
    if ($scope.sectiontabbed == "seasonsplits") {
      $scope.splitsPredicate[$scope.tabletabbed] = string;
      if (string != "name") {
        $scope.splitsReverse = true
      } else {
        $scope.splitsReverse = false
      }
    } else {
      $scope.predicate = string
    }
  };
  if (!$("html").hasClass("ie8")) {
    $scope.getWidth = function() {
      return $(window).width()
    };
    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
      $scope.window_width = newValue;
      if ($scope.window_width < 700) {
        $scope.paginate = true
      } else {
        $scope.paginate = false
      }
    });
    window.addEventListener("resize", function() {
      if (!$scope.$$phase) {
        $scope.$apply()
      }
    })
  }
  $scope.showfilters = false;
  $scope.filtertoggle = function() {
    if ($scope.showfilters == false) {
      $scope.showfilters = true
    } else {
      $scope.showfilters = false
    }
  };
  var maxPages = 4;
  var element = document.getElementById("single_player_stats");
  if (!$("html").hasClass("ie8") && element) {
    if (window.isAndroid) {
      Hammer(element).on("dragleft", function(event) {
        event.preventDefault();
        Hammer(element).trigger("swipeleft", event)
      });
      Hammer(element).on("dragright", function(event) {
        event.preventDefault();
        Hammer(element).trigger("swiperight", event)
      })
    }
    Hammer(element).on("swipeleft", function(event) {
      if ($scope.currentpage < maxPages) {
        $scope.currentpage++;
        if (!$scope.$$phase) {
          $scope.$apply()
        }
      }
    });
    Hammer(element).on("swiperight", function(event) {
      if ($scope.currentpage > 1) {
        $scope.currentpage--;
        if (!$scope.$$phase) {
          $scope.$apply()
        }
      }
    })
  }
}]);
"use strict";
sib.controller("SinglePlayerStatsPageCtrl", ["$scope", "$location", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", "Site", function SinglePlayerStatsPageCtrl($scope, $location, StatsFeedFetcher, UrlParams, FEEDS_CONFIG, Site) {
  $scope.activePlayerTab = "stats";
  $scope.sectiontabbed = "stats";
  $scope.lastFiveTotal = {};
  $scope.lastFiveAverage = {};

  function fetchPlayerStats() {
    var param = $location.path().substring(1);
    var paramObj = isNaN(param) ? {
      playerCode: param
    } : {
      playerId: param
    };
    if (!(Site.hasOwnProperty("useConsolidatedPlayerFeed") && Site.useConsolidatedPlayerFeed == true)) {
      if ($scope.sectiontabbed == "stats") {
        paramObj.ds = "career"
      } else if ($scope.sectiontabbed == "seasonsplits") {
        paramObj.ds = "splits"
      } else if ($scope.sectiontabbed == "gamelog") {
        paramObj.ds = "gamelog"
      }
    }
    StatsFeedFetcher.fetch(FEEDS_CONFIG.playerStats, UrlParams.create([], paramObj, false, false)).then(function(data) {
      var playerData = data;
      $scope.player = playerData.player;
      $scope.leagueSeasonAverage = playerData.leagueSeasonAverage;
      $scope.player.stats.lastFive = $scope.player.stats.seasonGames.slice(-5);
      for (var i = 0; i < $scope.player.stats.playerSplit.splits.length; i++) {
        if ($scope.player.stats.playerSplit.splits[i].type == "Last 5 Games") {
          $scope.player.stats.lastFiveTotal = $scope.player.stats.playerSplit.splits[i].statTotal;
          $scope.player.stats.lastFiveAverage = $scope.player.stats.playerSplit.splits[i].statAverage
        }
      }
    })
  }
  $scope.$watch(function() {
    return $scope.sectiontabbed
  }, function() {
    fetchPlayerStats()
  })
}]);
sib.controller("PlayoffBracketCtrl", ["$scope", "$rootScope", "$filter", "$location", "Page", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", function PlayoffBracketCtrl($scope, $rootScope, $filter, $location, Page, StatsFeedFetcher, UrlParams, FEEDS_CONFIG) {
  "use strict";
  var westGroup, eastGroup, finalsGroup;
  var rounds = [];
  $scope.yearDisplay = "";

  function selectRoundNo(roundNo) {
    $scope.selectedRound = $filter("filter")($scope.rounds, {
      value: roundNo
    })[0];
    if (!$scope.selectedRound) {
      $scope.selectedRound = {
        name: "unknown",
        value: roundNo,
        hasData: false
      }
    }
  }
  $scope.$watch("selectedRound", onRoundSelect);
  $scope.selectRoundNo = selectRoundNo;

  function addRounds(group) {
    if (group) {
      for (var i = 0; i < group.rounds.length; i++) {
        var r = group.rounds[i];
        rounds.push({
          name: r.roundName,
          value: r.roundNo,
          hasData: true
        })
      }
    }
  }

  function onRoundSelect() {
    if (!$scope.seriesData || !$scope.seriesData.groups) {
      return
    }
    if (!$scope.selectedRound.hasData) {
      $scope.westSeries = null;
      $scope.eastSeries = null;
      $scope.finalsMatchup = null
    } else {
      var selectedRoundNo = $scope.selectedRound.value;
      if (selectedRoundNo >= 1 && selectedRoundNo <= 3) {
        $scope.westSeries = westGroup.rounds[selectedRoundNo - 1];
        $scope.eastSeries = eastGroup.rounds[selectedRoundNo - 1]
      } else if (selectedRoundNo == 4) {
        if (finalsGroup) {
          $scope.finalsMatchup = finalsGroup.rounds[0].series[0]
        } else {
          $scope.finalsMatchup = null
        }
      }
    }
    $scope.modelReady = true
  }

  function setSecondRoundPosition(group, prefix) {
    if (group.rounds.length > 1) {
      if (group.rounds[1].series) {
        angular.forEach(group.rounds[1].series, function(series, key) {
          if (series.seriesNo == 1 || series.seriesNo == 3) {
            $scope[prefix + "SecondRoundTop"] = series
          } else {
            $scope[prefix + "SecondRoundBottom"] = series
          }
        })
      }
    }
  }
  StatsFeedFetcher.fetch(FEEDS_CONFIG.playoffBracket, UrlParams.create(["season"], {}, false, false)).then(function(data) {
    var playoffBracketData = data;
    $scope.playoffBracketData = data;
    $scope.seriesData = playoffBracketData;
    $scope.yearDisplay = data.season.yearDisplay;
    if ($scope.yearDisplay.indexOf("-") > -1) {
      $scope.yearDisplay = $scope.yearDisplay.split("-")[1].trim()
    }
    $scope.seasonYear = data.season.year;
    eastGroup = $filter("filter")($scope.seriesData.groups, {
      groupName: "Eastern"
    })[0];
    setSecondRoundPosition(eastGroup, "east");
    if (eastGroup && eastGroup.rounds.length == playoffBracketData.latestRoundNo) {
      addRounds(eastGroup)
    }
    westGroup = $filter("filter")($scope.seriesData.groups, {
      groupName: "Western"
    })[0];
    setSecondRoundPosition(westGroup, "west");
    if (westGroup && rounds.length == 0) {
      addRounds(westGroup)
    }
    finalsGroup = $filter("filter")($scope.seriesData.groups, {
      groupName: "Finals"
    })[0];
    addRounds(finalsGroup);
    $scope.rounds = rounds;
    selectRoundNo($scope.rounds[Number(playoffBracketData.lowestActiveRoundNo) - 1].value);
    $scope.westGroup = westGroup;
    $scope.eastGroup = eastGroup;
    $scope.finalsGroup = finalsGroup;
    $scope.bracketLoaded = true
  })
}]);
"use strict";
sib.controller("PlayoffExpandedGameSnapshotController", ["$scope", function PlayoffExpandedGameSnapshotCtrl($scope) {
  var homeTeam = $scope.game.teamOne.isHome === "true" ? $scope.game.teamOne : $scope.game.teamTwo;
  var awayTeam = $scope.game.teamOne.isHome === "false" ? $scope.game.teamOne : $scope.game.teamTwo;
  var homeTeamRecord = $scope.game.teamOne.isHome === "true" ? $scope.$parent.teamOneRecord : $scope.$parent.teamTwoRecord;
  var awayTeamRecord = $scope.game.teamOne.isHome === "false" ? $scope.$parent.teamOneRecord : $scope.$parent.teamTwoRecord;
  $scope.homeTeam = homeTeam;
  $scope.awayTeam = awayTeam;
  $scope.homeTeamRecord = homeTeamRecord;
  $scope.awayTeamRecord = awayTeamRecord
}]);
"use strict";
sib.controller("PlayoffListCtrl", ["$scope", "Page", "$location", "FEEDS_CONFIG", function PlayoffListCtrl($scope, Page, $location, FEEDS_CONFIG) {
  Page.setTitle("_page.playoffs");
  if (!$("html").hasClass("ie8")) {
    $scope.getWidth = function() {
      return $(window).width()
    };
    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
      $scope.window_width = newValue;
      if ($scope.window_width < 700) {
        $scope.paginate = true
      } else {
        $scope.paginate = false
      }
    });
    window.addEventListener("resize", function() {
      if (!$scope.$$phase) {
        $scope.$apply()
      }
    })
  }
}]);
"use strict";
sib.controller("PlayoffPictureCtrl", ["$scope", "Page", "$location", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", function PlayoffPictureCtrl($scope, Page, $location, StatsFeedFetcher, UrlParams, FEEDS_CONFIG) {
  Page.setTitle("_page.playoffPicture");
  $scope.sectiontabbed = "matchups";
  StatsFeedFetcher.fetch(FEEDS_CONFIG.playoffPictureMatchup, UrlParams.create(["season"], {}, false, false)).then(function(data) {
    $scope.pictureMatchup = data
  })
}]);
"use strict";
sib.controller("PlayoffsCtrl", ["$scope", "$location", "Page", "$timeout", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", function PlayoffsCtrl($scope, $location, Page, $timeout, StatsFeedFetcher, UrlParams, FEEDS_CONFIG) {
  Page.setTitle("_page.playoffs");
  $scope.tabbed = "last";
  var defaultCategory = "points";
  var category = defaultCategory;
  $scope.showLeaders = false;
  var seasonLeadingPlayers = {};
  $scope.starPlayer = {};
  $scope.players = [];
  $scope.setLastCategory = function(category) {
    $scope.category = category;
    $scope.starPlayer = {};
    $scope.players = {};
    var getSeason = $scope.seasonYear || "2014";
    if (!seasonLeadingPlayers[category]) {
      Page.setPermitLoading(false);
      var feedParams = UrlParams.create([], {
        statType: category,
        qualified: true,
        maxRecordsPerPage: 5,
        total: "perGame",
        seasonType: 4,
        season: getSeason
      }, false, false);
      StatsFeedFetcher.fetch(FEEDS_CONFIG.leaguePlayerStats, feedParams).then(function(data) {
        seasonLeadingPlayers[category] = data.players;
        $scope.starPlayer = seasonLeadingPlayers[category][0];
        if (typeof $scope.starPlayer != "undefined") {
          $scope.showLeaders = true;
          $scope.players = seasonLeadingPlayers[category].slice(1, 5)
        }
        Page.setPermitLoading(true)
      })
    } else {
      $scope.starPlayer = seasonLeadingPlayers[category][0];
      $scope.players = seasonLeadingPlayers[category].slice(1, 5)
    }
    return false
  };
  $scope.$watch("playoffBracketData", function(playoffBracketData) {
    if (playoffBracketData) {
      var data = $scope.playoffBracketData;
      if (data.season.isCurrent && data.season.scheduleSeasonType == 4 && data.season.statsSeasonType == 2) {
        $scope.showLeaders = false
      } else {
        $scope.setLastCategory(category)
      }
    }
  })
}]);
"use strict";
sib.controller("PlayoffSeriesCtrl", ["$scope", "$location", "$timeout", "StatsFeedFetcher", "UrlParams", "Page", "FEEDS_CONFIG", function PlayoffSeriesCtrl($scope, $location, $timeout, StatsFeedFetcher, UrlParams, Page, FEEDS_CONFIG) {
  Page.setTitle("_page.playoffSeries");
  var seriesRoundNo = 4;
  var seriesSeriesNo = 1;
  var seriesSeason;
  var param = {};
  var updateGameIndex = 0;
  var updateInterval = FEEDS_CONFIG.liveFeedUpdateInterval;
  $scope.showLeaders = false;
  var locationData = $location.path().replace(/(^\/|\/$)/, "").split("/");
  if (locationData[0] !== undefined) {
    param.roundNo = locationData[0]
  }
  if (locationData[1] !== undefined) {
    param.seriesNo = locationData[1]
  }
  if (locationData[2] !== undefined) {
    param.season = locationData[2]
  } else {
    param.season = 2012
  }
  StatsFeedFetcher.fetch(FEEDS_CONFIG.playoffSeries, UrlParams.create(["roundNo", "seriesNo"], param, true, false)).then(function(data) {
    $scope.seriesData = data;
    if (FEEDS_CONFIG.debug) console.log($scope.seriesData);
    for (var i = 0; i < $scope.seriesData.group.round.series.games.length; i++) {
      $scope.seriesData.group.round.series.games[i].boxscore.homeScore = Number($scope.seriesData.group.round.series.games[i].boxscore.homeScore);
      $scope.seriesData.group.round.series.games[i].boxscore.awayScore = Number($scope.seriesData.group.round.series.games[i].boxscore.awayScore)
    }
    if ($scope.seriesData) {
      var teamOne = $scope.seriesData.group.round.series.teamOne;
      var teamTwo = $scope.seriesData.group.round.series.teamTwo;
      $scope.teamOneRecord = teamOne.standing.wins + " - " + teamOne.standing.losses;
      $scope.teamTwoRecord = teamTwo.standing.wins + " - " + teamTwo.standing.losses;
      $scope.showLeaders = teamOne.ppgLeader != null && teamOne.ppgLeader.pointsPg > 0
    }
    getGameDayStatus()
  });

  function getGameDayStatus() {
    StatsFeedFetcher.fetch(FEEDS_CONFIG.gameDayStatus, UrlParams.create([], {}, false, true)).then(function(data) {
      Page.showLoading(false);
      var gameDates = data.gameDates[0];
      $scope.dayStatus = gameDates.dayStatus;
      if ($scope.dayStatus == "1" || $scope.dayStatus == "2") {
        var games = gameDates.games;
        var todayGames = [];
        angular.forEach(games, function(game) {
          if (game.status == "1" || game.status == "2") {
            todayGames.push(game.gameId)
          }
        });
        var seriesGames = $scope.seriesData.group.round.series.games;
        for (var i = 0; i < seriesGames.length; i++) {
          if (todayGames.indexOf(seriesGames[i].profile.gameId) > -1) {
            getSeriesLive();
            break
          } else {
            updateGameIndex++
          }
        }
      }
    })
  }

  function getSeriesLive() {
    StatsFeedFetcher.fetch(FEEDS_CONFIG.playoffSerieslive, UrlParams.create(["roundNo", "seriesNo"], param, true, false)).then(function(data) {
      var serieslive = data.group.round.series.game;
      if (serieslive) {
        $scope.seriesData.group.round.series.games[updateGameIndex].boxscore = serieslive.boxscore;
        $scope.seriesData.group.round.series.games[updateGameIndex].profile = serieslive.profile;
        $scope.seriesData.group.round.series.games[updateGameIndex].teamOne = serieslive.teamOne;
        $scope.seriesData.group.round.series.games[updateGameIndex].teamTwo = serieslive.teamTwo
      }
      if (!serieslive || serieslive.boxscore.status == "2") {
        $timeout(function() {
          getSeriesLive()
        }, updateInterval)
      }
    })
  }
}]);
"use strict";
sib.controller("PlayoffSeriesSnapshotCtrl", ["$scope", "$location", "FEEDS_CONFIG", function PlayoffSeriesSnapshotCtrl($scope, $location, FEEDS_CONFIG) {
  $scope.statspage = 1;
  $scope.leaderspage = 1;
  $scope.paginate = false;
  $scope.feature = $scope.finals.rounds[0].series[0].featureGame;
  $scope.games = [].concat($scope.finals.rounds[0].series[0].previousGames, [$scope.feature], $scope.finals.rounds[0].series[0].upcomingGames).filter(function(n) {
    return n != null
  });
  if (!$("html").hasClass("ie8")) {
    $scope.getWidth = function() {
      return $(window).width()
    };
    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
      $scope.window_width = newValue;
      if ($scope.window_width < 700) {
        $scope.paginate = true
      } else {
        $scope.paginate = false
      }
    });
    window.addEventListener("resize", function() {
      if (!$scope.$$phase) {
        $scope.$apply()
      }
    })
  }
  var maxPages = 3;
  var element = document.getElementById("sib-series-snapshot-playoff-final-leaders");
  if (!$("html").hasClass("ie8") && element) {
    if (window.isAndroid) {
      Hammer(element).on("dragleft", function(event) {
        event.preventDefault();
        Hammer(element).trigger("swipeleft", event)
      });
      Hammer(element).on("dragright", function(event) {
        event.preventDefault();
        Hammer(element).trigger("swiperight", event)
      })
    }
    Hammer(element).on("swipeleft", function(event) {
      if ($scope.currentpage < maxPages) {
        $scope.currentpage++;
        if (!$scope.$$phase) {
          $scope.$apply()
        }
      }
    });
    Hammer(element).on("swiperight", function(event) {
      if ($scope.currentpage > 1) {
        $scope.currentpage--;
        if (!$scope.$$phase) {
          $scope.$apply()
        }
      }
    })
  }
}]);
"use strict";
sib.controller("PlayoffSeriesSnapshotHalfCtrl", ["$scope", "$location", "FEEDS_CONFIG", function PlayoffSeriesSnapshotHalfCtrl($scope, $location, FEEDS_CONFIG) {
  $scope.showLeaders = false;
  $scope.statspage = 1;
  $scope.leaderspage = 1;
  $scope.paginate = false;
  if (FEEDS_CONFIG.debug) console.log("Round name: " + $scope.round.roundName + " team one: " + $scope.series.teamOne.profile.abbr + " team two: " + $scope.series.teamTwo.profile.abbr);
  $scope.feature = $scope.series.featureGame;
  $scope.games = [].concat($scope.series.previousGames, [$scope.feature], $scope.series.upcomingGames).filter(function(n) {
    return n != null
  });
  $scope.showGameStream = false;
  for (var i = 0; i < $scope.games.length; i++) {
    $scope.showGameStream = false
  }
  if (!$("html").hasClass("ie8")) {
    $scope.getWidth = function() {
      return $(window).width()
    };
    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
      $scope.window_width = newValue;
      if ($scope.window_width < 700) {
        $scope.paginate = true
      } else {
        $scope.paginate = false
      }
    });
    window.addEventListener("resize", function() {
      if (!$scope.$$phase) {
        $scope.$apply()
      }
    })
  }
  var maxPages = 3;
  var elements = $(".sib-series-snapshot-playoff-half-leaders");
  if (!$("html").hasClass("ie8") && $(".sib-series-snapshot-playoff-half-leaders").length > 0) {
    for (var i = 0; i < elements.length; i++) {
      if (window.isAndroid) {
        Hammer(elements[i]).on("dragleft", function(event) {
          event.preventDefault();
          Hammer(elements[i]).trigger("swipeleft", event)
        });
        Hammer(elements[i]).on("dragright", function(event) {
          event.preventDefault();
          Hammer(elements[i]).trigger("swiperight", event)
        })
      }
      Hammer(elements[i]).on("swipeleft", function(event) {
        if ($scope.currentpage < maxPages) {
          $scope.currentpage++;
          if (!$scope.$$phase) {
            $scope.$apply()
          }
        }
      });
      Hammer(elements[i]).on("swiperight", function(event) {
        if ($scope.currentpage > 1) {
          $scope.currentpage--;
          if (!$scope.$$phase) {
            $scope.$apply()
          }
        }
      })
    }
  }
}]);
"use strict";
sib.controller("PlayoffsMatchUpCtrl", ["$scope", "$location", "Page", "$timeout", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", function PlayoffsCtrl($scope, $location, Page, $timeout, StatsFeedFetcher, UrlParams, FEEDS_CONFIG) {
  Page.setTitle("playoffMatchups.fulltitle");
  $scope.season = "";
  $scope.summaryLoaded = false;
  $scope.showData = [];
  $scope.finalIndex = 3;
  $scope.basedGroup = {};
  $scope.finals = null;
  var updateInterval = FEEDS_CONFIG.liveFeedUpdateInterval;
  $scope.clickHeader = function(roundIndex) {
    if ($scope.showData[roundIndex] == false) {
      $scope.showData[roundIndex] = true
    } else {
      $scope.showData[roundIndex] = false
    }
  };
  StatsFeedFetcher.fetch(FEEDS_CONFIG.playoffSummary, UrlParams.create(["season"], {}, true, false)).then(function(data) {
    var summaryData = data;
    angular.forEach(summaryData.groups, function(group) {
      if (group.groupName == "Finals") {
        $scope.finals = group
      } else if (group.groupName == "Eastern") {
        $scope.eastern = group
      } else if (group.groupName == "Western") {
        $scope.western = group
      }
    });
    $scope.summaryData = summaryData;
    $scope.season = $scope.summaryData.season.year;
    if ($scope.eastern.rounds.length > $scope.western.rounds.length) {
      $scope.basedGroup = $scope.eastern
    } else {
      $scope.basedGroup = $scope.western
    }
    for (var i = 0; i < $scope.basedGroup.rounds.length; i++) {
      $scope.showData[i] = false
    }
    if ($scope.finals) {
      $scope.showData[3] = true
    }
    if (!$scope.finals) {
      var showIndex;
      if ($scope.eastern.rounds.length > $scope.western.rounds.length) {
        showIndex = $scope.eastern.rounds.length - $scope.western.rounds.length
      } else {
        showIndex = $scope.western.rounds.length - $scope.eastern.rounds.length
      }
      $scope.showData[showIndex] = true
    }
    getGameDayStatus();
    $scope.summaryLoaded = true
  });

  function getGameDayStatus() {
    StatsFeedFetcher.fetch(FEEDS_CONFIG.gameDayStatus, UrlParams.create([], {}, false, true)).then(function(data) {
      Page.showLoading(false);
      $scope.dayStatus = data.gameDates[0].dayStatus;
      if ($scope.dayStatus == "1") {
        $timeout(function() {
          getGameDayStatus()
        }, updateInterval)
      } else if ($scope.dayStatus == "2") {
        getSummarylive()
      }
    })
  }

  function getSummarylive() {
    StatsFeedFetcher.fetch(FEEDS_CONFIG.playoffSummarylive, UrlParams.create(["season"], {}, true, false)).then(function(data) {
      Page.showLoading(false);
      var summarylive = data;
      var groupName;
      var roundNo;
      var seriesNo;
      var game;
      var gameLive = false;
      angular.forEach(summarylive.groups, function(group) {
        groupName = group.groupName;
        angular.forEach(group.rounds, function(round) {
          roundNo = round.roundNo;
          angular.forEach(round.series, function(series) {
            seriesNo = series.seriesNo;
            var game = series.inProgressGame;
            if (game.boxscore.status == "2" && !gameLive) {
              gameLive = true
            }
            angular.forEach($scope.summaryData.groups, function(summaryGroup) {
              if (group.groupName == groupName) {
                angular.forEach(summaryGroup.rounds, function(summaryRound) {
                  if (summaryRound.roundNo == roundNo) {
                    angular.forEach(summaryRound.series, function(summarySeries) {
                      if (summarySeries.featureGame.profile.gameId == game.profile.gameId) {
                        summarySeries.featureGame.boxscore = game.boxscore;
                        summarySeries.featureGame.teamOne = game.teamOne;
                        summarySeries.featureGame.teamTwo = game.teamTwo;
                        summarySeries.featureGame.profile = game.profile
                      }
                    })
                  }
                })
              }
            })
          })
        })
      });
      if (gameLive) {
        $timeout(function() {
          getSummarylive()
        }, updateInterval)
      }
    })
  }
}]);
"use strict";
sib.controller("BroadcasterScheduleHeaderCtrl", ["$scope", "$location", "FEEDS_CONFIG", "Site", function ScheduleHeaderCtrl($scope, $location, FEEDS_CONFIG, Site) {
  if (Site.hasOwnProperty("expandFilterToggle") && Site.expandFilterToggle) {
    $scope.showfilters = Site.expandFilterToggle
  } else {
    $scope.showfilters = false
  }
  $scope.filtertoggle = function() {
    $scope.showfilters = !$scope.showfilters
  }
}]);
"use strict";
sib.controller("BroadcasterSchedulePageCtrl", ["$scope", "$filter", "$location", "Page", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", function SchedulePageCtrl($scope, $filter, $location, Page, StatsFeedFetcher, UrlParams, FEEDS_CONFIG) {
  Page.setTitle("_page.broadcasterSchedule");
  $scope.showUpcoming = true;
  $scope.currentpage = 1;
  $scope.paginate = false;
  $scope.moduleLoading = true;
  $scope.filterData = {};
  $scope.selectedFilters = {};
  getBroadcasterForms();

  function getBroadcasterForms() {
    StatsFeedFetcher.fetch(FEEDS_CONFIG.broadcasterScheduleForm, UrlParams.create([], {}, true, true)).then(onBroadcasterScheduleFormFeedData)
  }

  function onBroadcasterScheduleFormFeedData(data) {
    var forms = data;
    $scope.filterData.liveChannels = $.grep(forms.fields, function(n) {
      return n.name == "liveChannel"
    })[0].fieldValues;
    $scope.filterData.liveChannels[0].display = $filter("i18next")("broadcasterSchedulePage.allChannels");
    $scope.selectedFilters.liveChannel = $scope.filterData.liveChannels[0];
    $scope.filterData.teams = $.grep(forms.fields, function(n) {
      return n.name == "team"
    })[0].fieldValues;
    $scope.filterData.teams[0].display = $filter("i18next")("broadcasterSchedulePage.allTeams");
    $scope.selectedFilters.team = $scope.filterData.teams[0];
    $scope.filterData.broadcasterTypes = $.grep(forms.fields, function(n) {
      return n.name == "broadcasterType"
    })[0].fieldValues;
    $scope.selectedFilters.broadcasterType = $scope.filterData.broadcasterTypes[0];
    var obj = {
      liveChannel: $scope.selectedFilters.liveChannel.value,
      showUpcoming: $scope.showUpcoming,
      teamCode: $scope.selectedFilters.team.value,
      broadcasterType: $scope.selectedFilters.broadcasterType.value
    };
    getFeed(obj)
  }

  function getFeed(obj) {
    $scope.moduleLoading = true;
    if (FEEDS_CONFIG.debug) {
      console.log(obj)
    }
    StatsFeedFetcher.fetch(FEEDS_CONFIG.broadcasterSchedule, UrlParams.create([], obj, true, true)).then(onGetFeedData)
  }

  function onGetFeedData(data) {
    Page.showLoading(false);
    $scope.moduleLoading = false;
    $scope.schedule = data;
    if ($scope.schedule.dates.length < 1) {
      $scope.noGames = true
    } else {
      $scope.noGames = false
    }
    $scope.activeDate = $scope.schedule.utcMillis;
    parseGameData($scope.schedule)
  }

  function parseGameData(schedule) {
    var i;

    function eachDates(i, date) {
      $.each(date.games, eachGame)
    }

    function eachGame(i, game) {
      game.btypes = {
        national: [],
        local: []
      };
      for (i = 0; i < game.broadcasters.length; i += 1) {
        switch (game.broadcasters[i].type) {
          case "National":
            game.btypes.national.push(game.broadcasters[i]);
            break;
          case "Local":
            game.btypes.local.push(game.broadcasters[i]);
            break
        }
      }
    }
    $.each(schedule.dates, eachDates)
  }
  $scope.onChannelSelect = function() {
    $scope.selectedFilters.team = $scope.filterData.teams[0];
    $scope.selectedFilters.broadcasterType = $scope.filterData.broadcasterTypes[0];
    var obj = {
      liveChannel: $scope.selectedFilters.liveChannel.value,
      showUpcoming: true,
      teamCode: $scope.selectedFilters.team.value,
      broadcasterType: $scope.selectedFilters.broadcasterType.value
    };
    getFeed(obj)
  };
  $scope.onbroadcasterTypeSelect = function() {
    $scope.selectedFilters.liveChannel = $scope.filterData.liveChannels[0];
    $scope.selectedFilters.team = $scope.filterData.teams[0];
    var obj = {
      liveChannel: $scope.selectedFilters.liveChannel.value,
      showUpcoming: true,
      teamCode: $scope.selectedFilters.team.value,
      broadcasterType: $scope.selectedFilters.broadcasterType.value
    };
    getFeed(obj)
  };
  $scope.onTeamSelect = function() {
    $scope.selectedFilters.liveChannel = $scope.filterData.liveChannels[0];
    $scope.selectedFilters.broadcasterType = $scope.filterData.broadcasterTypes[0];
    var obj = {
      liveChannel: $scope.selectedFilters.liveChannel.value,
      showUpcoming: true,
      teamCode: $scope.selectedFilters.team.value,
      broadcasterType: $scope.selectedFilters.broadcasterType.value
    };
    getFeed(obj)
  };
  if (!$("html").hasClass("ie8")) {
    $scope.getWidth = function() {
      return $(window).width()
    };
    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
      $scope.window_width = newValue;
      if ($scope.window_width < 700) {
        $scope.paginate = true
      } else {
        $scope.paginate = false
      }
    });
    window.addEventListener("resize", function() {
      if (!$scope.$$phase) {
        $scope.$apply()
      }
    })
  }
  var maxPages = 3;
  var element = document.getElementById("sib-league-schedule");
  if (!$("html").hasClass("ie8") && element) {
    if (window.isAndroid) {
      Hammer(element).on("dragleft", function(event) {
        event.preventDefault();
        Hammer(element).trigger("swipeleft", event)
      });
      Hammer(element).on("dragright", function(event) {
        event.preventDefault();
        Hammer(element).trigger("swiperight", event)
      })
    }
    Hammer(element).on("swipeleft", function(event) {
      if ($scope.currentpage < maxPages) {
        $scope.currentpage++;
        if (!$scope.$$phase) {
          $scope.$apply()
        }
      }
    });
    Hammer(element).on("swiperight", function(event) {
      if ($scope.currentpage > 1) {
        $scope.currentpage--;
        if (!$scope.$$phase) {
          $scope.$apply()
        }
      }
    })
  }
}]);
"use strict";
sib.controller("CurrentSeasonStatsCtrl", ["$scope", "$location", "FEEDS_CONFIG", function CurrentSeasonStatsCtrl($scope, $location, FEEDS_CONFIG) {
  $scope.currentpage = 1;
  $scope.paginate = false;
  if (!$("html").hasClass("ie8")) {
    $scope.getWidth = function() {
      return $(window).width()
    };
    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
      $scope.window_width = newValue;
      if ($scope.window_width < 700) {
        $scope.paginate = true
      } else {
        $scope.paginate = false
      }
    });
    window.addEventListener("resize", function() {
      if (!$scope.$$phase) {
        $scope.$apply()
      }
    })
  }
  var maxPages = 4;
  var element = document.getElementById("sib-player-season-stats");
  if (!$("html").hasClass("ie8") && element) {
    if (window.isAndroid) {
      Hammer(element).on("dragleft", function(event) {
        event.preventDefault();
        Hammer(element).trigger("swipeleft", event)
      });
      Hammer(element).on("dragright", function(event) {
        event.preventDefault();
        Hammer(element).trigger("swiperight", event)
      })
    }
    Hammer(element).on("swipeleft", function(event) {
      event.preventDefault();
      if ($scope.currentpage < maxPages) {
        $scope.currentpage++;
        if (!$scope.$$phase) {
          $scope.$apply()
        }
      }
    });
    Hammer(element).on("swiperight", function(event) {
      event.preventDefault();
      if ($scope.currentpage > 1) {
        $scope.currentpage--;
        if (!$scope.$$phase) {
          $scope.$apply()
        }
      }
    })
  }
}]);
"use strict";
sib.controller("ScheduleHeaderCtrl", ["$scope", "$location", "FEEDS_CONFIG", function ScheduleHeaderCtrl($scope, $location, FEEDS_CONFIG) {
  $scope.contentDrop = "none";
  $scope.clickcalendar = function() {
    if ($scope.contentDrop == "calendar") {
      $scope.contentDrop = "none"
    } else {
      $scope.contentDrop = "calendar"
    }
  };
  $scope.clickteam = function() {
    if ($scope.contentDrop == "teams") {
      $scope.contentDrop = "none"
    } else {
      $scope.contentDrop = "teams"
    }
  }
}]);
"use strict";
sib.controller("SchedulePageCtrl", ["$scope", "$filter", "$location", "Page", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", function SchedulePageCtrl($scope, $filter, $location, Page, StatsFeedFetcher, UrlParams, FEEDS_CONFIG) {
  Page.setTitle("_page.schedule");
  $scope.currentpage = 1;
  $scope.paginate = false;
  $scope.moduleLoading = true;
  $scope.splits = [];
  var feedNumDays;
  $scope.splitGame = function() {
    var splitsData = [];
    var finished = [];
    var upcoming = [];
    angular.forEach($scope.schedule.dates, function(date) {
      var upgames = [];
      var endgames = [];
      angular.forEach(date.games, function(game) {
        if (game.boxscore.status <= 2) {
          upgames.push(game)
        } else {
          endgames.push(game)
        }
      });
      if (endgames.length > 0) {
        var endData = {
          games: endgames,
          gameCount: endgames.length,
          utcMillis: date.utcMillis
        };
        finished.push(endData)
      }
      if (upgames.length > 0) {
        var upData = {
          games: upgames,
          gameCount: upgames.length,
          utcMillis: date.utcMillis
        };
        upcoming.push(upData)
      }
    });
    if (upcoming.length > 0) {
      var group1 = {
        dates: upcoming,
        status: "Incomplete"
      };
      splitsData.push(group1)
    }
    if (finished.length > 0) {
      var group2 = {
        dates: finished,
        status: "complete"
      };
      splitsData.push(group2)
    }
    if (splitsData.length == 0) {
      splitsData = [{}]
    }
    $scope.splits = splitsData
  };

  function getSchedule(param) {
    StatsFeedFetcher.fetch(FEEDS_CONFIG.schedule, UrlParams.create([], param, true, true)).then(function(data) {
      Page.showLoading(false);
      $scope.moduleLoading = false;
      $scope.schedule = data;
      if ($scope.schedule.dates.length < 1) {
        $scope.noGames = true
      } else {
        $scope.noGames = false
      }
      $scope.activeDate = new Date(Number($scope.schedule.utcMillis));
      $scope.activeMonth = $scope.activeDate.getMonth();
      $scope.activeSeason = $scope.activeDate.getFullYear();
      if ($scope.scheduleType == "days") {
        $scope.startDate = new Date($scope.activeDate);
        $scope.endDate = new Date($scope.activeDate).setDate($scope.activeDate.getDate() + Number(feedNumDays - 1))
      }
      $scope.splitGame()
    })
  }

  function onPageLocationChange() {
    $scope.moduleLoading = true;
    var param = {};
    if (/^\/\d{4}-([1-9]|0[1-9]|1[012])-([1-9]|0[1-9]|1[0-9]|2[0-9]|3[01])$/.test($location.path())) {
      if (FEEDS_CONFIG.debug) {
        console.log("Day View")
      }
      $scope.scheduleType = "day";
      var urlDate = new Date($location.path().replace(/-/g, "/"));
      var feedDate = $filter("date")(urlDate, "yyyy-MM-dd");
      if (FEEDS_CONFIG.debug) console.log(feedDate);
      param = {
        gameDate: feedDate
      }
    } else {
      if (!$location.path().length) {
        if (FEEDS_CONFIG.debug) {
          console.log("Default Day View")
        }
        $scope.scheduleType = "day"
      } else if (/^\/(0[1-9]|1[012])[\/]\d{4}$/.test($location.path())) {
        if (FEEDS_CONFIG.debug) {
          console.log("Month View")
        }
        $scope.scheduleType = "month";
        var urlMonth = $location.path().substring(1, 3);
        var urlSeason = $location.path().substring(4, 8);
        param = {
          month: urlMonth,
          calendarYear: urlSeason
        }
      } else if (/^\/([1-9]|0[1-9]|1[0-9]|2[0-9]|3[01])$/.test($location.path())) {
        if (FEEDS_CONFIG.debug) {
          console.log("days View")
        }
        $scope.scheduleType = "days";
        feedNumDays = $location.path().substring(1);
        if ($scope.activeDate) {
          var feedDate = $filter("date")($scope.activeDate, "yyyy-MM-dd");
          param = {
            days: feedNumDays,
            gameDate: feedDate
          }
        } else {
          param = {
            days: feedNumDays
          }
        }
      } else {
        if (FEEDS_CONFIG.debug) {
          console.log("Default Day View")
        }
        $scope.scheduleType = "day";
        console.log("the format of the date is not correct")
      }
    }
    getSchedule(param)
  }
  $scope.$watch(function() {
    return $location.path()
  }, onPageLocationChange);
  $scope.changeMonth = function(direction) {
    switch (direction) {
      case "next":
        dateNext();
        break;
      case "prev":
        datePrev();
        break;
      default:
        dateNext()
    }

    function dateNext() {
      if ($scope.scheduleType == "day") {
        var urlDate = new Date($scope.activeDate).setDate($scope.activeDate.getDate() + 1);
        var feedDate = $filter("date")(urlDate, "yyyy-MM-dd");
        $location.path(feedDate).search({})
      }
      if ($scope.scheduleType == "days") {
        $scope.activeDate.setDate($scope.activeDate.getDate() + Number(feedNumDays));
        onPageLocationChange()
      }
      if ($scope.scheduleType == "month") {
        var nextYear = null;
        var nextMonth = null;
        var nextMonthNum = Number($scope.activeMonth) + 2;
        if (nextMonthNum < 10) {
          nextMonth = "0" + nextMonthNum.toString()
        } else {
          nextMonth = nextMonthNum.toString()
        }
        if (nextMonth === "13") {
          nextMonth = "01";
          nextYear = Number($scope.activeSeason) + 1;
          nextYear.toString()
        } else {
          var nextYear = Number($scope.activeSeason);
          nextYear.toString()
        }
        var feedMonth = nextMonth;
        var feedSeason = nextYear;
        var url = "/" + feedMonth + "/" + feedSeason;
        $location.path(url).search({})
      }
    }

    function datePrev() {
      if ($scope.scheduleType == "day") {
        var urlDate = new Date($scope.activeDate).setDate($scope.activeDate.getDate() - 1);
        var feedDate = $filter("date")(urlDate, "yyyy-MM-dd");
        $location.path(feedDate).search({})
      }
      if ($scope.scheduleType == "days") {
        $scope.activeDate.setDate($scope.activeDate.getDate() - Number(feedNumDays));
        onPageLocationChange()
      }
      if ($scope.scheduleType == "month") {
        var nextMonth = null;
        var nextYear = null;
        var nextMonthNum = Number($scope.activeMonth);
        if (nextMonthNum < 10) {
          nextMonth = "0" + nextMonthNum.toString()
        } else {
          nextMonth = nextMonthNum.toString()
        }
        if (nextMonth === "00") {
          nextMonth = "12";
          nextYear = Number($scope.activeSeason) - 1;
          nextYear.toString()
        } else {
          nextYear = Number($scope.activeSeason);
          nextYear.toString()
        }
        var feedMonth = nextMonth;
        var feedSeason = nextYear;
        var url = "/" + feedMonth + "/" + feedSeason;
        $location.path(url).search({})
      }
    }
  };
  if (!$("html").hasClass("ie8")) {
    $scope.getWidth = function() {
      return $(window).width()
    };
    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
      $scope.window_width = newValue;
      if ($scope.window_width < 700) {
        $scope.paginate = true
      } else {
        $scope.paginate = false
      }
    });
    window.addEventListener("resize", function() {
      if (!$scope.$$phase) {
        $scope.$apply()
      }
    })
  }
  var maxPages = 3;
  var element = document.getElementById("sib-league-schedule");
  if (!$("html").hasClass("ie8") && element) {
    if (window.isAndroid) {
      Hammer(element).on("dragleft", function(event) {
        event.preventDefault();
        Hammer(element).trigger("swipeleft", event)
      });
      Hammer(element).on("dragright", function(event) {
        event.preventDefault();
        Hammer(element).trigger("swiperight", event)
      })
    }
    Hammer(element).on("swipeleft", function(event) {
      if ($scope.currentpage < maxPages) {
        $scope.currentpage++;
        if (!$scope.$$phase) {
          $scope.$apply()
        }
      }
    });
    Hammer(element).on("swiperight", function(event) {
      if ($scope.currentpage > 1) {
        $scope.currentpage--;
        if (!$scope.$$phase) {
          $scope.$apply()
        }
      }
    })
  }
}]);
"use strict";
sib.controller("ScoresHeaderCtrl", ["$scope", "Page", "FEEDS_CONFIG", function ScoresHeaderCtrl($scope, Page, FEEDS_CONFIG) {
  Page.setTitle("_page.scores");
  $scope.showCal = false
}]);
"use strict";
sib.controller("ScoresPageCtrl", ["$scope", "$filter", "$location", "$timeout", "Page", "$http", "StatsFeedFetcher", "SimpleFeedFetcher", "UrlParams", "FEEDS_CONFIG", function SchedulePageCtrl($scope, $filter, $location, $timeout, Page, $http, StatsFeedFetcher, SimpleFeedFetcher, UrlParams, FEEDS_CONFIG) {
  Page.setTitle("_page.scores");
  var updateInterval = FEEDS_CONFIG.liveFeedUpdateInterval;
  var shouldLoadEventMap = true;
  $scope.gameEventMap = {};
  $scope.gamestreamItemAvailiable = false;
  $scope.changeDate = function(direction) {
    switch (direction) {
      case "next":
        setDate(1);
        break;
      case "prev":
        setDate(-1);
        break;
      default:
        setDate(1)
    }

    function setDate(adj) {
      var UrlDate = new Date(Number($scope.activeDate));
      UrlDate.setDate(UrlDate.getDate() + adj);
      var feedDate = $filter("date")(UrlDate, "yyyy-MM-dd");
      $location.path(feedDate).search({})
    }
  };
  $scope.$watch(function() {
    return $location.path()
  }, function() {
    $scope.schedule = null;
    $scope.moduleLoading = true;
    $timeout.cancel($scope.liveDayDelay);
    $timeout.cancel($scope.itemNotEmpty);
    if (/^\/\d{4}-\d{2}-\d{2}$/.test($location.path())) {
      var UrlDate = new Date($location.path().substring(1).replace(/-/g, "/"));
      var feedDate = $filter("date")(UrlDate, "yyyy-MM-dd");
      var gameStreamDate = $filter("date")(UrlDate, "yyyyMMdd");
      checkForEvent(gameStreamDate);
      getGameDayStatus(feedDate)
    } else {
      getGameDayStatus(null)
    }
  });

  function getCacheBusterValue() {
    var sTime = (new Date).getTime() + "";
    var cacheTime = sTime.substring(0, sTime.length - 4);
    return cacheTime
  }

  function checkForEvent(gameStreamDate) {
    $scope.gamestreamItemAvailiable = false;
    $scope.gamestreamUrlDate = "";
    $scope.gamestreamUrlParamDate = "";
    var feedURLPrefix = "/statsm2/jsp/proxy.jsp?url=";
    var extraParam = "&contenttype=text/javascript";
    var feedUrlHost = "https://api.coveritlive.com/remote/2/event/data?event_code=";
    var tokenId = "&token=1b3b74241b875460a932cdb4f1b45b94";
    var feedFullURL = "";
    var eventId = "";
    var dateFound = false;
    $.each($scope.gameEventMap, function(key, value) {
      if (key == gameStreamDate) {
        eventId = value[0];
        var feedURL = feedUrlHost + eventId + tokenId;
        feedURL = encodeURIComponent(feedURL).replace(/'/g, "%27").replace(/"/g, "%22");
        feedFullURL = feedURLPrefix + feedURL + extraParam;
        dateFound = true;
        SimpleFeedFetcher.get(feedFullURL + "&cachebust=" + getCacheBusterValue()).then(function(xhr) {
          $scope.gamestreamItemAvailiable = xhr.data.item_count > 0;
          if (!$scope.gamestreamItemAvailiable) {
            $scope.itemNotEmpty = $timeout(function() {
              checkForEvent(gameStreamDate)
            }, 3e5)
          } else {
            $scope.gamestreamUrlDate = gameStreamDate;
            $scope.gamestreamUrlParamDate = gameStreamDate.substring(0, 4) + "-" + gameStreamDate.substring(4, 6) + "-" + gameStreamDate.substring(6, 8)
          }
        })
      }
    });
    if (!dateFound) {
      console.log("Date has no mapping " + gameStreamDate)
    }
  }

  function loadMapping(gameStreamDate) {
    $.ajax({
      type: "GET",
      url: "/feeds/coveritlivemapping/gametoeventcode.json?callback=?",
      jsonpCallback: "jsonGameToEventMappingCallback",
      contentType: "application/json",
      dataType: "jsonp",
      cache: true,
      success: function(json) {
        $scope.gameEventMap = json;
        checkForEvent(gameStreamDate)
      },
      error: function(e) {
        console.log(e)
      }
    })
  }

  function getGameDayStatus(feedDate) {
    var param = {};
    if (feedDate) {
      param = {
        gameDate: feedDate
      }
    }
    StatsFeedFetcher.fetch(FEEDS_CONFIG.gameDayStatus, UrlParams.create([], param, false, true)).then(function(data) {
      getGameScores(feedDate);
      var gameDates = data.gameDates[0];
      $scope.dayStatus = gameDates.dayStatus;
      if (shouldLoadEventMap) {
        shouldLoadEventMap = false;
        var gameStreamDate = $filter("date")(Number(gameDates.utcMillis), "yyyyMMdd");
        loadMapping(gameStreamDate)
      }
      if ($scope.dayStatus == "1" || $scope.dayStatus == "2") {
        $scope.liveDayDelay = $timeout(function() {
          getGameDayStatus(feedDate)
        }, updateInterval)
      }
    })
  }

  function getGameScores(feedDate) {
    if (!$scope.schedule || $scope.dayStatus == "2") {
      var param = {};
      if (feedDate) {
        param = {
          gameDate: feedDate
        }
      }
      StatsFeedFetcher.fetchData(FEEDS_CONFIG.scores, [], param, true, true).then(function(data) {
        Page.showLoading(false);
        $scope.moduleLoading = false;
        $scope.schedule = data;
        $scope.activeDate = $scope.schedule.utcMillis;
        if ($scope.schedule.date == null) {
          $scope.noGames = true;
          if ($scope.schedule.nextAvailableDateMillis) {
            var nextLocalGame = Number($scope.schedule.nextAvailableDateMillis);
            $scope.nextGameDate = $filter("date")(nextLocalGame, "fullDate");
            $scope.nextGameDateLink = $filter("date")(nextLocalGame, "yyyy-MM-dd")
          }
        } else {
          $scope.noGames = false;
          $scope.showGameStream = false
        }
        Page.setPermitLoading(false)
      })
    }
  }
}]);
"use strict";
sib.controller("StandingsCtrl", ["$scope", "$location", "Page", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", "$timeout", function StandingsCtrl($scope, $location, Page, StatsFeedFetcher, UrlParams, FEEDS_CONFIG, $timeout) {
  if (window.location.pathname.indexOf("standings") > 0) {
    Page.setTitle("_page.standings")
  }
  if (window.location.pathname.indexOf("playoffpicture") > 0) {
    Page.setTitle("_page.playoffPicture")
  }
  $scope.currentpage = 1;
  $scope.paginate = false;
  $scope.moduleLoading = true;
  $scope.predicate = "standings.confRank";
  $scope.reverse = false;
  if (!$("html").hasClass("ie8")) {
    $scope.getWidth = function() {
      return $(window).width()
    };
    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
      $scope.window_width = newValue;
      if ($scope.window_width < 700) {
        $scope.paginate = true
      } else {
        $scope.paginate = false
      }
    });
    window.addEventListener("resize", function() {
      if (!$scope.$$phase) {
        $scope.$apply()
      }
    })
  }
  $scope.tabbed = "conference";
  $scope.columnSet = "standings";
  $scope.division = "hidden";
  $scope.conference = "visible";
  $scope.selectedConference = "eastern";
  $scope.clickdivision = function() {
    $scope.tabbed = "division";
    $scope.division = "visible";
    $scope.conference = "visible";
    if (!$scope.divisionStandings) {
      $scope.moduleLoading = true;
      Page.showLoading(false);
      StatsFeedFetcher.fetch(FEEDS_CONFIG.divisionStanding, UrlParams.create([], {}, false, false)).then(function(data) {
        $scope.moduleLoading = false;
        var divisionData = data;
        var conferences = [$scope.conferenceStandings[0].conference, $scope.conferenceStandings[1].conference];
        var conferenceArray = [{
          name: conferences[0],
          divisions: []
        }, {
          name: conferences[1],
          divisions: []
        }];
        angular.forEach(divisionData.standingGroups, function(division) {
          var conferenceId = conferences.indexOf(division.conference);
          conferenceArray[conferenceId].divisions.push(division)
        });
        var divisionStandings = conferenceArray;
        for (var i = 0; i < divisionStandings.length; i++) {
          for (var x = 0; x < divisionStandings[i].divisions.length; x++) {
            for (var y = 0; y < divisionStandings[i].divisions[x].teams.length; y++) {
              divisionStandings[i].divisions[x].teams[y].standings.confRank = Number(divisionStandings[i].divisions[x].teams[y].standings.confRank);
              divisionStandings[i].divisions[x].teams[y].standings.wins = Number(divisionStandings[i].divisions[x].teams[y].standings.wins);
              divisionStandings[i].divisions[x].teams[y].standings.losses = Number(divisionStandings[i].divisions[x].teams[y].standings.losses);
              divisionStandings[i].divisions[x].teams[y].standings.winPct = Number(divisionStandings[i].divisions[x].teams[y].standings.winPct)
            }
          }
        }
        $scope.divisionStandings = divisionStandings;
        $timeout(function() {}, 1e3);
        if (FEEDS_CONFIG.debug) console.log(conferenceArray)
      })
    }
  };
  $scope.clickconference = function() {
    $scope.tabbed = "conference";
    $scope.division = "hidden";
    $scope.conference = "visible"
  };
  $scope.toggleConference = function(conference) {
    $(".conference-table").hide();
    $("#" + conference).show();
    $scope.selectedConference = conference
  };
  var maxPages = 4;
  var element = document.getElementById("sib-table-standings");
  if (!$("html").hasClass("ie8") && element) {
    if (window.isAndroid) {
      Hammer(element).on("dragleft", function(event) {
        event.preventDefault();
        Hammer(element).trigger("swipeleft", event)
      });
      Hammer(element).on("dragright", function(event) {
        event.preventDefault();
        Hammer(element).trigger("swiperight", event)
      })
    }
    Hammer(element).on("swipeleft", function(event) {
      event.preventDefault();
      if ($scope.currentpage < maxPages) {
        $scope.currentpage++;
        if (!$scope.$$phase) {
          $scope.$apply()
        }
      }
    });
    Hammer(element).on("swiperight", function(event) {
      event.preventDefault();
      if ($scope.currentpage > 1) {
        $scope.currentpage--;
        if (!$scope.$$phase) {
          $scope.$apply()
        }
      }
    })
  }
  StatsFeedFetcher.fetch(FEEDS_CONFIG.conferenceStanding, UrlParams.create([], {}, false, false)).then(function(data) {
    $scope.moduleLoading = false;
    var conferenceData = data;
    var conferenceStandings = conferenceData.standingGroups;
    for (var i = 0; i < conferenceStandings.length; i++) {
      for (var x = 0; x < conferenceStandings[i].teams.length; x++) {
        conferenceStandings[i].teams[x].standings.confRank = Number(conferenceStandings[i].teams[x].standings.confRank);
        conferenceStandings[i].teams[x].standings.wins = Number(conferenceStandings[i].teams[x].standings.wins);
        conferenceStandings[i].teams[x].standings.losses = Number(conferenceStandings[i].teams[x].standings.losses);
        conferenceStandings[i].teams[x].standings.winPct = Number(conferenceStandings[i].teams[x].standings.winPct)
      }
    }
    $scope.conferenceStandings = conferenceStandings;
    $timeout(function() {}, 1e3)
  });
  $scope.sortTable = function(string) {
    $scope.predicate = string;
    $scope.reverse = !$scope.reverse
  };
  $scope.getClinchedIcon = function(standings) {
    var conferece = "";
    var division = "";
    var clinched = ""
  }
}]);
"use strict";
sib.controller("StandingsGlossaryCtrl", ["$scope", "$location", "FEEDS_CONFIG", function StandingsGlossaryCtrl($scope, $location, FEEDS_CONFIG) {
  $scope.playoff = "hidden";
  $scope.playoffinfo = function() {
    if ($scope.playoff === "hidden") {
      $scope.playoff = "expanded"
    } else {
      $scope.playoff = "hidden"
    }
  }
}]);
"use strict";
sib.controller("ActiveTeamTabCtrl", ["$scope", "$location", "$timeout", "FEEDS_CONFIG", "Site", function ActiveTeamTabCtrl($scope, $location, $timeout, FEEDS_CONFIG, Site) {
  $scope.tabClass = "";
  if (Site.hasOwnProperty("teamNews") && Site.teamNews == true) {
    $scope.tabCount = "8";
    $scope.showNews = true
  }
  if (Site.hasOwnProperty("useCustomTeamNav") && Site.useCustomTeamNav == true) {
    $scope.useCustomTeamNav = true
  } else {
    $scope.useCustomTeamNav = false
  }
  if (!$("html").hasClass("ie8")) {
    $scope.$watch("teamPageTabbed", function(value) {
      if (typeof $scope.team == "undefined") {
        return
      }
      var url = "";
      if ($scope.teamPageTabbed == "profile") {
        url = "/teams/#!/" + $scope.team.profile.code
      } else {
        url = "/teams/" + $scope.teamPageTabbed + "/#!/" + $scope.team.profile.code
      }
      window.location = url
    })
  }
}]);
"use strict";
sib.controller("ExtendedTeamLeadersCtrl", ["$scope", "$location", "$timeout", "Page", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", function ExtendedTeamLeadersCtrl($scope, $location, $timeout, Page, StatsFeedFetcher, UrlParams, FEEDS_CONFIG) {
  Page.setTitle("_page.teamLeaders");
  $scope.category = "pts";
  var seasonTypeArray = ["preseason", "regularSeason", "allStar", "playoffSeason"];
  StatsFeedFetcher.fetch(FEEDS_CONFIG.teamLeaders, UrlParams.create(["teamCode"], {}, false, false)).then(function(data) {
    $scope.tl = data;
    $scope.seasonType = seasonTypeArray[$scope.tl.pointLeader.seasonType - 1]
  })
}]);
"use strict";
sib.controller("HistoricalTeamListCtrl", ["$scope", "Page", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", function PlayerAwardsCtrl($scope, Page, StatsFeedFetcher, UrlParams, FEEDS_CONFIG) {
  Page.setTitle("_Page.historicalTeamList");
  StatsFeedFetcher.fetch(FEEDS_CONFIG.historicalTeamList, UrlParams.create([], {}, false, false)).then(function(data) {
    var listGroups = data.listGroups;
    $scope.listGroups = [];
    angular.forEach(listGroups, function(group) {
      var teamGroup = {
        current: {},
        historical: [],
        teamId: group.teamId
      };
      var historical = group.teams.slice(0, group.teams.length - 1);
      var current = group.teams.slice(-1);
      teamGroup.historical = historical;
      teamGroup.current = current[0];
      $scope.listGroups.push(teamGroup)
    })
  })
}]);
"use strict";
sib.controller("SingleHistoricalTeamStatsCtrl", ["$scope", "Page", "Site", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", function SingleHistoricalTeamStatsCtrl($scope, Page, Site, StatsFeedFetcher, UrlParams, FEEDS_CONFIG) {
  Page.setTitle("_page.historicalTeamStats");
  $scope.tabletabbed = "avg";
  $scope.currentpage = 1;
  $scope.paginate = false;
  $scope.teamPageTabbed = "team";
  $scope.contraryTeam = "opponent";
  $scope.predicate = "year";
  $scope.sortingPredicate = "year";
  $scope.reverse = false;
  $scope.changeTab = function(string) {
    $scope.teamPageTabbed = string;
    if (string == "team") {
      $scope.contraryTeam = "opponent"
    } else {
      $scope.contraryTeam = "team"
    }
  };
  $scope.sortTable = function(string) {
    if (string == "year") {
      $scope.reverse = false;
      $scope.sortingPredicate = string
    } else {
      $scope.reverse = true;
      $scope.sortingPredicate = "teamStats." + $scope.teamPageTabbed + "." + string
    }
    $scope.predicate = string
  };
  $scope.enName = false;
  $scope.showDoubleName = false;
  if (Site.hasOwnProperty("useDoubleNamePlayerIndex") && Site.useDoubleNamePlayerIndex) {
    $scope.enName = true
  }
  StatsFeedFetcher.fetch(FEEDS_CONFIG.historicalTeamStats, UrlParams.create(["teamId"], {}, false, false)).then(function(data) {
    var teamData = data;
    $scope.teamProfile = teamData.profile;
    $scope.allStats = [];
    angular.forEach(teamData.regularSeasonStats, function(stats) {
      stats.teamStats.team.statAverage.diff = stats.teamStats.team.statAverage.pointsPg - stats.teamStats.opponent.statAverage.pointsPg;
      stats.teamStats.team.statTotal.diff = stats.teamStats.team.statTotal.points - stats.teamStats.opponent.statTotal.points;
      stats.teamStats.opponent.statAverage.diff = stats.teamStats.opponent.statAverage.pointsPg - stats.teamStats.team.statAverage.pointsPg;
      stats.teamStats.opponent.statTotal.diff = stats.teamStats.opponent.statTotal.points - stats.teamStats.team.statTotal.points
    });
    teamData.regularSeasonCareerStat.team.statAverage.diff = teamData.regularSeasonCareerStat.team.statAverage.pointsPg - teamData.regularSeasonCareerStat.opponent.statAverage.pointsPg;
    teamData.regularSeasonCareerStat.team.statTotal.diff = teamData.regularSeasonCareerStat.team.statTotal.points - teamData.regularSeasonCareerStat.opponent.statTotal.points;
    teamData.regularSeasonCareerStat.opponent.statAverage.diff = teamData.regularSeasonCareerStat.opponent.statAverage.pointsPg - teamData.regularSeasonCareerStat.team.statAverage.pointsPg;
    teamData.regularSeasonCareerStat.opponent.statTotal.diff = teamData.regularSeasonCareerStat.opponent.statTotal.points - teamData.regularSeasonCareerStat.team.statTotal.points;
    var regular = {
      seasonStats: teamData.regularSeasonStats,
      careerStats: teamData.regularSeasonCareerStat,
      label: "regular"
    };
    $scope.allStats.push(regular);
    if (teamData.playoffStats.length > 0) {
      angular.forEach(teamData.playoffStats, function(stats) {
        stats.teamStats.team.statAverage.diff = stats.teamStats.team.statAverage.pointsPg - stats.teamStats.opponent.statAverage.pointsPg;
        stats.teamStats.team.statTotal.diff = stats.teamStats.team.statTotal.points - stats.teamStats.opponent.statTotal.points;
        stats.teamStats.opponent.statAverage.diff = stats.teamStats.opponent.statAverage.pointsPg - stats.teamStats.team.statAverage.pointsPg;
        stats.teamStats.opponent.statTotal.diff = stats.teamStats.opponent.statTotal.points - stats.teamStats.team.statTotal.points
      });
      teamData.playoffCareerStat.team.statAverage.diff = teamData.playoffCareerStat.team.statAverage.pointsPg - teamData.playoffCareerStat.opponent.statAverage.pointsPg;
      teamData.playoffCareerStat.team.statTotal.diff = teamData.playoffCareerStat.team.statTotal.points - teamData.playoffCareerStat.opponent.statTotal.points;
      teamData.playoffCareerStat.opponent.statAverage.diff = teamData.playoffCareerStat.opponent.statAverage.pointsPg - teamData.playoffCareerStat.team.statAverage.pointsPg;
      teamData.playoffCareerStat.opponent.statTotal.diff = teamData.playoffCareerStat.opponent.statTotal.points - teamData.playoffCareerStat.team.statTotal.points;
      var playoff = {
        seasonStats: teamData.playoffStats,
        careerStats: teamData.playoffCareerStat,
        label: "playoffs"
      };
      $scope.allStats.push(playoff)
    }
    $scope.careerAverage = teamData.regularSeasonCareerStat.team.statAverage
  });
  StatsFeedFetcher.fetch(FEEDS_CONFIG.teamAwards, UrlParams.create(["teamId"], {}, false, false)).then(function(data) {
    var awardsData = data;
    if (!awardsData) {
      $scope.showAwards = false
    } else {
      var awards = {
        championships: awardsData.TeamDetails[3].Awards[0].Championships.length,
        conferenceTitles: awardsData.TeamDetails[3].Awards[1].ConferenceTitles.length,
        divisionTitles: awardsData.TeamDetails[3].Awards[2].DivitionalTitles.length
      };
      var awardsCount = {
        championships: {
          dates: []
        },
        conferenceTitles: {
          dates: []
        },
        divisionTitles: {
          dates: []
        }
      };
      for (var x = 0; x < awardsData.TeamDetails[3].Awards[0].Championships.length; x++) {
        awardsCount.championships.dates.push(awardsData.TeamDetails[3].Awards[0].Championships[x].YearAwarded)
      }
      for (var y = 0; y < awardsData.TeamDetails[3].Awards[1].ConferenceTitles.length; y++) {
        awardsCount.conferenceTitles.dates.push(awardsData.TeamDetails[3].Awards[1].ConferenceTitles[y].YearAwarded)
      }
      for (var z = 0; z < awardsData.TeamDetails[3].Awards[2].DivitionalTitles.length; z++) {
        awardsCount.divisionTitles.dates.push(awardsData.TeamDetails[3].Awards[2].DivitionalTitles[z].YearAwarded)
      }
      $scope.awards = awards;
      $scope.awardsCount = awardsCount;
      if (awardsCount.championships.dates.length < 1 && awardsCount.conferenceTitles.dates.length < 1 && awardsCount.divisionTitles.dates.length < 1) {
        $scope.showAwards = false
      } else {
        $scope.showAwards = true
      }
    }
  });
  if (!$("html").hasClass("ie8")) {
    $scope.getWidth = function() {
      return $(window).width()
    };
    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
      $scope.window_width = newValue;
      if ($scope.window_width < 700) {
        $scope.paginate = true
      } else {
        $scope.paginate = false
      }
    });
    window.addEventListener("resize", function() {
      if (!$scope.$$phase) {
        $scope.$apply()
      }
    })
  }
  var maxPages = 4;
  var element = document.getElementById("single_player_stats");
  if (!$("html").hasClass("ie8") && element) {
    if (window.isAndroid) {
      Hammer(element).on("dragleft", function(event) {
        event.preventDefault();
        Hammer(element).trigger("swipeleft", event)
      });
      Hammer(element).on("dragright", function(event) {
        event.preventDefault();
        Hammer(element).trigger("swiperight", event)
      })
    }
    Hammer(element).on("swipeleft", function(event) {
      if ($scope.currentpage < maxPages) {
        $scope.currentpage++;
        if (!$scope.$$phase) {
          $scope.$apply()
        }
      }
    });
    Hammer(element).on("swiperight", function(event) {
      if ($scope.currentpage > 1) {
        $scope.currentpage--;
        if (!$scope.$$phase) {
          $scope.$apply()
        }
      }
    })
  }
}]);
"use strict";
sib.controller("SingleTeamHotZoneCtrl", ["$scope", "$location", "Page", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", function SingleTeamHotZoneCtrl($scope, $location, Page, StatsFeedFetcher, UrlParams, FEEDS_CONFIG) {
  Page.setTitle("_page.teamHotZones");
  $scope.teamPageTabbed = "hotzones";
  $scope.chartTabbed = "full";
  $scope.sectionTabbed = "";
  var hotzoneData = {};
  var leagueHotzoneData = {};
  var totalSplit = null;
  var last5Split = null;
  $scope.allSeasons = [];
  var selectSeason = "";
  $scope.hotZoneDataTotal = {};
  $scope.hotZoneDataLast5 = {};
  var seasonTypeArray = ["preseason", "regularSeason", "allStar", "playoffSeason"];
  StatsFeedFetcher.fetch(FEEDS_CONFIG.teamStats, UrlParams.create(["teamCode"], {}, false, false)).then(function(data) {
    Page.showLoading(false);
    $scope.team = data
  });
  StatsFeedFetcher.fetch(FEEDS_CONFIG.teamStanding, UrlParams.create(["teamCode"], {}, false, false)).then(function(data) {
    Page.showLoading(false);
    $scope.teamStanding = data;
    $scope.seasonType = seasonTypeArray[data.season.statsSeasonType - 1]
  });
  StatsFeedFetcher.fetch(FEEDS_CONFIG.teamHotzones, UrlParams.create(["teamCode"], {}, false, false)).then(function(data) {
    Page.showLoading(false);
    console.log(FEEDS_CONFIG.teamHotzones)
    hotzoneData = data;
    // console.log(data)
    $scope.sectionTabbed = 1;
    selectSeason = hotzoneData.hotZone.seasons.length - 1;
    for (var i = 0; i < hotzoneData.hotZone.seasons[selectSeason].splits.length; i++) {
      if (hotzoneData.hotZone.seasons[selectSeason].splits[i].type == "Total") {
        totalSplit = i
      } else if (hotzoneData.hotZone.seasons[selectSeason].splits[i].type == "Last 5") {
        last5Split = i
      }
    }
    StatsFeedFetcher.fetch(FEEDS_CONFIG.leagueTeamHotzones, UrlParams.create([], {}, false, false)).then(function(data) {
      if (totalSplit != null) {
        $scope.hotZoneDataTotal = hotzoneData.hotZone.seasons[selectSeason].splits[totalSplit]
      }
      if (last5Split != null) {
        $scope.hotZoneDataLast5 = hotzoneData.hotZone.seasons[selectSeason].splits[last5Split]
      }
      $scope.selectSeasonDes = hotzoneData.hotZone.seasons[selectSeason].season.typeDisplay;
      angular.forEach(hotzoneData.hotZone.seasons, function(item) {
        $scope.allSeasons.push(item.season)
      });
      leagueHotzoneData = data;
      $scope.leagueHotzoneData = leagueHotzoneData.hotZone.seasons[selectSeason].splits[totalSplit]
    })
  });
  $scope.$watch("sectionTabbed", function(section) {
    if (typeof hotzoneData.hotZone != "undefined") {
      if (section == 0) {
        selectSeason = hotzoneData.hotZone.seasons.length - 2
      } else if (section == 1) {
        selectSeason = hotzoneData.hotZone.seasons.length - 1
      }
      $scope.hotZoneDataTotal = hotzoneData.hotZone.seasons[selectSeason].splits[totalSplit];
      $scope.hotZoneDataLast5 = hotzoneData.hotZone.seasons[selectSeason].splits[last5Split];
      $scope.selectSeasonDes = hotzoneData.hotZone.seasons[selectSeason].season.typeDisplay;
      if (typeof leagueHotzoneData.hotZone != "undefined") {
        $scope.leagueHotzoneData = leagueHotzoneData.hotZone.seasons[selectSeason].splits[totalSplit]
      }
    }
  })
}]);
"use strict";
sib.controller("SingleTeamLeadersCtrl", ["$scope", "$location", "Page", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", function SingleTeamLeadersCtrl($scope, $location, Page, StatsFeedFetcher, UrlParams, FEEDS_CONFIG) {
  $scope.showLeagueRankings = false;
  $scope.teamPageTabbed = "leaders";
  var seasonTypeArray = ["preseason", "regularSeason", "allStar", "playoffSeason"];
  StatsFeedFetcher.fetch(FEEDS_CONFIG.teamStats, UrlParams.create(["teamCode"], {}, false, false)).then(function(data) {
    Page.showLoading(false);
    $scope.team = data;
    $scope.teamCityName = $scope.team.profile.city + " " + $scope.team.profile.name
  });
  StatsFeedFetcher.fetch(FEEDS_CONFIG.teamStanding, UrlParams.create(["teamCode"], {}, false, false)).then(function(data) {
    Page.showLoading(false);
    $scope.teamStanding = data;
    $scope.seasonType = seasonTypeArray[data.season.statsSeasonType - 1]
  })
}]);
"use strict";
sib.controller("SingleTeamProfileCtrl", ["$scope", "$location", "Page", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", "TEAM_TWITTER", function SingleTeamProfileCtrl($scope, $location, Page, StatsFeedFetcher, UrlParams, FEEDS_CONFIG, TEAM_TWITTER) {
  Page.setTitle("_page.teamProfile");
  $scope.showLeagueRankings = false;
  $scope.teamPageTabbed = "profile";
  $scope.showAwards = true;
  var seasonTypeArray = ["preseason", "regularSeason", "allStar", "playoffSeason"];
  $scope.$watch(function() {
    return $location.path()
  }, function() {
    StatsFeedFetcher.fetch(FEEDS_CONFIG.teamStanding, UrlParams.create(["teamCode"], {}, false, false)).then(function(data) {
      Page.showLoading(false);
      $scope.teamStanding = data;
      $scope.team = $scope.teamStanding.team;
      $scope.seasonType = seasonTypeArray[data.season.statsSeasonType - 1];
      $scope.teamTwitter = TEAM_TWITTER[$scope.team.profile.code];
      $scope.teamCityName = $scope.team.profile.city + " " + $scope.team.profile.name;
      $scope.teamHeadCoach = $scope.teamStanding.team.coach.headCoach
    });
    StatsFeedFetcher.fetch(FEEDS_CONFIG.teamAwards, UrlParams.create(["teamCode"], {}, false, false)).then(function(data) {
      var awardsData = data;
      if (!awardsData) {
        $scope.showAwards = false
      } else {
        var awards = {
          championships: awardsData.TeamDetails[3].Awards[0].Championships.length,
          conferenceTitles: awardsData.TeamDetails[3].Awards[1].ConferenceTitles.length,
          divisionTitles: awardsData.TeamDetails[3].Awards[2].DivitionalTitles.length
        };
        var awardsCount = {
          championships: {
            dates: []
          },
          conferenceTitles: {
            dates: []
          },
          divisionTitles: {
            dates: []
          }
        };
        for (var x = 0; x < awardsData.TeamDetails[3].Awards[0].Championships.length; x++) {
          awardsCount.championships.dates.push(awardsData.TeamDetails[3].Awards[0].Championships[x].YearAwarded)
        }
        for (var y = 0; y < awardsData.TeamDetails[3].Awards[1].ConferenceTitles.length; y++) {
          awardsCount.conferenceTitles.dates.push(awardsData.TeamDetails[3].Awards[1].ConferenceTitles[y].YearAwarded)
        }
        for (var z = 0; z < awardsData.TeamDetails[3].Awards[2].DivitionalTitles.length; z++) {
          awardsCount.divisionTitles.dates.push(awardsData.TeamDetails[3].Awards[2].DivitionalTitles[z].YearAwarded)
        }
        $scope.awards = awards;
        $scope.awardsCount = awardsCount;
        if (awardsCount.championships.dates.length < 1 && awardsCount.conferenceTitles.dates.length < 1 && awardsCount.divisionTitles.dates.length < 1) {
          $scope.showAwards = false
        } else {
          $scope.showAwards = true
        }
      }
    });
    StatsFeedFetcher.fetch(FEEDS_CONFIG.teamLeaders, UrlParams.create(["teamCode"], {}, false, false)).then(function(data) {
      $scope.tl = data
    });
    StatsFeedFetcher.fetch(FEEDS_CONFIG.teamPlayerStats, UrlParams.create(["teamCode"], {}, false, false)).then(function(data) {
      $scope.playerStats = data
    })
  })
}]);
"use strict";
sib.controller("SingleTeamRosterCtrl", ["$scope", "$location", "Page", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", function SingleTeamRosterCtrl($scope, $location, Page, StatsFeedFetcher, UrlParams, FEEDS_CONFIG) {
  $scope.showLeagueRankings = false;
  $scope.teamPageTabbed = "roster";
  var seasonTypeArray = ["preseason", "regularSeason", "allStar", "playoffSeason"];
  StatsFeedFetcher.fetch(FEEDS_CONFIG.teamRoster, UrlParams.create(["teamCode"], {}, false, false)).then(function(data) {
    Page.showLoading(false);
    $scope.team = data;
    $scope.teamCityName = $scope.team.profile.city + " " + $scope.team.profile.name
  });
  StatsFeedFetcher.fetch(FEEDS_CONFIG.teamPlayerStats, UrlParams.create(["teamCode"], {}, false, false)).then(function(data) {
    Page.showLoading(false);
    $scope.teamStats = data
  });
  StatsFeedFetcher.fetch(FEEDS_CONFIG.teamStanding, UrlParams.create(["teamCode"], {}, false, false)).then(function(data) {
    Page.showLoading(false);
    $scope.teamStanding = data;
    $scope.seasonType = seasonTypeArray[data.season.rosterSeasonType - 1]
  })
}]);
"use strict";
sib.controller("SingleTeamScheduleCtrl", ["$scope", "$location", "Page", "Site", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", function SingleTeamScheduleCtrl($scope, $location, Page, Site, StatsFeedFetcher, UrlParams, FEEDS_CONFIG) {
  Page.setTitle("_page.teamProfile");
  $scope.teamPageTabbed = "schedule";
  $scope.splits = [];
  var seasonTypeArray = ["preseason", "regularSeason", "allStar", "playoffSeason"];

  function isDisableLeagueTeam(leagueId) {
    if (Site.hasOwnProperty("disableLeagueTeam") && Site.disableLeagueTeam.indexOf(leagueId) > -1) {
      return true
    } else {
      return false
    }
  }
  $scope.splitGame = function() {
    var splitsData = [];
    var finished = [];
    var upcoming = [];
    angular.forEach($scope.team.monthGroups, function(month) {
      var endgames = [];
      var upgames = [];
      angular.forEach(month.games, function(game) {
        if (game.homeTeam.profile.isLeagueTeam && isDisableLeagueTeam(game.homeTeam.profile.leagueId)) {
          game.homeTeam.profile.isLeagueTeam = false
        }
        if (game.awayTeam.profile.isLeagueTeam && isDisableLeagueTeam(game.awayTeam.profile.leagueId)) {
          game.awayTeam.profile.isLeagueTeam = false
        }
        if (game.boxscore.status <= 2) {
          upgames.push(game)
        } else {
          endgames.push(game)
        }
      });
      if (endgames.length > 0) {
        var endData = {
          games: endgames,
          name: month.name,
          number: month.number
        };
        finished.push(endData)
      }
      if (upgames.length > 0) {
        var upData = {
          games: upgames,
          name: month.name,
          number: month.number
        };
        upcoming.push(upData)
      }
    });
    if (upcoming.length > 0) {
      var group1 = {
        monthGroup: upcoming,
        status: "Incomplete"
      };
      splitsData.push(group1)
    }
    if (finished.length > 0) {
      var group2 = {
        monthGroup: finished,
        status: "complete"
      };
      splitsData.push(group2)
    }
    if (splitsData.length == 0) {
      splitsData = [{}]
    }
    $scope.splits = splitsData
  };
  $scope.$watch(function() {
    return $location.path()
  }, function() {
    StatsFeedFetcher.fetch(FEEDS_CONFIG.teamSchedule, UrlParams.create(["teamCode"], {}, true, false)).then(function(data) {
      Page.showLoading(false);
      $scope.team = data;
      $scope.splitGame();
      $scope.teamCityName = $scope.team.profile.city + " " + $scope.team.profile.name
    });
    StatsFeedFetcher.fetch(FEEDS_CONFIG.teamStanding, UrlParams.create(["teamCode"], {}, false, false)).then(function(data) {
      Page.showLoading(false);
      $scope.teamStanding = data;
      $scope.seasonType = seasonTypeArray[data.season.statsSeasonType - 1]
    })
  })
}]);
"use strict";
sib.controller("SingleTeamStatsCtrl", ["$scope", "$location", "Page", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", function SingleTeamStatsCtrl($scope, $location, Page, StatsFeedFetcher, UrlParams, FEEDS_CONFIG) {
  Page.setTitle("_page.teamStats");
  $scope.teamPageTabbed = "stats";
  $scope.reverse = true;
  $scope.moduleLoading = true;
  $scope.tableTabbed = "avg";
  $scope.tabTable = function(theString) {
    $scope.tableTabbed = theString
  };
  var seasonTypeArray = ["preseason", "regularSeason", "allStar", "playoffSeason"];
  $scope.sortTable = function(string) {
    $scope.predicate = string;
    $scope.reverse = !$scope.reverse
  };
  $scope.currentpage = 1;
  $scope.paginate = false;
  $scope.$watch(function() {
    return $location.path()
  }, function() {
    StatsFeedFetcher.fetch(FEEDS_CONFIG.teamStats, UrlParams.create(["teamCode"], {}, false, false)).then(function(statsData) {
      StatsFeedFetcher.fetch(FEEDS_CONFIG.teamStanding, UrlParams.create(["teamCode"], {}, false, false)).then(function(standingData) {
        Page.showLoading(false);
        $scope.moduleLoading = false;
        $scope.team = statsData;
        $scope.teamStanding = standingData;
        $scope.teamCityName = $scope.team.profile.city + " " + $scope.team.profile.name;
        $scope.seasonType = seasonTypeArray[$scope.team.seasons[0].seasonType - 1]
      })
    })
  });
  if (!$("html").hasClass("ie8")) {
    $scope.getWidth = function() {
      return $(window).width()
    };
    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
      $scope.window_width = newValue;
      if ($scope.window_width < 700) {
        $scope.paginate = true
      } else {
        $scope.paginate = false
      }
    });
    window.addEventListener("resize", function() {
      if (!$scope.$$phase) {
        $scope.$apply()
      }
    })
  }
  $scope.showfilters = false;
  $scope.filtertoggle = function() {
    if ($scope.showfilters == false) {
      $scope.showfilters = true
    } else {
      $scope.showfilters = false
    }
  };
  var maxPages = 4;
  var element = document.getElementById("sib_team_stats");
  if (!$("html").hasClass("ie8") && element) {
    if (window.isAndroid) {
      Hammer(element).on("dragleft", function(event) {
        event.preventDefault();
        Hammer(element).trigger("swipeleft", event)
      });
      Hammer(element).on("dragright", function(event) {
        event.preventDefault();
        Hammer(element).trigger("swiperight", event)
      })
    }
    Hammer(element).on("swipeleft", function(event) {
      if ($scope.currentpage < maxPages) {
        $scope.currentpage++;
        if (!$scope.$$phase) {
          $scope.$apply()
        }
      }
    });
    Hammer(element).on("swiperight", function(event) {
      if ($scope.currentpage > 1) {
        $scope.currentpage--;
        if (!$scope.$$phase) {
          $scope.$apply()
        }
      }
    })
  }
}]);
"use strict";
sib.controller("TeamComparisonCtrl", ["$scope", "$location", "Page", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", function TeamComparisonCtrl($scope, $location, Page, StatsFeedFetcher, UrlParams, FEEDS_CONFIG) {
  Page.setTitle("_page.teamComparison");
  $scope.teamPageTabbed = "vs";
  $scope.selectstats = false;
  $scope.togglestats = function() {
    if ($scope.selectstats == false) {
      $scope.selectstats = true
    } else {
      $scope.selectstats = false
    }
  };
  $scope.stats = {
    ppg: true,
    apg: true,
    rpg: true,
    tpp: true,
    ftp: true,
    fgp: false,
    blk: false,
    to: false
  };
  $scope.teamOneId = null;
  $scope.teamTwoId = null;
  $scope.teamOneSelect = false;
  $scope.teamTwoSelect = false;
  $scope.teamOneSearch = "";
  $scope.teamTwoSearch = "";
  $scope.selectHome = false;
  $scope.selectAway = false;
  $scope.teamComparisonChartData = {
    homeTeam: {},
    awayTeam: {}
  };
  $scope.teamShotChartData = {
    homeTeam: {},
    awayTeam: {}
  };
  $scope.teamStanding = {
    homeTeam: {},
    awayTeam: {}
  };
  $scope.seasonIndex = {
    homeTeam: 0,
    awayTeam: 0,
    league: 0
  };
  $scope.leagueSeasonAverage = {};
  $scope.leagueHotzoneData = {};
  StatsFeedFetcher.fetch(FEEDS_CONFIG.conferenceTeamList, UrlParams.create([], {}, false, false)).then(function(data) {
    var conferenceTeamListData = data;
    var teamList = [];
    angular.forEach(conferenceTeamListData.listGroups, function(group) {
      teamList = teamList.concat(group.teams)
    });
    $scope.teamList = teamList;
    $scope.conferenceTeamListData = conferenceTeamListData;
    for (var i = 0; i < teamList.length; i++) {
      teamList[i].profile.cityName = teamList[i].profile.city + " " + teamList[i].profile.name
    }
    if (FEEDS_CONFIG.debug) console.log($scope.teamList)
  });
  $scope.changeTeam = function(teamIndex, teamId) {
    if (teamId < 1) {
      return
    }
    var locationData = $location.path().replace(/(^\/|\/$)/, "").split("/");
    if (teamIndex == "homeTeam") {
      if (locationData[1] !== undefined) {
        $location.path("/" + teamId + "/" + locationData[1])
      } else {
        $location.path("/" + teamId + "/")
      }
    } else {
      $location.path("/" + locationData[0] + "/" + teamId)
    }
    $location.search([]);
    StatsFeedFetcher.fetch(FEEDS_CONFIG.teamStats, UrlParams.create(["teamCode"], {
      teamCode: teamId
    }, false, false)).then(function(data) {
      Page.showLoading(false);
      var teamData = data;
      teamData.stats = teamData.seasons[teamData.seasons.length - 1].team;
      $scope.teamComparisonChartData[teamIndex] = teamData;
      $scope.leagueSeasonAverage = teamData.leagueSeasonAverage;
      $scope.teamCityName = teamData.profile.city + " " + teamData.profile.name
    });
    StatsFeedFetcher.fetch(FEEDS_CONFIG.teamHotzones, UrlParams.create(["teamCode"], {
      teamCode: teamId
    }, false, false)).then(function(data) {
      $scope.seasonIndex[teamIndex] = data.hotZone.seasons.length - 1;
      $scope.teamShotChartData[teamIndex] = data.hotZone
    });
    StatsFeedFetcher.fetch(FEEDS_CONFIG.teamStanding, UrlParams.create(["teamCode"], {
      teamCode: teamId
    }, false, false)).then(function(data) {
      var teamData = data;
      $scope.teamStanding[teamIndex] = teamData;
      if (teamIndex === "homeTeam") {
        $scope.homeConfRank = {
          conf: $scope.teamStanding.homeTeam.team.profile.displayConference,
          rank: $scope.teamStanding.homeTeam.team.standings.confRank
        };
        $scope.team = teamData.team
      } else {
        $scope.awayConfRank = {
          conf: $scope.teamStanding.awayTeam.team.profile.displayConference,
          rank: $scope.teamStanding.awayTeam.team.standings.confRank
        }
      }
    });
    StatsFeedFetcher.fetch(FEEDS_CONFIG.leagueTeamHotzones, UrlParams.create([], {}, false, false)).then(function(data) {
      $scope.seasonIndex.league = data.hotZone.seasons.length - 1;
      $scope.leagueHotzoneData = data.hotZone
    });
    $scope.selectHome = $scope.selectAway = false
  };
  var locationData = $location.path().replace(/(^\/|\/$)/, "").split("/");
  if (locationData[0] !== undefined) {
    $scope.changeTeam("homeTeam", locationData[0])
  }
  if (locationData[1] !== undefined) {
    $scope.changeTeam("awayTeam", locationData[1])
  }
}]);
"use strict";
sib.controller("TeamLeadersCtrl", ["$scope", "$location", "$timeout", "Page", "FEEDS_CONFIG", function TeamLeadersCtrl($scope, $location, $timeout, Page, FEEDS_CONFIG) {
  $scope.category = "reb"
}]);
"use strict";
sib.controller("TeamListCtrl", ["$scope", "$location", "$anchorScroll", "$timeout", "Page", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", function PlayerAwardsCtrl($scope, $location, $anchorScroll, $timeout, Page, StatsFeedFetcher, UrlParams, FEEDS_CONFIG) {
  if (window.location.pathname.indexOf("schedule") < 0) {
    Page.setTitle("_page.teamIndex")
  }
  StatsFeedFetcher.fetch(FEEDS_CONFIG.divisionTeamList, UrlParams.create([], {}, false, false)).then(function(data) {
    var teamListData = data;
    var conferences = {};
    angular.forEach(teamListData.listGroups, function(group) {
      var conferenceKey = group.conference;
      if (typeof conferences[conferenceKey] == "undefined") {
        conferences[conferenceKey] = {
          name: conferenceKey,
          divisions: {}
        }
      }
      angular.forEach(group.teams, function(team) {
        var divisionKey = team.profile.division;
        if (typeof conferences[conferenceKey].divisions[divisionKey] == "undefined") {
          conferences[conferenceKey].divisions[divisionKey] = []
        }
        conferences[conferenceKey].divisions[divisionKey].push(team.profile)
      })
    });
    $scope.conferences = conferences;
    if (FEEDS_CONFIG.debug) console.log(conferences);
    $timeout(function() {
      if ($location.hash().indexOf("western") != -1) {
        $location.hash("western");
        $location.search([]);
        $anchorScroll()
      }
    }, 500)
  })
}]);
"use strict";
sib.controller("SingleTeamPlayerNewsCtrl", ["$scope", "$location", "$timeout", "Page", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", "SimpleFeedFetcher", function SingleTeamPlayerNewsCtrl($scope, $location, $timeout, Page, StatsFeedFetcher, UrlParams, FEEDS_CONFIG, SimpleFeedFetcher) {
  Page.setTitle("_page.playerNews");
  $scope.teamPageTabbed = "news";
  var seasonTypeArray = ["preseason", "regularSeason", "allStar", "playoffSeason"];
  StatsFeedFetcher.fetch(FEEDS_CONFIG.teamStats, UrlParams.create(["teamCode"], {}, false, false)).then(function(data) {
    Page.showLoading(false);
    $scope.team = data
  });
  StatsFeedFetcher.fetch(FEEDS_CONFIG.teamStanding, UrlParams.create(["teamCode"], {}, false, false)).then(function(data) {
    Page.showLoading(false);
    $scope.teamStanding = data;
    $scope.seasonType = seasonTypeArray[data.season.statsSeasonType - 1]
  })
}]);
"use strict";
sib.controller("TeamRosterCtrl", ["$scope", "$location", "Page", "FEEDS_CONFIG", function TeamRosterCtrl($scope, $location, Page, FEEDS_CONFIG) {
  Page.setTitle("_page.teamRoster");
  $scope.predicate = "profile.lastName";
  $scope.reverse = false;
  $scope.positivelyViewed = true;
  $scope.toggleState = "bio";
  $scope.currentpage = 1;
  $scope.paginate = false;
  $scope.sortTable = function(string, positivelyViewed) {
    if ($scope.predicate != string) {
      if (positivelyViewed == false) {
        $scope.reverse = false
      } else {
        $scope.reverse = true
      }
    } else {
      $scope.reverse = !$scope.reverse
    }
    $scope.predicate = string;
    if (positivelyViewed == false) {
      $scope.positivelyViewed = false
    } else {
      $scope.positivelyViewed = true
    }
  };
  if (!$("html").hasClass("ie8")) {
    $scope.getWidth = function() {
      return $(window).width()
    };
    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
      $scope.window_width = newValue;
      if ($scope.window_width < 700) {
        $scope.paginate = true
      } else {
        $scope.paginate = false
      }
    });
    window.addEventListener("resize", function() {
      if (!$scope.$$phase) {
        $scope.$apply()
      }
    })
  }
  var maxPages = 3;
  var element = document.getElementById("sib-team-roster");
  if (!$("html").hasClass("ie8") && element) {
    if (window.isAndroid) {
      Hammer(element).on("dragleft", function(event) {
        event.preventDefault();
        Hammer(element).trigger("swipeleft", event)
      });
      Hammer(element).on("dragright", function(event) {
        event.preventDefault();
        Hammer(element).trigger("swiperight", event)
      })
    }
    Hammer(element).on("swipeleft", function(event) {
      event.preventDefault();
      if ($scope.currentpage < maxPages) {
        $scope.currentpage++;
        if (!$scope.$$phase) {
          $scope.$apply()
        }
      }
    });
    Hammer(element).on("swiperight", function(event) {
      event.preventDefault();
      if ($scope.currentpage > 1) {
        $scope.currentpage--;
        if (!$scope.$$phase) {
          $scope.$apply()
        }
      }
    })
  }
}]);
"use strict";
sib.controller("TeamScheduleCtrl", ["$scope", "$location", "Page", "FEEDS_CONFIG", function TeamScheduleCtrl($scope, $location, Page, FEEDS_CONFIG) {
  Page.setTitle("_page.teamSchedule");
  $scope.currentpage = 1;
  $scope.paginate = false;
  if (!$("html").hasClass("ie8")) {
    $scope.getWidth = function() {
      return $(window).width()
    };
    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
      $scope.window_width = newValue;
      if ($scope.window_width < 700) {
        $scope.paginate = true
      } else {
        $scope.paginate = false
      }
    });
    window.addEventListener("resize", function() {
      if (!$scope.$$phase) {
        $scope.$apply()
      }
    })
  }
  var maxPages = 3;
  var element = document.getElementById("sib-team-schedule");
  if (!$("html").hasClass("ie8") && element) {
    if (window.isAndroid) {
      Hammer(element).on("dragleft", function(event) {
        event.preventDefault();
        Hammer(element).trigger("swipeleft", event)
      });
      Hammer(element).on("dragright", function(event) {
        event.preventDefault();
        Hammer(element).trigger("swiperight", event)
      })
    }
    Hammer(element).on("swipeleft", function(event) {
      event.preventDefault();
      if ($scope.currentpage < maxPages) {
        $scope.currentpage++;
        if (!$scope.$$phase) {
          $scope.$apply()
        }
      }
    });
    Hammer(element).on("swiperight", function(event) {
      event.preventDefault();
      if ($scope.currentpage > 1) {
        $scope.currentpage--;
        if (!$scope.$$phase) {
          $scope.$apply()
        }
      }
    })
  }
}]);
"use strict";
sib.controller("TeamScheduleSnapshotController", ["$scope", "$location", "$timeout", "Page", "StatsFeedFetcher", "UrlParams", "FEEDS_CONFIG", function PlayerSnapshotCtrl($scope, $location, $timeout, Page, StatsFeedFetcher, UrlParams, FEEDS_CONFIG) {
  $scope.$watch(function() {
    return $location.path()
  }, function() {
    fetchTeamSchedule()
  });

  function fetchTeamSchedule() {
    StatsFeedFetcher.fetch(FEEDS_CONFIG.teamSchedule, UrlParams.create(["teamCode"], {}, true, false)).then(function(data) {
      Page.showLoading(false);
      $scope.teamSchedule = data;
      $scope.nextGame = {};
      $scope.previousGames = [];
      var nextGameCount = 0;
      for (var i = 0; i < $scope.teamSchedule.monthGroups.length; i++) {
        for (var x = 0; x < $scope.teamSchedule.monthGroups[i].games.length; x++) {
          if ($scope.teamSchedule.monthGroups[i].games[x].boxscore.status === "3") {
            $scope.previousGames.push($scope.teamSchedule.monthGroups[i].games[x])
          }
          if ($scope.teamSchedule.monthGroups[i].games[x].boxscore.status === "1" && nextGameCount === 0) {
            $scope.nextGame = $scope.teamSchedule.monthGroups[i].games[x];
            nextGameCount++
          }
        }
      }
      $scope.previousGames = $scope.previousGames.slice(-5)
    });
    Page.setPermitLoading(false)
  }
}]);
"use strict";
sib.controller("TeamSnapshotCtrl", ["$scope", "$location", "$timeout", "FEEDS_CONFIG", function TeamSnapshotCtrl($scope, $location, $timeout, FEEDS_CONFIG) {
  var longTeamNames = ["sixers", "cavaliers", "wizards", "timberwolves", "thunder", "blazers", "warriors", "clippers", "pelicans"];
  var shortTeamNames = ["celtics", "nets", "knicks", "raptors", "bulls", "pistons", "pacers", "bucks", "hawks", "bobcats", "heat", "magic", "nuggets", "jazz", "lakers", "suns", "kings", "mavericks", "rockets", "grizzlies", "spurs"];
  $scope.$watch("teamStanding", function() {
    if ($scope.teamStanding != undefined) {
      var teamCode = $scope.teamStanding.team.profile.code;
      if (longTeamNames.indexOf(teamCode) > 0) {
        $scope.shortName = "false";
        if (FEEDS_CONFIG.debug) console.log($scope.shortName)
      } else {
        $scope.shortName = "true";
        if (FEEDS_CONFIG.debug) console.log($scope.shortName)
      }
      $scope.messageOptions = {
        conf: $scope.teamStanding.team.profile.displayConference,
        rank: $scope.teamStanding.team.standings.confRank
      }
    }
  })
}]);
sib.config(function($provide) {
  $provide.decorator("ngHrefDirective", ["$delegate", "Site", function($delegate, Site) {
    var directive = $delegate[0];
    var compile = directive.compile;
    directive.compile = function(element, tAttrs) {
      var link = compile.apply(this, arguments);
      return function(scope, elem, attrs) {
        link.apply(this, arguments);
        if (Site.hasOwnProperty("aTarget")) {
          elem.attr("target", Site.aTarget)
        }
      }
    };
    return $delegate
  }]);
  $provide.decorator("boHrefDirective", ["$delegate", "Site", function($delegate, Site) {
    var directive = $delegate[0];
    var compile = directive.compile;
    directive.compile = function(element, tAttrs) {
      var link = compile.apply(this, arguments);
      return function(scope, elem, attrs) {
        link.apply(this, arguments);
        if (Site.hasOwnProperty("aTarget")) {
          elem.attr("target", Site.aTarget)
        }
      }
    };
    return $delegate
  }])
});
sib.directive("sib3GameUrls", ["Page", "$filter", "Site", "$window", function(Page, $filter, Site, $window) {
  return {
    restrict: "E",
    scope: {
      game: "="
    },
    link: function(scope, element, attrs) {
      scope.urls = [];
      var types = [];
      var recapExists = false;
      scope.gameId = scope.game.profile ? scope.game.profile.gameId : scope.game.gameProfile.gameId;
      scope.seasonType = scope.game.profile ? scope.game.profile.seasonType : scope.game.gameProfile.seasonType;
      scope.boxscoreStatus = scope.game.boxscore.status;
      var gameUrlConfig = {
        "default": {
          sequence: 20,
          target: "_blank"
        },
        live: {
          sequence: 10,
          target: "_parent"
        },
        "game-stream": {
          sequence: 11,
          target: "_blank"
        },
        "stats-preview": {
          sequence: 12,
          target: "_parent"
        },
        "stats-boxscore": {
          sequence: 13,
          target: "_parent"
        },
        listen: {
          sequence: 14,
          target: "_parent"
        },
        photos: {
          sequence: 15,
          target: "_parent"
        },
        highlights: {
          sequence: 16,
          target: "_parent"
        }
      };
      if (Site.hasOwnProperty("gameUrlConfig")) {
        angular.merge(gameUrlConfig, Site.gameUrlConfig)
      }
      if (angular.isDefined(attrs["types"])) {
        types = attrs["types"].split(",")
      }
      angular.forEach(scope.game.urls, function(url, index, object) {
        var typeKey = url.type.toLowerCase();
        if (isAllowedType(typeKey)) {
          scope.urls.push(url);
          if (typeKey == "recap") {
            recapExists = true
          }
          url.sequence = gameUrlConfig.hasOwnProperty(typeKey) ? gameUrlConfig[typeKey]["sequence"] : gameUrlConfig["default"]["sequence"];
          url.target = gameUrlConfig.hasOwnProperty(typeKey) ? gameUrlConfig[typeKey]["target"] : gameUrlConfig["default"]["target"]
        }
      });
      if (isPregame() && isAllowedType("stats-preview")) {
        scope.urls.push({
          displayText: $filter("i18next")("miniGameSnapshot.link.previewGame"),
          type: "stats-preview",
          value: "/preview/#!/" + scope.gameId
        })
      }
      if (!recapExists && isLiveOrComplete() && isAllowedType("stats-boxscore")) {
        scope.urls.push({
          displayText: $filter("i18next")("miniGameSnapshot.link.boxScore"),
          type: "stats-boxscore",
          value: "/boxscore/#!/" + scope.gameId
        })
      }
      if (isLiveOrComplete() && isAllowedType("stats-playbyplay")) {
        scope.urls.push({
          displayText: $filter("i18next")("boxScorePage.playByPlay"),
          type: "stats-playbyplay",
          value: "/boxscore/playbyplay/#!/" + scope.gameId
        })
      }
      if (isSecondScreenEnabled() && isAllowedType("game-stream") && !isDisableLeagueTeam()) {
        var gameTimestamp = scope.game.time ? scope.game.time : scope.game.profile.utcMillis;
        var gamedate = $filter("date")(gameTimestamp, "yyyy-MM-dd");
        var gamedate2 = $filter("date")(gameTimestamp, "yyyyMMdd");
        var awayTeamAbbr = scope.game.awayTeam ? scope.game.awayTeam.profile ? scope.game.awayTeam.profile.abbr : scope.game.awayTeam.abbr : scope.game.teamOne.profile.abbr;
        var homeTeamAbbr = scope.game.homeTeam ? scope.game.homeTeam.profile ? scope.game.homeTeam.profile.abbr : scope.game.homeTeam.abbr : scope.game.teamTwo.profile.abbr;
        var teamAbbr = awayTeamAbbr + "|" + homeTeamAbbr;
        scope.urls.push({
          displayText: $filter("i18next")("miniGameSnapshot.link.gameStream"),
          type: "game-stream",
          value: "/scores/gamestream/#!/" + gamedate2 + "?ds=single&gameDate=" + gamedate + "&teams=" + teamAbbr
        })
      }
      angular.forEach(scope.urls, function(url, index, object) {});

      function isAllowedType(obj) {
        var contains = false;
        if (angular.isDefined(types)) {
          contains = types.indexOf(obj) > -1
        }
        return contains
      }

      function isPregame() {
        return scope.boxscoreStatus === "1"
      }

      function isLiveOrComplete() {
        return scope.boxscoreStatus === "2" || scope.boxscoreStatus === "3"
      }

      function isSecondScreenEnabled() {
        return Site.hasOwnProperty("gameStream") && (angular.isDefined(Site.gameStream.games) && Site.gameStream.games.indexOf(scope.gameId) > -1 || angular.isDefined(Site.gameStream.seasonTypes) && Site.gameStream.seasonTypes.indexOf(scope.seasonType) > -1)
      }

      function isDisableLeagueTeam() {
        var leagueId = scope.gameId.substr(0, 2);
        var isDisableLeagueTeamTrending = false;
        if (angular.isDefined(Site.gameStream.leagueId) && Site.gameStream.leagueId.length > 0) {
          if (Site.gameStream.leagueId.indexOf(leagueId) < 0) {
            isDisableLeagueTeamTrending = true
          }
        }
        return isDisableLeagueTeamTrending
      }
    },
    template: '<div class="sib3-game-urls game-{{gameId}} url-count-{{urls.length}}">' + '<a bindonce data-ng-repeat="url in urls | orderBy : \'sequence\'" bo-href="url.value" target="{{url.target}}" class="sib3-game-url {{url.type | lowercase}} game-status-{{boxscoreStatus}}" >' + '<span class="{{url.type | lowercase}}-icon"></span>' + "<span>{{url.displayText | i18next}}</span> " + "</a>" + "</div>"
  }
}]);
"use strict";
sib.directive("sibAllStarSchedule", ["SimpleFeedFetcher", function(SimpleFeedFetcher) {
  return {
    restrict: "E",
    scope: {},
    link: function(scope, element, attrs) {
      if (attrs["feedSrc"]) {
        scope.moduleLoading = true;
        SimpleFeedFetcher.get(attrs["feedSrc"]).then(function(data) {
          scope.regions = data.regions.region;
          scope.regions.unshift({
            name: "Select Your Country/Region",
            event_dates: []
          });
          scope.selectedRegion = scope.regions[0].name;
          scope.gameSchedule = [];
          scope.moduleLoading = false;
          scope.$watch(function() {
            return scope.selectedRegion
          }, function(value) {
            angular.forEach(scope.regions, function(region) {
              if (region.name == value) {
                scope.gameSchedule = region.event_date
              }
            })
          })
        })
      } else {
        console.log("schedule feed is not defined")
      }
    },
    templateUrl: "/templates/allstar/game-schedule.html"
  }
}]);
"use strict";
sib.directive("sibArticle", function() {
  return {
    restrict: "E",
    transclude: true,
    replace: true,
    link: function(scope, element, attrs) {
      scope.article = {
        heading: attrs["heading"] ? attrs["heading"] : "",
        subHeading: attrs["subHeading"] ? attrs["subHeading"] : "",
        imgSrc: attrs["imgSrc"] ? attrs["imgSrc"] : "",
        imgCaption: attrs["imgCaption"] ? attrs["imgCaption"] : "",
        hasImage: attrs["imgSrc"] ? attrs["imgSrc"] : ""
      }
    },
    templateUrl: function(elem, attrs) {
      return attrs["template"] ? "/templates/article/" + attrs["template"] + ".html" : "/templates/article/default.html"
    }
  }
});
"use strict";
sib.directive("sibBarChart", function() {
  return {
    restrict: "E",
    transclude: true,
    controller: ["$scope", "$element", function($scope, $element) {}],
    template: '<ul class="data" data-ng-transclude></ul>'
  }
});
"use strict";
sib.directive("sibBar", ["$filter", function($filter) {
  return {
    restrict: "E",
    require: "^sibBarChart",
    transclude: true,
    scope: {
      compareTo: "=",
      val: "=",
      format: "@",
      stats: "=",
      midpoint: "=",
      numberFormat: "="
    },
    link: function link(scope, element, attrs, sibBarChart) {
      function updateBar(newValue) {
        if (typeof newValue !== "number") {
          newValue = Number(newValue)
        }
        if (isNaN(newValue)) {
          return
        }
        scope.displayVal = newValue;
        if (typeof scope.format != "undefined" && scope.format == "pct") {
          if (typeof scope.val == "number") {
            scope.displayVal += "%"
          } else {
            scope.displayVal = ""
          }
        }
        if (typeof scope.numberFormat != "undefined") {
          if (typeof scope.val == "number") {
            scope.displayVal = $filter("number")(scope.val, scope.numberFormat)
          }
        }
        $(element).children().css("width", function() {
          var val = Number(scope.val);
          var avgLinePoint = 42;
          if (typeof scope.midpoint != "undefined") {
            scope.midpoint = Number(scope.midpoint);
            val = scope.val / scope.midpoint * avgLinePoint
          }
          if (val > 100) {
            val = 100
          }
          return val + "%"
        });
        updateHighers()
      }

      function updateHighers() {
        if (typeof scope.val != "undefined") {
          scope.val = Number(scope.val)
        }
        if (typeof scope.compareTo != "undefined") {
          scope.compareTo = Number(scope.compareTo)
        }
        if (scope.val > scope.compareTo) {
          element.addClass("higher");
          element.addClass("theme-nyk");
          element.children().addClass("team-background")
        } else {
          element.removeClass("higher");
          element.removeClass("theme-nyk");
          element.children().removeClass("team-background")
        }
        if (typeof scope.format != "undefined" && scope.format == "pct") {
          if (newValue > scope.compareTo) {
            scope.caret = "up"
          } else if (newValue < scope.compareTo) {
            scope.caret = "down"
          }
        }
      }
      scope.$watch("val", function(newValue) {
        if (isNaN(newValue)) {
          newValue = 0
        }
        updateBar(newValue)
      });
      scope.$watch("compareTo", function(newValue) {
        if (isNaN(newValue)) {
          return
        }
        updateHighers()
      })
    },
    template: '<li><span><i data-ng-show="caret.length" class="icon-caret-{{ caret }}"></i> {{ displayVal}}</span></li>'
  }
}]);
"use strict";
sib.directive("sibBroadcasterScheduleCalendar", ["$filter", "$locale", "$rootScope", function($filter, $locale, $rootScope) {
  return {
    restrict: "E",
    scope: {
      monthIndex: "=",
      calPosition: "=",
      gameData: "=",
      activeDate: "="
    },
    link: function link(scope, element, attrs) {
      if (!scope.monthIndex) {
        scope.monthIndex = 0
      }
      var calendarPosition = "";
      switch (scope.calPosition) {
        case "left":
          calendarPosition = "prev-month-cal";
          break;
        case "right":
          calendarPosition = "next-month-cal";
          break;
        default:
          calendarPosition = "";
          break
      }
      $rootScope.$on("$localeChangeError", function() {
        if ($locale.id != "undefined") {
          setCal();
          scope.$watch("monthIndex", function() {
            setCal()
          })
        }
      });
      $rootScope.$on("$localeChangeSuccess", function() {
        setCal();
        scope.$watch("monthIndex", function() {
          setCal()
        })
      });

      function getTime() {
        var now = new Date;
        var hour = now.getHours();
        var minute = now.getMinutes();
        now = null;
        var ampm = "";
        if (hour >= 12) {
          hour -= 12;
          ampm = "PM"
        } else {
          ampm = "AM";
          hour = hour == 0 ? 12 : hour
        }
        if (minute < 10) {
          minute = "0" + minute
        }
        return hour + ":" + minute + " " + ampm
      }

      function leapYear(year) {
        if (year % 4 == 0) {
          return true
        } else {
          return false
        }
      }

      function getDays(month, year) {
        var ar = new Array(12);
        ar[0] = 31;
        ar[1] = leapYear(year) ? 29 : 28;
        ar[2] = 31;
        ar[3] = 30;
        ar[4] = 31;
        ar[5] = 30;
        ar[6] = 31;
        ar[7] = 31;
        ar[8] = 30;
        ar[9] = 31;
        ar[10] = 30;
        ar[11] = 31;
        return ar[month]
      }

      function getMonthName(month) {
        var ar = new Array(12);
        ar[0] = $locale.DATETIME_FORMATS.MONTH[0];
        ar[1] = $locale.DATETIME_FORMATS.MONTH[1];
        ar[2] = $locale.DATETIME_FORMATS.MONTH[2];
        ar[3] = $locale.DATETIME_FORMATS.MONTH[3];
        ar[4] = $locale.DATETIME_FORMATS.MONTH[4];
        ar[5] = $locale.DATETIME_FORMATS.MONTH[5];
        ar[6] = $locale.DATETIME_FORMATS.MONTH[6];
        ar[7] = $locale.DATETIME_FORMATS.MONTH[7];
        ar[8] = $locale.DATETIME_FORMATS.MONTH[8];
        ar[9] = $locale.DATETIME_FORMATS.MONTH[9];
        ar[10] = $locale.DATETIME_FORMATS.MONTH[10];
        ar[11] = $locale.DATETIME_FORMATS.MONTH[11];
        return ar[month]
      }

      function setCal() {
        now = null;
        var now = new Date;
        var currentDate = now.getDate();
        now.setMonth(now.getMonth() + scope.monthIndex, 1);
        var year = now.getFullYear();
        var month = now.getMonth();
        var monthName = getMonthName(month);
        var date = scope.monthIndex == 0 ? currentDate : null;
        var firstDayInstance = new Date(year, month, 1);
        var firstDay = firstDayInstance.getDay();
        firstDayInstance = null;
        var days = getDays(month, year);
        drawCal(firstDay + 1, days, date, monthName, year, month)
      }

      function drawCal(firstDay, lastDate, date, monthName, year, month) {
        var monthDate = new Date(year, month);
        var monthDateText = $filter("date")(monthDate, "monthYear");
        var text = "";
        text += '<TABLE class="sib-calendar" id="' + calendarPosition + '">';
        text += "<TH COLSPAN=7>";
        text += monthDateText;
        text += "</TH>";
        var openCol = '<TD  class="day_label">';
        var closeCol = "</TD>";
        var weekDay = new Array(7);
        weekDay[0] = $locale.DATETIME_FORMATS.SHORTDAY[0];
        weekDay[1] = $locale.DATETIME_FORMATS.SHORTDAY[1];
        weekDay[2] = $locale.DATETIME_FORMATS.SHORTDAY[2];
        weekDay[3] = $locale.DATETIME_FORMATS.SHORTDAY[3];
        weekDay[4] = $locale.DATETIME_FORMATS.SHORTDAY[4];
        weekDay[5] = $locale.DATETIME_FORMATS.SHORTDAY[5];
        weekDay[6] = $locale.DATETIME_FORMATS.SHORTDAY[6];
        text += '<TR class="day-title">';
        for (var dayNum = 0; dayNum < 7; ++dayNum) {
          text += openCol + weekDay[dayNum] + closeCol
        }
        text += "</TR>";
        var digit = 1;
        var curCell = 1;
        for (var row = 1; row <= Math.ceil((lastDate + firstDay - 1) / 7); ++row) {
          text += "<TR>";
          for (var col = 1; col <= 7; ++col) {
            var todayDate = new Date(year, month, digit);
            var filteredDate = $filter("date")(todayDate, "yyyy-MM-dd");
            var filteredActiveDate = $filter("date")(scope.activeDate, "yyyy-MM-dd");
            if (digit > lastDate) {
              break
            }
            if (curCell < firstDay) {
              text += '<TD class="no_date"></TD>';
              curCell++
            } else {
              if (scope.monthIndex == 0) {
                if (digit == date) {
                  text += '<TD class="active"><a href="/schedule/broadcaster/#!/' + filteredDate + '" class="anchor-unstyled sibCalendarLink">' + digit + "</a></TD>"
                } else {
                  text += '<TD><a href="/schedule/broadcaster/#!/' + filteredDate + '" class="anchor-unstyled sibCalendarLink">' + digit + "</a></TD>"
                }
              } else {
                text += '<TD ><a href="/schedule/broadcaster/#!/' + filteredDate + '" class="anchor-unstyled sibCalendarLink">' + digit + "</a></TD>"
              }
              digit++
            }
          }
          text += "</TR>"
        }
        text += "</TABLE>";
        $(element).html(text)
      }
    }
  }
}]);
sib.directive("sibBroadcasterUrls", function() {
  return {
    restrict: "E",
    scope: {
      broadcasters: "="
    },
    template: '<span bindonce data-ng-repeat="broadcaster in broadcasters" class="broadcasters-list">' + '<a data-ng-if="broadcaster.url!=null" bo-href="broadcaster.url" bo-class="broadcaster.type | lowercase"><span bo-text="broadcaster.name"></span></a>' + '<span data-ng-if="broadcaster.url==null" bo-text="broadcaster.name" bo-class="broadcaster.type | lowercase"></span>' + "</span>"
  }
});
"use strict";
sib.directive("sibCalendar", ["$filter", "$locale", "$rootScope", function($filter, $locale, $rootScope) {
  return {
    restrict: "E",
    scope: {
      monthIndex: "=",
      calPosition: "=",
      gameData: "=",
      activeDate: "="
    },
    link: function link(scope, element, attrs) {
      if (!scope.monthIndex) {
        scope.monthIndex = 0
      }
      var calendarPosition = "";
      switch (scope.calPosition) {
        case "left":
          calendarPosition = "prev-month-cal";
          break;
        case "right":
          calendarPosition = "next-month-cal";
          break;
        default:
          calendarPosition = "";
          break
      }
      $rootScope.$on("$localeChangeError", function() {
        if ($locale.id != "undefined") {
          setCal();
          scope.$watch("monthIndex", function() {
            setCal()
          })
        }
      });
      $rootScope.$on("$localeChangeSuccess", function() {
        setCal();
        scope.$watch("monthIndex", function() {
          setCal()
        })
      });

      function getTime() {
        var now = new Date;
        var hour = now.getHours();
        var minute = now.getMinutes();
        now = null;
        var ampm = "";
        if (hour >= 12) {
          hour -= 12;
          ampm = "PM"
        } else {
          ampm = "AM";
          hour = hour == 0 ? 12 : hour
        }
        if (minute < 10) {
          minute = "0" + minute
        }
        return hour + ":" + minute + " " + ampm
      }

      function leapYear(year) {
        if (year % 4 == 0) {
          return true
        } else {
          return false
        }
      }

      function getDays(month, year) {
        var ar = new Array(12);
        ar[0] = 31;
        ar[1] = leapYear(year) ? 29 : 28;
        ar[2] = 31;
        ar[3] = 30;
        ar[4] = 31;
        ar[5] = 30;
        ar[6] = 31;
        ar[7] = 31;
        ar[8] = 30;
        ar[9] = 31;
        ar[10] = 30;
        ar[11] = 31;
        return ar[month]
      }

      function getMonthName(month) {
        var ar = new Array(12);
        ar[0] = $locale.DATETIME_FORMATS.MONTH[0];
        ar[1] = $locale.DATETIME_FORMATS.MONTH[1];
        ar[2] = $locale.DATETIME_FORMATS.MONTH[2];
        ar[3] = $locale.DATETIME_FORMATS.MONTH[3];
        ar[4] = $locale.DATETIME_FORMATS.MONTH[4];
        ar[5] = $locale.DATETIME_FORMATS.MONTH[5];
        ar[6] = $locale.DATETIME_FORMATS.MONTH[6];
        ar[7] = $locale.DATETIME_FORMATS.MONTH[7];
        ar[8] = $locale.DATETIME_FORMATS.MONTH[8];
        ar[9] = $locale.DATETIME_FORMATS.MONTH[9];
        ar[10] = $locale.DATETIME_FORMATS.MONTH[10];
        ar[11] = $locale.DATETIME_FORMATS.MONTH[11];
        return ar[month]
      }

      function setCal() {
        var now = new Date;
        var currentDate = now.getDate();
        now.setMonth(now.getMonth() + scope.monthIndex, 1);
        var year = now.getFullYear();
        var month = now.getMonth();
        var monthName = getMonthName(month);
        var date = scope.monthIndex == 0 ? currentDate : null;
        var firstDayInstance = new Date(year, month, 1);
        var firstDay = firstDayInstance.getDay();
        firstDayInstance = null;
        var days = getDays(month, year);
        drawCal(firstDay + 1, days, date, monthName, year, month)
      }

      function drawCal(firstDay, lastDate, date, monthName, year, month) {
        var monthDate = new Date(year, month);
        var monthDateText = $filter("date")(monthDate, "monthYear");
        var filteredMonthDate = $filter("date")(monthDate, "MM/yyyy");
        var text = "";
        text += '<TABLE class="sib-calendar" id="' + calendarPosition + '">';
        text += "<TH COLSPAN=7>";
        text += '<a href="/schedule/#!/' + filteredMonthDate + '"><b>';
        text += monthDateText;
        text += "</b></a>";
        text += "</TH>";
        var openCol = '<TD  class="day_label">';
        var closeCol = "</TD>";
        var weekDay = new Array(7);
        weekDay[0] = $locale.DATETIME_FORMATS.SHORTDAY[0];
        weekDay[1] = $locale.DATETIME_FORMATS.SHORTDAY[1];
        weekDay[2] = $locale.DATETIME_FORMATS.SHORTDAY[2];
        weekDay[3] = $locale.DATETIME_FORMATS.SHORTDAY[3];
        weekDay[4] = $locale.DATETIME_FORMATS.SHORTDAY[4];
        weekDay[5] = $locale.DATETIME_FORMATS.SHORTDAY[5];
        weekDay[6] = $locale.DATETIME_FORMATS.SHORTDAY[6];
        text += '<TR class="day-title">';
        for (var dayNum = 0; dayNum < 7; ++dayNum) {
          text += openCol + weekDay[dayNum] + closeCol
        }
        text += "</TR>";
        var digit = 1;
        var curCell = 1;
        for (var row = 1; row <= Math.ceil((lastDate + firstDay - 1) / 7); ++row) {
          text += "<TR>";
          for (var col = 1; col <= 7; ++col) {
            var todayDate = new Date(year, month, digit);
            var filteredDate = $filter("date")(todayDate, "yyyy-MM-dd");
            var filteredActiveDate = $filter("date")(scope.activeDate, "yyyy-MM-dd");
            if (digit > lastDate) break;
            if (curCell < firstDay) {
              text += '<TD class="no_date"></TD>';
              curCell++
            } else {
              if (scope.monthIndex == 0) {
                if (digit == date) {
                  text += '<TD class="active"><a href="/scores/#!/' + filteredDate + '" class="anchor-unstyled sibCalendarLink">' + digit + "</a></TD>"
                } else {
                  text += '<TD><a href="/scores/#!/' + filteredDate + '" class="anchor-unstyled sibCalendarLink">' + digit + "</a></TD>"
                }
              } else {
                text += '<TD><a href="/scores/#!/' + filteredDate + '" class="anchor-unstyled sibCalendarLink">' + digit + "</a></TD>"
              }
              digit++
            }
          }
          text += "</TR>"
        }
        text += "</TABLE>";
        $(element).html(text)
      }
    }
  }
}]);
"use strict";
sib.directive("sibContentList", ["Page", "SimpleFeedFetcher", function(Page, SimpleFeedFetcher) {
  return {
    restrict: "E",
    scope: {},
    link: function(scope, element, attrs) {
      var listUrl = attrs["listUrl"];
      var linkBase = attrs["linkBase"];
      if (angular.isUndefined(linkBase)) {
        linkBase = "/article.html#!"
      }
      scope.gotoUrl = function(article) {
        if (angular.isDefined(article.ListItemLink)) {
          window.location = /^http/.test(article.ListItemLink) ? article.ListItemLink : linkBase + article.ListItemLink
        }
      };
      SimpleFeedFetcher.get(listUrl).then(function(data) {
        scope.articles = data.ListItems.slice(0, attrs["maxItems"] || 100);
        Page.setLoading(false)
      })
    },
    templateUrl: "/templates/content/news.html"
  }
}]);
"use strict";
sib.directive("sibContentSlider", ["$timeout", "FEEDS_CONFIG", function($timeout, FEEDS_CONFIG) {
  return {
    restrict: "E",
    transclude: true,
    scope: false,
    controller: function($element, $attrs, $scope) {
      var controller = this;
      var animationInProgress = false;
      var animationSpeed = 500;
      var currentOffset = 0;
      var localDebug = true;
      var $viewport = $("sib-content-slider .viewport");
      var $viewportContent = $("sib-content-slider .viewport-content");
      var itemCount = $("sib-content-slider .viewport-content .content-item").length;
      var viewportWidth = "99999";
      var contentItemWidth = 0;
      var contentWidth = 0;
      var slideFactor = .8;
      var slidePix = 100;
      $scope.isNoMoreReverseContent = true;

      function onBeginAnimation() {
        animationInProgress = true
      }

      function onEndAnimation() {
        animationInProgress = false
      }
      this.setContentWidth = function(width, count) {
        contentItemWidth = width;
        itemCount = count
      };
      this.setSlideFactor = function(factor) {
        slideFactor = factor;
        slidePix = slideFactor * viewportWidth
      };
      this.setAnimationSpeed = function(speed) {
        animationSpeed = factor
      };

      function getItemRightEdge(itemIdx) {
        return itemIdx * contentItemWidth + contentItemWidth
      }

      function getItemLeftEdge(itemIdx) {
        return itemIdx * contentItemWidth
      }
      this.calculateViewport = function() {
        var sliderWidth = $("sib-content-slider .content-slider").outerWidth();
        debug("sliderWidth: " + sliderWidth);
        viewportWidth = sliderWidth - $("sib-content-slider .control").outerWidth() * 2;
        $viewport.width(viewportWidth);
        contentWidth = contentItemWidth * (itemCount == 0 ? 1 : itemCount);
        slidePix = slideFactor * viewportWidth
      };
      $scope.reverse = function() {
        slide(slidePix)
      };
      $scope.forward = function() {
        slide(-slidePix)
      };
      this.isItemOffScreenRight = function(itemIdx) {
        var rightEdge = getItemRightEdge(itemIdx);
        var isOffScreen = rightEdge > viewportWidth;
        debug("isItemOffScreenRight rightEdge:" + rightEdge + " width:" + viewportWidth + " isOffScreen:" + isOffScreen);
        return isOffScreen
      };
      this.alignItemToRightEdge = function(itemIdx) {
        var rightEdge = getItemRightEdge(itemIdx);
        var target = rightEdge - viewportWidth;
        debug("aligningItemToRight rightEdge:" + rightEdge + " width:" + viewportWidth);
        slide(-target)
      };
      this.alignItemToLeftEdge = function(itemIdx) {
        var target = getItemLeftEdge(itemIdx);
        slideTo(target)
      };

      function slideTo(offset) {
        onBeginAnimation();
        $viewportContent.animate({
          left: offset + "px"
        }, animationSpeed, "swing", onEndAnimation);
        currentOffset = offset;
        $scope.isNoMoreReverseContent = isNoMoreReverseContent();
        $scope.isNoMoreForwardContent = isNoMoreForwardContent()
      }

      function slide(deltaOffset) {
        var requestedOffset = currentOffset + deltaOffset;
        debug("a. current offset: " + currentOffset + " requestedOffset: " + requestedOffset + " deltaOffset: " + deltaOffset);
        if (requestedOffset > 0 && currentOffset < 0) {
          requestedOffset = 0
        }
        if (currentOffset == 0 && requestedOffset > 0) {
          debug("reached start of content");
          onEndAnimation()
        } else if (Math.abs(requestedOffset) >= contentWidth || contentWidth < viewportWidth) {
          debug("reached end of content");
          onEndAnimation()
        } else {
          onBeginAnimation();
          $viewportContent.animate({
            left: requestedOffset + "px"
          }, animationSpeed, "swing", onEndAnimation);
          currentOffset = requestedOffset
        }
        $scope.isNoMoreReverseContent = isNoMoreReverseContent();
        $scope.isNoMoreForwardContent = isNoMoreForwardContent()
      }

      function isNoMoreReverseContent() {
        return currentOffset == 0
      }

      function isNoMoreForwardContent() {
        var requestedOffset = currentOffset + -slidePix;
        return Math.abs(requestedOffset) >= contentWidth || contentWidth < viewportWidth
      }

      function getWindowWidth() {
        return $(window).innerWidth()
      }
      $scope.$watch(getWindowWidth, function(newValue, oldValue) {
        debug("contentSlider window watch newValue: " + newValue + " oldValue: " + oldValue);
        if (newValue != oldValue) {
          controller.calculateViewport()
        }
      });
      window.addEventListener("resize", function() {
        $timeout(function() {
          $scope.$apply()
        })
      });

      function debug(s) {
        if (FEEDS_CONFIG.debug || localDebug) {
          console.log(s)
        }
      }

      function swipeLeft(event) {
        debug("swipe left");
        event.preventDefault();
        if (!animationInProgress) {
          onBeginAnimation();
          $timeout(function() {
            $scope.forward()
          })
        }
      }

      function swipeRight(event) {
        debug("swipe right");
        event.preventDefault();
        if (!animationInProgress) {
          onBeginAnimation();
          $timeout(function() {
            $scope.reverse()
          })
        }
      }
      var element = document.querySelector("sib-content-slider .content-slider .viewport");
      if (angular.isDefined(element)) {
        if (window.isAndroid) {
          Hammer(element).on("dragleft", function(event) {
            swipeLeft(event)
          });
          Hammer(element).on("dragright", function(event) {
            swipeRight(event)
          })
        } else {
          Hammer(element).on("swipeleft", function(event) {
            swipeLeft(event)
          });
          Hammer(element).on("swiperight", function(event) {
            swipeRight(event)
          })
        }
      }
    },
    link: function postLink(scope, element, attrs) {},
    templateUrl: function(elem, attrs) {
      return "/templates/slider/contentslider.html"
    }
  }
}]);
sib.directive("sibDialogFbshare", ["$window", "$rootScope", function($window, $rootScope) {
  return {
    restrict: "A",
    scope: {
      fbshare: "=?"
    },
    link: function(scope, element, attrs) {
      var icon = typeof attrs["icon"] == null ? "icon-share-alt" : attrs["icon"];
      var title = "NBA Second Screen";
      var description = "A real-time digital stream of the best social posts, statistics, photos, GIFs and videos from every NBA Playoff and Finals game, direct from the NBA.";
      var appId = "373035032722929";
      var url = "https://www.facebook.com/dialog/feed?app_id=" + appId + "&link=" + encodeURIComponent(window.location.href) + "&name=" + encodeURIComponent(title) + "&description=" + encodeURIComponent(description) + "&caption=" + encodeURIComponent("NBA") + "&redirect_uri=" + encodeURIComponent("http://www.facebook.com/") + "&picture=" + encodeURIComponent("http://mi.nba.com/media/img/gamestream/second_screen_fb_promo.png") + "&display=popup";
      element.html("<a href='" + url + "' target='_blank'><div class='fb-share-circle'><i class=" + icon + " /></div></a>");
      element.on("click", function(event) {
        event.preventDefault();
        var ww = $(window).width();
        var wh = $(window).height();
        var width = ww > 640 ? 500 : 300;
        var height = ww > 640 ? 400 : 240;
        var left = (ww - width) / 2;
        var top = (wh - height) / 2;
        window.open(url, "Share Second Screen on Facebook", "height=" + height + ", width=" + width + ", left=" + left + ", top=" + top + ", toolbar=0, location=0, menubar=0, directories=0, scrollbars=1, resizable=1")
      })
    }
  }
}]);
sib.directive("sibDialogTwittershare", ["$window", function($window) {
  return {
    restrict: "A",
    scope: {
      tweet: "=?"
    },
    link: function(scope, element, attrs) {
      if (!$window.twttr) {
        $.getScript("//platform.twitter.com/widgets.js", function() {
          renderTweetButton()
        })
      } else {
        renderTweetButton()
      }
      var watchAdded = false;

      function renderTweetButton() {
        if (!!attrs.tweet && !scope.tweet && !watchAdded) {
          watchAdded = true;
          var unbindWatch = scope.$watch("tweet", function(newValue, oldValue) {
            if (newValue) {
              renderTweetButton();
              unbindWatch()
            }
          });
          return
        } else {
          if (scope.tweet.type == "host_comment" || scope.tweet.type == "image" || scope.tweet.type == "video") {
            var viaParm = "";
            if (scope.tweet.type != "host_comment") {
              var name = !!scope.tweet.author_name ? scope.tweet.author_name : false;
              viaParm = !!name ? "&via=" + encodeURIComponent(name) : ""
            }
            element.html('<a href="https://twitter.com/share?url=' + encodeURIComponent(window.location.href) + viaParm + '" target="_blank" ><div class="tweet-share-circle"><i class="icon-twitter" /></div></a>');
            element.on("click", function(event) {
              event.preventDefault();
              var ww = $(window).width();
              var wh = $(window).height();
              var width = ww > 640 ? 500 : 300;
              var height = ww > 640 ? 400 : 240;
              var left = (ww - width) / 2;
              var top = (wh - height) / 2;
              var url = element.children("a:first-child").attr("href");
              window.open(url, "twitter", "height=" + height + ",width=" + width + ",left=" + left + ", top=" + top + ", toolbar=0, location=0, menubar=0, directories=0, resizable=1, scrollbars=1")
            })
          } else if (scope.tweet.type == "guest_comment") {
            element.html('<div class="dialog-single-button">' + '<a href="https://twitter.com/intent/tweet?in_reply_to=' + scope.tweet.tweet_data.id + '"  target="_blank" >' + '<div class="tweet-share-circle"><i class="icon-reply"></i></div>' + "</a>" + "</div>" + '<div class="dialog-single-button">' + '<a href="https://twitter.com/intent/retweet?tweet_id=' + scope.tweet.tweet_data.id + '"  target="_blank" >' + '<div class="tweet-share-circle"><i class="icon-retweet"></i></div>' + "</a>" + "</div>" + '<div class="dialog-single-button">' + '<a href="https://twitter.com/intent/favorite?tweet_id=' + scope.tweet.tweet_data.id + '"  target="_blank" >' + '<div class="tweet-share-circle"><i class="icon-star"></i></div>' + "</a>" + "</div>")
          }
          $window.twttr.widgets.load(element.parent()[0])
        }
      }
    }
  }
}]);
"use strict";
sib.directive("sibFallbackSrc", function() {
  return {
    link: function postLink(scope, element, attrs) {
      var count = 0;
      scope.$watch(function() {
        return attrs["ngSrc"]
      }, function(value) {
        if (!value) {
          fallback()
        }
      });
      element.bind("error", function() {
        fallback()
      });

      function fallback() {
        if (count < 1) {
          element.attr("src", attrs.sibFallbackSrc);
          element.parent().attr("href", attrs.fallbackHref);
          count++
        }
      }
    }
  }
});
"use strict";
sib.directive("sibGameList", ["SimpleFeedFetcher", "$filter", "$interval", "$http", function(SimpleFeedFetcher, $filter, $interval, $http) {
  return {
    require: "^sibListSlider",
    restrict: "E",
    link: function(scope, element, attrs, sliderController) {
      var intervalId;
      var limit = 18;
      var pollingInterval = 3 * 60 * 1e3;
      var pageAnimationSpeed = 500;
      var categoryAnimationSpeed = 1500;
      var endpoints = {
        NBA: "http://api.massrelevance.com/NBA_Interactive/gt_latestfeed.json?callback=JSON_CALLBACK&limit=" + limit,
        "ALL NBA": "http://api.massrelevance.com/NBA_Interactive/gt_latestfeed_all.json?callback=JSON_CALLBACK&limit=" + limit
      };
      var endpoint = endpoints.NBA;
      var types = ["hashtags", "urls", "user_mentions", "media"];
      scope.$watch(function() {
        return $(document).width()
      }, function(newValue, oldValue) {
        var ww = newValue;
        sliderController.adjustViewport(ww, 30, 175, 1);
        sliderController.adjustViewport(ww, 175, 322, 2);
        sliderController.adjustViewport(ww, 322, 470, 3);
        sliderController.adjustViewport(ww, 470, 620, 4);
        sliderController.adjustViewport(ww, 620, 770, 5);
        sliderController.adjustViewport(ww, 770, Infinity, 6);
        sliderController.calculateViewport()
      });

      function getEntityHtml(text, obj, type) {
        var oldText = text.substring(obj.indices[0], obj.indices[1]);
        var anchorText = "";
        if (type == "user_mentions") {
          anchorText += '<a class="twitter-link" href="http://twitter.com/' + obj.screen_name + '" target="_blank">'
        } else if (type == "urls") {
          anchorText += '<a class="twitter-link" href="' + obj.expanded_url + '" target="_blank">'
        } else if (type == "hashtags") {
          anchorText += '<a class="twitter-link" href="http://twitter.com/search?q=%23' + obj.text + '&src=hash" target="_blank">'
        } else if (type == "media") {
          anchorText += '<a class="twitter-link" href="' + obj.expanded_url + '" target="_blank">'
        }
        anchorText += oldText + (anchorText.length > 0 ? "</a>" : "");
        var obj = {
          oldText: oldText,
          newText: anchorText
        };
        return obj
      }

      function formatTweet(item) {
        item.retweeted = item.retweeted_status ? true : false;
        var itemObj = item.retweeted ? item.retweeted_status.entities : item.entities;
        var textEdit = item.retweeted ? item.retweeted_status.text : item.text;
        item.author = item.retweeted ? item.retweeted_status.user : item.user;
        item.displayText = textEdit;
        var textArray = [];
        for (var key in itemObj) {
          if (itemObj.hasOwnProperty(key) && types.indexOf(key) >= 0) {
            angular.forEach(itemObj[key], function(obj) {
              textArray.push(getEntityHtml(textEdit, obj, key))
            })
          }
        }
        angular.forEach(textArray, function(obj) {
          item.displayText = item.displayText.replace(obj.oldText, obj.newText)
        });
        if (item.displayText.match(/^\./)) {
          item.displayText = item.displayText.substring(1)
        }
      }

      function addDisplayDate(item) {
        var date = new Date(item.created_at.replace(/^\w+ (\w+) (\d+) ([\d:]+) \+0000 (\d+)$/, "$1 $2 $4 $3 UTC")).getTime();
        var currentDate = (new Date).getTime();
        var diff = currentDate - date;
        var sec = 1e3;
        var min = 60 * sec;
        var hour = 60 * min;
        var day = 24 * hour;
        var week = 7 * day;
        if (diff / min < 60) {
          item.displayDate = Math.round(diff / min) + "m"
        } else if (diff / hour < 24) {
          item.displayDate = Math.round(diff / hour) + "h"
        } else if (diff / day < 7) {
          item.displayDate = Math.round(diff / day) + "d"
        } else {
          item.displayDate = Math.round(diff / week) + "w"
        }
      }

      function load() {
        var promise = SimpleFeedFetcher.get(endpoint, "jsonp").then(function(data) {
          angular.forEach(data, function(item) {
            addDisplayDate(item);
            formatTweet(item)
          });
          scope.data = data;
          sliderController.setItemCount(data.length);
          intervalId = $interval(function() {
            load()
          }, pollingInterval)
        })
      }
      element.on("$destroy", function() {
        $interval.cancel(intervalId)
      });
      load();
      sliderController.setAnimationSpeed(pageAnimationSpeed)
    },
    templateUrl: "/templates/slider/gamelist.html"
  }
}]);
sib.directive("sibGamestreamPost", ["$window", function($window) {
  var urlArray = {
    host_comment: "/templates/gamestream/hostcomment.html",
    image: "/templates/gamestream/image.html",
    video: "/templates/gamestream/youtube.html",
    guest_comment: "/templates/gamestream/twitter.html",
    instagram: "/templates/gamestream/instagram.html",
    facebook: "/templates/gamestream/facebook.html"
  };
  return {
    restrict: "E",
    scope: {
      item: "="
    },
    link: function(scope, element, attrs) {
      var item = scope.item;
      if (angular.isDefined(item)) {
        scope.isOdd = attrs.isEven == "true" ? true : false;
        scope.isLarge = $window.innerWidth > 992 ? true : false;
        scope.isSmall = $window.innerWidth < 321 ? true : false;
        scope.isTwoColumns = $window.innerWidth > 767 ? true : false;
        if (item.type == "video") {
          scope.isYoutube = item.raw_data.type == "youtube" ? true : false;
          scope.isVine = item.raw_data.hasOwnProperty("vine_data") ? true : false
        } else if (item.type == "facebook") {
          scope.isLink = item.raw_data.dataType == "link" ? true : false;
          scope.notLink = item.raw_data.dataType != "link" ? true : false;
          scope.isPhoto = item.raw_data.dataType == "photo" ? true : false;
          scope.isVideo = item.raw_data.dataType == "video" ? true : false
        } else if (item.type == "host_comment") {
          scope.isGif = item.tag_category.indexOf("autogif") >= 0 ? true : false;
          scope.isModerator = item.tag_category.indexOf("moderator") >= 0 ? true : false;
          scope.isAutophoto = item.tag_category.indexOf("autophoto") >= 0 ? true : false;
          if (scope.isAutophoto) {
            scope.autophotoItem = angular.fromJson(item.raw_data.raw_data);
            if (scope.isLarge) {
              scope.autophotoItemImage = scope.autophotoItem.large
            } else if (scope.isSmall) {
              scope.autophotoItemImage = scope.autophotoItem.small
            } else {
              scope.autophotoItemImage = scope.autophotoItem.medium
            }
          }
          scope.isAutovideo = item.tag_category.indexOf("autovideo") >= 0 ? true : false;
          if (item.raw_data != null) {
            scope.isHostcommentRawdata = item.raw_data.raw_data != "" ? true : false
          }
        }
        scope.fileLocation = urlArray[scope.item.type]
      }
    },
    template: '<div ng-include="fileLocation"></div>'
  }
}]);
sib.directive("sibGameUrls", ["Page", "$filter", "$location", "Site", function(Page, $filter, $location, Site) {
  return {
    restrict: "E",
    scope: {
      game: "="
    },
    link: function(scope, element, attrs) {
      var gameUrlConfig = {
        "default": {
          sequence: 20,
          target: "_blank"
        },
        live: {
          sequence: 10,
          target: "_parent"
        },
        "stats-preview": {
          sequence: 12,
          target: "_parent"
        },
        "stats-boxscore": {
          sequence: 13,
          target: "_parent"
        },
        listen: {
          sequence: 14,
          target: "_parent"
        },
        photos: {
          sequence: 15,
          target: "_parent"
        },
        highlights: {
          sequence: 16,
          target: "_parent"
        },
        "game-stream": {
          sequence: 17,
          target: "_parent"
        }
      };
      if (Site.hasOwnProperty("gameUrlConfig")) {
        $.extend(true, gameUrlConfig, Site.gameUrlConfig)
      }
      scope.urls = [];
      angular.copy(scope.game.urls, scope.urls);
      scope.gameId = scope.game.profile ? scope.game.profile.gameId : scope.game.gameProfile.gameId;
      scope.seasonType = scope.game.profile ? scope.game.profile.seasonType : scope.game.gameProfile.seasonType;
      if (angular.isUndefined(gameUrlConfig.preview) || gameUrlConfig.preview.showGameUrl == true) {
        scope.urls.push({
          displayText: $filter("i18next")("miniGameSnapshot.link.previewGame"),
          type: "stats-preview",
          value: "/preview/#!/" + scope.gameId
        })
      }
      if (angular.isUndefined(gameUrlConfig.boxScore) || gameUrlConfig.boxScore.showGameUrl == true) {
        scope.urls.push({
          displayText: $filter("i18next")("miniGameSnapshot.link.boxScore"),
          type: "stats-boxscore",
          value: "/boxscore/#!/" + scope.gameId
        })
      }
      if (angular.isUndefined(gameUrlConfig.playByPlay) || gameUrlConfig.playByPlay.showGameUrl == true) {
        scope.urls.push({
          displayText: $filter("i18next")("boxScorePage.playByPlay"),
          type: "stats-playbyplay",
          value: "/boxscore/playbyplay/#!/" + scope.gameId
        })
      }
      if (Site.hasOwnProperty("gameStream") && !isDisableLeagueTeam()) {
        if (Site.gameStream.games && Site.gameStream.games.indexOf(scope.gameId) > -1 || Site.gameStream.seasonTypes && Site.gameStream.seasonTypes.indexOf(scope.seasonType) > -1) {
          if (angular.isUndefined(gameUrlConfig.gameStream) || gameUrlConfig.gameStream.showGameUrl == true) {
            var gameTimestamp = scope.game.time ? scope.game.time : scope.game.profile.utcMillis;
            var gamedate = $filter("date")(gameTimestamp, "yyyy-MM-dd");
            var gamedate2 = $filter("date")(gameTimestamp, "yyyyMMdd");
            var awayTeamAbbr = scope.game.awayTeam ? scope.game.awayTeam.profile ? scope.game.awayTeam.profile.abbr : scope.game.awayTeam.abbr : scope.game.teamOne.profile.abbr;
            var homeTeamAbbr = scope.game.homeTeam ? scope.game.homeTeam.profile ? scope.game.homeTeam.profile.abbr : scope.game.homeTeam.abbr : scope.game.teamTwo.profile.abbr;
            var teamAbbr = awayTeamAbbr + "|" + homeTeamAbbr;
            scope.urls.push({
              displayText: $filter("i18next")("miniGameSnapshot.link.gameStream"),
              type: "game-stream",
              value: "/scores/gamestream/#!/" + gamedate2 + "?ds=single&gameDate=" + gamedate + "&teams=" + teamAbbr
            })
          }
        }
      }
      scope.hasRecap = false;
      scope.types = "";
      angular.forEach(scope.urls, function(url, index, object) {
        url.sequence = gameUrlConfig.hasOwnProperty(url.type.toLowerCase()) ? gameUrlConfig[url.type.toLowerCase()]["sequence"] : gameUrlConfig["default"]["sequence"];
        url.target = gameUrlConfig.hasOwnProperty(url.type.toLowerCase()) ? gameUrlConfig[url.type.toLowerCase()]["target"] : gameUrlConfig["default"]["target"];
        if (url.type == "Recap") {
          scope.hasRecap = true
        }
        if (gameUrlConfig.hasOwnProperty(url.type.toLowerCase())) {
          if (angular.isUndefined(gameUrlConfig[url.type.toLowerCase()]) || gameUrlConfig[url.type.toLowerCase()].showGameUrl == false) {
            object.splice(index, 1)
          }
        }
      });
      scope.open = function($event, url) {
        var ua = window.navigator.userAgent.toLowerCase();
        var isIe = ua.indexOf("msie ") > -1;
        var notChrome = !(ua.indexOf("chrome") > -1);
        var onGameStream = window.location.href.indexOf("gamestream") > -1;
        var paramString = "";
        var urlParameters = ["showHeader", "showNav", "showFooter"];
        angular.forEach($location.search(), function(value, key) {
          if (urlParameters.indexOf(key) > -1) {
            paramString = paramString + "&" + key + "=" + value
          }
        });
        if (onGameStream) {
          if (notChrome) {
            window.location = url + paramString;
            window.location.reload()
          } else {
            window.location = url;
            window.location.reload()
          }
        } else {
          if (isIe) {
            $event.preventDefault();
            window.location.href = url + paramString
          } else {
            window.location = url;
            window.location.reload()
          }
        }
      };

      function isDisableLeagueTeam() {
        var leagueId = scope.gameId.substr(0, 2);
        var isDisableLeagueTeamTrending = false;
        if (angular.isDefined(Site.gameStream.leagueId) && Site.gameStream.leagueId.length > 0) {
          if (Site.gameStream.leagueId.indexOf(leagueId) < 0) {
            isDisableLeagueTeamTrending = true
          }
        }
        return isDisableLeagueTeamTrending
      }
    },
    template: '<div class="game-url-{{gameId}}">' + "<span bindonce data-ng-repeat=\"url in urls | orderBy : 'sequence'\">" + "<a bo-href=\"url.value\" target=\"{{url.target}}\" data-ng-click=\"open($event,url.value)\" class=\"game-url {{url.type | lowercase}}\" data-ng-class=\"{'pre-game': ( game.boxscore.status=='1' || !game.boxscore), 'in-game': game.boxscore.status=='2', 'post-game':game.boxscore.status=='3', 'has-recap': hasRecap==true}\"><i bo-show=\"url.type == 'Live' || url.type == 'leaguepass' \" class=\"icon-play-circle\"></i><span>{{url.displayText | i18next}}</span> </a>" + "</span>" + "</div>"
  }
}]);
"use strict";
sib.directive("sibHiddenSocialIcons", function() {
  return {
    scope: {
      label: "@",
      smLabel: "@"
    },
    link: function postLink(scope, element, attrs) {
      scope.drawerShowing = false;
      scope.slideDrawer = function() {
        scope.drawerShowing = !scope.drawerShowing ? true : false
      }
    }
  }
});
"use strict";
sib.directive("sibHotzoneChart", ["$rootScope", "$timeout", "$filter", "FEEDS_CONFIG", function($rootScope, $timeout, $filter, FEEDS_CONFIG) {
  return {
    restrict: "E",
    require: "^sibHotzoneContainer",
    scope: {
      teamData: "=",
      averageData: "=",
      template: "@",
      teamAbbr: "="
    },
    link: function postLink(scope, element, attrs, sibHotzoneContainer) {
      var paper;
      var activeChartType = attrs.template || "basic";
      var labelSmall = 22;
      var labelLarge = 28;
      var opacityLow = .6;
      var opacityHigh = 1;
      var chartTypes = {
        basic: [0, 0, 529, 490.9, {
          type: "path",
          path: "M 251.5 35.5 C 272.2 35.5 289.4 20 292.1 0 L 210.9 0 C 213.6 20 230.8 35.5 251.5 35.5Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 184.5 190.4 L 318.5 190.4 L 318.5 253.4 L 184.5 253.4 L 184.5 190.4",
          fill: "#f2f2f2",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "0",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 192.5 0 L 192.5 154.7 C 203.8 133.7 226 119.4 251.5 119.4 C 277 119.4 299.2 133.7 310.5 154.7 L 310.5 0 L 296.2 0 C 293.4 22.2 274.5 39.5 251.5 39.5 C 228.6 39.5 209.6 22.2 206.8 0 L 192.5 0Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 251.5 127.4 C 220.3 127.4 194.7 151.8 192.7 182.4 L 310.4 182.4 C 308.3 151.8 282.7 127.4 251.5 127.4Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 38 0 L 38 184 C 41.7 189.4 59.9 214.4 91.7 239.1 C 124.5 264.6 179 294.9 252.5 294.9 C 326.1 294.9 379.9 264.5 412.1 238.9 C 443.1 214.2 460.5 189.4 464 184.1 L 464 0 L 334.5 0 L 334.5 190.4 L 318.5 190.4 L 318.4 190.4 C 316.3 225.5 287.1 253.4 251.5 253.4 C 215.9 253.4 186.7 225.5 184.6 190.4 L 184.5 190.4 L 166.5 190.4 L 166.5 0 L 38 0Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 174.5 0 L 184.5 0 L 184.5 182.4 L 174.5 182.4 L 174.5 0",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 251.5 245.4 C 282.7 245.4 308.3 221.1 310.4 190.4 L 192.7 190.4 C 194.7 221.1 220.3 245.4 251.5 245.4Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 318.5 0 L 326.5 0 L 326.5 182.4 L 318.5 182.4 L 318.5 0",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 0 0 L 29 0 L 29 183.4 L 0 183.4 L 0 0",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 0 465.9 L 504 465.9 L 504 187.4 L 472.6 187.4 L 472.3 187.8 C 471.6 189 453.7 217.3 417.7 246 C 384.4 272.4 328.7 303.9 252.5 303.9 C 176.3 303.9 119.8 272.4 85.9 246 C 49.1 217.3 30.5 189.1 29.7 187.9 L 29.4 187.4 L 0 187.4 L 0 465.9Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 473 0 L 504 0 L 504 183.4 L 473 183.4 L 473 0",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }],
        full: [0, 0, 555, 555, {
          type: "path",
          path: "M 306.9 148.3 C 298.6 144.5 289.3 142.3 279.6 142.3 C 269.5 142.3 260 144.6 251.5 148.7 C 260.2 151.3 269.3 152.7 278.7 152.7 C 288.4 152.7 297.9 151.1 306.9 148.3Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 199.3 212.4 C 201.2 213.3 203.1 214.3 205 215.2 C 204.9 214.2 204.9 213.3 204.8 212.4 L 204.6 212.4 L 199.3 212.4Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 214.8 202.4 L 344.3 202.4 C 342.7 180.4 330 161.4 311.9 151 C 301.3 154.7 290.1 156.7 278.7 156.7 C 278.7 156.7 278.7 156.7 278.7 156.7 C 267.6 156.7 256.8 154.8 246.6 151.3 C 228.8 161.9 216.5 180.6 214.8 202.4Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 344.5 170 L 344.5 131.9 C 340.9 135.1 337 138.1 332.8 140.8 C 329.7 142.8 326.4 144.6 323.1 146.3 C 331.8 152.5 339.2 160.6 344.5 170Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 279.6 272.4 C 309.8 272.4 335.2 251.7 342.5 223.7 C 322.2 231.4 300.6 235.4 278.7 235.4 C 257.5 235.4 236.6 231.7 216.9 224.4 C 217.4 226.2 217.9 227.9 218.5 229.6 L 218.5 229.6 L 218.5 229.6 C 227.6 254.6 251.6 272.4 279.6 272.4Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 214.6 170 C 219.9 160.8 227 152.9 235.4 146.7 C 228 143.2 221 138.7 214.6 133.4 L 214.6 170Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 344.3 212.4 L 214.8 212.4 C 215 214.9 215.3 217.3 215.8 219.7 C 235.7 227.4 257 231.4 278.7 231.4 C 301 231.4 323 227.2 343.5 219 C 343.9 216.8 344.2 214.6 344.3 212.4Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 134.7 162.5 L 56.8 223 C 66.9 234.7 82.1 250.4 102.1 265.9 C 125.3 284 150.4 298.4 176.8 308.7 C 179.5 309.7 182.2 310.7 184.8 311.6 L 211.2 238.1 C 208.6 232.4 206.7 226.3 205.7 219.9 C 200.6 217.6 195.6 215.1 190.8 212.4 L 184.6 212.4 L 184.6 208.7 C 165.2 196.6 148.2 180.9 134.7 162.5Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 204.6 117.8 L 204.6 0 L 194.6 0 L 194.6 103.2 C 197.5 108.4 200.9 113.3 204.6 117.8Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 188.6 313 C 218 323 248.9 328 280.7 328 C 312.1 328 342.6 323.1 371.5 313.2 L 346 242.1 C 333.4 266.1 308.4 282.4 279.6 282.4 C 251.2 282.4 226.4 266.5 213.7 243.1 L 188.6 313Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 349.1 505.9 L 212 505.9 C 213.7 528.2 226.1 548.5 245.3 560 L 315.8 560 C 335 548.5 347.5 528.2 349.1 505.9Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 194.6 202.4 L 204.6 202.4 L 204.6 123.8 C 201 119.9 197.6 115.5 194.6 111 L 194.6 202.4Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 399 495.9 L 352.6 329.2 C 329.4 335.1 305.3 338 280.7 338 C 255.6 338 230.9 334.9 207.1 328.9 L 162 495.9 L 202 495.9 C 204.5 454.8 238.8 422 280.6 422 C 322.3 422 356.6 454.8 359.1 495.9 L 399 495.9Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 280.6 432 C 244.3 432 214.5 460.3 212 495.9 L 349.1 495.9 C 346.6 460.3 316.8 432 280.6 432Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 202 505.9 L 0.3 505.9 L 0.3 560 L 228.5 560 C 213 546.3 203.3 526.8 202 505.9Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 354.5 115.5 C 357.4 111.9 360 108 362.3 103.9 L 362.3 0 L 354.5 0 L 354.5 115.5Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 457.4 56.4 C 457.4 87.7 449.3 118.4 433.8 145.4 C 431.1 150.1 428.2 154.6 425.1 159.1 L 503.9 220.3 C 510.2 212.7 514 207.1 515.6 204.8 L 515.6 0 L 448.3 0 C 454.4 18.2 457.4 37.1 457.4 56.4Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 372.3 204.2 C 396.2 189 416.3 168 430.4 143.4 C 445.4 117.1 453.4 87 453.4 56.4 C 453.4 37.1 450.3 18.2 444.1 0 L 372.3 0 L 372.3 204.2Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 239.2 144.1 C 250.9 136.6 264.7 132.3 279.6 132.3 C 294.1 132.3 307.6 136.4 319.1 143.6 C 328.4 139.3 337 133.5 344.5 126.4 L 344.5 0 L 214.6 0 L 214.6 128.1 C 222 134.7 230.3 140.1 239.2 144.1Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 525.6 0 L 560 0 L 560 204.2 L 525.6 204.2 L 525.6 0",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 560 505.9 L 359.1 505.9 C 357.8 526.8 348.1 546.3 332.6 560 L 560 560 L 560 505.9Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 103.9 56.4 C 103.9 86.9 111.9 116.9 126.9 143.2 C 140.9 167.8 160.8 188.7 184.6 203.9 L 184.6 0 L 113.2 0 C 107.1 18.1 103.9 37.1 103.9 56.4Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 354.4 212.4 C 354.3 213 354.3 213.6 354.2 214.3 C 355.5 213.7 356.8 213 358.1 212.4 L 354.5 212.4 L 354.4 212.4Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 354.5 202.4 L 362.3 202.4 L 362.3 111.6 C 360 115.2 357.3 118.6 354.5 121.8 L 354.5 202.4Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 348.4 237.1 L 375.3 311.9 C 378.3 310.9 381.3 309.7 384.3 308.6 C 410.4 298.2 435.2 283.8 457.9 265.7 C 477.2 250.4 491.7 235 501.4 223.4 L 422.8 162.3 C 409.1 180.9 392 196.8 372.3 208.9 L 372.3 212.4 L 366.5 212.4 C 362.3 214.7 358 216.9 353.7 218.9 C 352.7 225.3 350.9 231.4 348.4 237.1Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 99.9 56.4 C 99.9 37.1 103 18.2 109 0 L 42.5 0 L 42.5 204.7 C 44.1 207 48 212.5 54.2 219.9 L 132.3 159.2 C 129.1 154.7 126.2 150 123.4 145.2 C 108.1 118.3 99.9 87.6 99.9 56.4Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 203.2 327.8 C 193 325.1 182.9 321.8 172.9 317.9 C 145.6 307.2 119.6 292.3 95.6 273.6 C 54.8 241.7 34.1 210.3 33.3 209 L 32.8 208.2 L 0.3 208.2 L 0.3 495.9 L 157.8 495.9 L 203.2 327.8Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 0.3 0 L 32.5 0 L 32.5 204.2 L 0.3 204.2 L 0.3 0",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }, {
          type: "path",
          path: "M 560 495.9 L 560 208.2 L 525.2 208.2 L 524.8 208.9 C 524 210.2 504.2 241.7 464.1 273.5 C 440.6 292.3 415 307.2 387.9 317.9 C 377.7 321.9 367.1 325.4 356.4 328.2 L 403.1 495.9 L 560 495.9Z",
          fill: "#000000",
          stroke: "none",
          "stroke-width": "0",
          "fill-opacity": "1",
          "stroke-opacity": "0"
        }]
      };
      var chartColors = {
        basic: {
          belowAverage: "#dadada",
          average: "#7a7a7a",
          aboveAverage: "#454545"
        },
        full: {
          belowAverage: "#9e9e9e",
          average: "#cccccc",
          aboveAverage: "#be9d53"
        }
      };
      var chartZoneIDs = {
        basic: [null, null, null, null, "twoPtPct_2", "twoPtPct_1_t", "twoPtPct_3", "twoPtPct_4", "twoPtPct_5", "twoPtPct_6", "twoPtPct_7", "twoPtPct_8", "threePtPct_1", "threePtPct_2", "threePtPct_3"],
        full: [null, null, null, null, "c08_1", "c816_1", "c816_2", "c816_3", "c1624_1", "c816_3", "c816_4", "lc1624_1", "c08_2", "c1624_2", "backOfCourt_1", "c816_5", "c24Plus_1", "c24Plus_2", "backOfCourt_2", "c08_3", "r1624_1", "r816_1", "c08_4", "r24Plus_1", "backOfCourt_3", "l816_1", "c816_7", "c816_8", "rc1624_1", "l1624_1", "lc24Plus_1", "l24Plus_1", "rc24Plus_1"]
      };
      scope.$watch("[averageData,teamData]", function(newValues, oldValues) {
        if (newValues == oldValues || activeChartType == "full" && $rootScope.chartLoading) {
          return
        }
        // alert(1)
        element[0].innerHTML = "";
        render(element[0])
      }, true);

      function render(element) {
        if (!scope.teamData && (scope.template == "full" && !scope.averageData && !scope.teamAbbr)) {
          return
        }
        switch (activeChartType) {
          case "basic":
            renderBasic(element);
            break;
          case "full":
            renderFull(element);
            break
        }
      }

      function renderFull(element) {
        var svg = chartTypes[activeChartType];
        var colors = chartColors[activeChartType];
        var labels = [{
          zone: "c08",
          x: 277,
          y: 55
        }, {
          zone: "c816",
          x: 277,
          y: 195
        }, {
          zone: "c1624",
          x: 277,
          y: 295
        }, {
          zone: "c24Plus",
          x: 277,
          y: 395
        }, {
          zone: "l816",
          x: 150,
          y: 55
        }, {
          zone: "l1624",
          x: 89,
          y: 155
        }, {
          zone: "l24Plus",
          x: 43,
          y: 55
        }, {
          zone: "lc1624",
          x: 139,
          y: 244
        }, {
          zone: "lc24Plus",
          x: 89,
          y: 395
        }, {
          zone: "r1624",
          x: 477,
          y: 155
        }, {
          zone: "r816",
          x: 395,
          y: 55
        }, {
          zone: "r24Plus",
          x: 513,
          y: 55
        }, {
          zone: "rc1624",
          x: 422,
          y: 233
        }, {
          zone: "rc24Plus",
          x: 477,
          y: 395
        }];
        var segmentColors = {};
        paper = Raphael(element, svg[2], svg[3]);
        paper.setViewBox(0, 0, svg[2], svg[3], false);
        if (scope.averageData) {
          var avg = scope.averageData;
          var keyClass = "";
          var color = "";
          angular.forEach(scope.teamData, function(value, key) {
            keyClass = key.replace("Pct", "");
            keyClass = keyClass.replace("Dis", "");
            if (value > avg[key]) {
              color = colors.aboveAverage
            } else if (value < avg[key]) {
              color = colors.belowAverage
            } else {
              color = colors.average
            }
            segmentColors[keyClass] = color
          })
        }
        for (var i = 1; i < svg.length; i++) {
          if (svg[i].type === "path") {
            if (Raphael.type == "SVG") {
              var p = paper.path(svg[i].path);
              p.attr({
                stroke: "none",
                fill: "url(/media/img/wood.jpg)",
                opacity: opacityHigh
              });
              var p = paper.path(svg[i].path);
              var itemClass = setItemSelectors(p, i);
              p.attr({
                fill: segmentColors[itemClass],
                "fill-opacity": 1,
                stroke: "none",
                opacity: opacityLow
              })
            } else if (Raphael.type == "VML") {
              var p = paper.path(svg[i].path);
              var itemClass = setItemSelectors(p, i);
              if (typeof segmentColors[itemClass] != "undefined") {
                var fillColor = segmentColors[itemClass]
              } else {
                var fillColor = colors.average
              }
              p.attr({
                fill: fillColor,
                "fill-opacity": 1,
                stroke: "none",
                opacity: 1
              })
            }
            p.mouseover(function() {
              hoverSegment(this)
            });
            p.mouseout(function() {
              blurSegment(this)
            })
          }
        }
        var fontOptions = {
          "font-size": labelSmall + "px",
          "font-family": "Roboto, sans-serif",
          fill: "#444444"
        };
        angular.forEach(labels, function(label) {
          var pct = null;
          if (typeof scope.teamData[label.zone + "Pct"] != "undefined") {
            pct = scope.teamData[label.zone + "Pct"]
          } else {
            pct = scope.teamData[label.zone + "DisPct"]
          }
          pct = $filter("number")(pct, 1);
          if (FEEDS_CONFIG.debug) console.log(pct);
          var t = paper.text(label.x, label.y, pct + "%");
          t.attr(fontOptions);
          if (Raphael.type == "SVG") {
            t.node.setAttribute("id", "label_" + label.zone);
            t.node.setAttribute("data-class", label.zone);
            t.mouseover(function() {
              hoverLabel(this)
            });
            t.mouseout(function() {
              blurLabel(this)
            })
          }
        });
        if (Raphael.type == "SVG") {
          scope.$watch("teamAbbr", function(teamAbbr) {
            if (teamAbbr) {
              var i = paper.image("/media/img/teams/logos/" + teamAbbr + "_logo.svg", 228, 439, 110, 110)
            }
          })
        }
        $timeout(function() {
          $rootScope.chartLoading = false
        }, 1e3)
      }

      function renderBasic(element) {
        var svg = chartTypes[activeChartType];
        var colors = chartColors[activeChartType];
        var segmentColors = {};
        paper = Raphael(element, svg[2], svg[3]);
        if (Raphael.type == "SVG") {
          paper.setViewBox(0, 0, svg[2], svg[3], false)
        } else {
          paper.setViewBox(0, 0, 2e3, 2e3, false)
        }
        if (scope.averageData) {
          var avg = scope.averageData;
          var keyClass = "";
          var color = "";
          angular.forEach(scope.teamData, function(value, key) {
            keyClass = key;
            if (value > avg[key]) {
              color = colors.aboveAverage
            } else if (value < avg[key]) {
              color = colors.belowAverage
            } else {
              color = colors.average
            }
            segmentColors[keyClass] = color
          })
        }
        for (var i = 1; i < svg.length; i++) {
          if (svg[i].type === "path") {
            var p = paper.path(svg[i].path);
            var itemClass = setItemSelectors(p, i);
            if (typeof segmentColors[itemClass] != "undefined") {
              var fillColor = segmentColors[itemClass]
            } else {
              var fillColor = "#FFFFFF"
            }
            p.attr({
              fill: fillColor,
              stroke: "none"
            })
          }
        }
      }

      function setItemSelectors(element, index) {
        var id = chartZoneIDs[activeChartType][index];
        if (id) {
          var extractedClass = id.replace(/_[^_]+$/, "");
          if (Raphael.type === "SVG") {
            element.node.setAttribute("id", id);
            element.node.setAttribute("class", extractedClass)
          } else if (Raphael.type === "VML") {
            element.data("id", id);
            element.data("class", extractedClass)
          }
        }
        return extractedClass
      }

      function hoverSegment(el) {
        // alert(2)
        // console.log(el)
        // 
                // console.log(el)
        // console.log(el.events[0].clientX)
        
        $(el.node).off('mousemove').on('mousemove',function(e){
          $('#show-html').css('left',e.clientX+10).css('top',e.clientY).show()
          // console.log(e.clientX)
        }).off('mouseout').on('mouseout',function(e){
          $('#show-html').hide()

        })
        if (Raphael.type === "SVG" && el.node.classList) {
          var segmentClass = el.node.classList[0]
        } else if (Raphael.type === "VML") {
          var segmentClass = el.data("class")
        }
        hoverClass(segmentClass);
        setRelatedLabelTextSize(el, labelLarge)
      }

      function hoverLabel(el) {
        var segmentClass = el.node.getAttribute("data-class");
        hoverClass(segmentClass);
        el.attr({
          "font-size": labelLarge + "px"
        })
      }

      function blurSegment(el) {
        if (Raphael.type === "SVG") {
          if (el.node.classList) {
            var segmentClass = el.node.classList[0]
          }
        } else if (Raphael.type === "VML") {
          var segmentClass = el.data("class")
        }
        blurClass(segmentClass);
        setRelatedLabelTextSize(el, labelSmall)
      }

      function blurLabel(el) {
        var segmentClass = el.node.getAttribute("data-class");
        blurClass(segmentClass);
        el.attr({
          "font-size": labelSmall + "px"
        })
      }

      function hoverClass(cl) {
        sibHotzoneContainer.setSelectedZone(cl);
        if (Raphael.type == "SVG") {
          setClassOpacity(cl, .75)
        }
      }

      function blurClass(cl) {
        sibHotzoneContainer.clearSelectedZone();
        setClassOpacity(cl, .4)
      }

      function setRelatedLabelTextSize(el, size) {
        var elementClass = el.node.getAttribute("class");
        if (!elementClass) {
          return
        }
        var labelId = "label_" + elementClass;
        paper.forEach(function(el) {
          if (el.node.getAttribute("id") == labelId) {
            el.attr({
              "font-size": size + "px"
            })
          }
        })
      }

      function setClassOpacity(selectedClass, opacity) {
        paper.forEach(function(el) {
          if (el.node.getAttribute("class") == selectedClass) {
            el.attr({
              opacity: opacity
            })
          }
        })
      }

      function setClassFill(selectedClass, fillColor) {
        if (Raphael.type === "SVG") {
          paper.forEach(function(el) {
            if (el.node.getAttribute("class") == selectedClass) {
              el.attr({
                fill: fillColor,
                stroke: "none"
              })
            }
          })
        }
      }
    }
  }
}]);
sib.directive("sibHotzoneContainer", function() {
  return {
    restrict: "A",
    controller: ["$scope", "$element", "$i18next", function($scope, $element, $i18next) {
      this.setSelectedZone = function(key) {
        $scope.$apply(function() {
          $scope.selectedZone = key
        })
      };
      this.clearSelectedZone = function() {
        $scope.$apply(function() {
          $scope.selectedZone = "empty"
        })
      };
      this.setLoading = function(value) {
        $scope.loading = value
      };
      this.isLoading = function() {
        return $scope.loading
      };
      $scope.selectedZone = "empty";
      $scope.loading = false
    }]
  }
});
sib.directive("sibIf", function() {
  return {
    transclude: "element",
    priority: 1e3,
    terminal: true,
    restrict: "A",
    compile: function(element, attr, transclude) {
      return function(scope, element, attr) {
        var childElement;
        var childScope;
        var obj = {};
        scope.$watch(attr["sibIf"], function(newValue) {
          if (childElement) {
            childElement.remove();
            childElement = undefined
          }
          if (childScope) {
            childScope.$destroy();
            childScope = undefined
          }
          if (newValue) {
            childScope = scope.$new();
            transclude(childScope, function(clone) {
              childElement = clone;
              element.after(clone)
            })
          }
        })
      }
    }
  }
});
"use strict";
sib.directive("sibIframeNotice", ["$window", "$timeout", function($window, $timeout) {
  return {
    restrict: "A",
    scope: {},
    link: function(scope, element, attrs) {
      function resizeMsg() {
        var url = $window.location != $window.parent.location ? document.referrer : document.location;
        var eventData = {
          command: "resize",
          path: $window.location.pathname,
          height: element.outerHeight(),
          width: element.outerWidth()
        };
        parent.postMessage(angular.toJson(eventData), url)
      }
      scope.$watch(function() {
        setTimeout(function() {
          resizeMsg()
        }, 1e3);
        return element.outerHeight()
      }, function(newValue, oldValue) {
        resizeMsg()
      });
      $window.addEventListener("resize", function() {
        resizeMsg()
      })
    }
  }
}]);
"use strict";
sib.directive("sibImgPlayer", ["Site", function(Site) {
  return {
    restrict: "E",
    scope: {
      playerId: "=",
      size: "@",
      type: "@"
    },
    link: function postLink(scope, iElement, iAttrs) {
      scope.$watch("playerId", function(playerId) {
        var playerImageUrl = "";
        var fallbackUrl = "";
        if (scope.type == "action") {
          if (Site.playerImage != null && angular.isDefined(Site.playerImage)) {
            playerImageUrl = Site.playerImage.silo.img.replace("%id%", playerId);
            fallbackUrl = Site.playerImage.silo.notfound;
            var srcFile = angular.isDefined(playerId) && playerId.length > 0 ? playerImageUrl : fallbackUrl;
            iElement.html('<img class="' + iAttrs["class"] + '" alt="' + iAttrs["alt"] + '" src="' + srcFile + '">')
          } else {
            playerImageUrl = "http://ak-static.cms.nba.com/wp-content/uploads/silos/nba/latest/220x350/" + playerId + ".png";
            fallbackUrl = "/media/img/players/silos/220x350/not_found.png";
            var srcFile = angular.isDefined(playerId) && playerId.length > 0 ? playerImageUrl : fallbackUrl;
            iElement.html('<img class="' + iAttrs["class"] + '" alt="' + iAttrs["alt"] + '" src="' + srcFile + '">')
          }
        } else {
          if (Site.playerImage != null && angular.isDefined(Site.playerImage)) {
            playerImageUrl = Site.playerImage.head.img.replace("%id%", playerId);
            fallbackUrl = Site.playerImage.head.notfound;
            var srcFile = angular.isDefined(playerId) && playerId.length > 0 ? playerImageUrl : fallbackUrl;
            iElement.html('<img class="' + iAttrs["class"] + '" alt="' + iAttrs["alt"] + '" src="' + srcFile + '">')
          } else {
            playerImageUrl = "http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/" + playerId + ".png";
            fallbackUrl = "/media/img/players/head/230x185/not_found.png";
            var srcFile = angular.isDefined(playerId) && playerId.length > 0 ? playerImageUrl : fallbackUrl;
            iElement.html('<img class="' + iAttrs["class"] + '" alt="' + iAttrs["alt"] + '" src="' + srcFile + '">')
          }
        }
        iElement.find("img").bind("error", function() {
          var $img = angular.element(this);
          $img.attr("src", fallbackUrl);
          iElement.addClass("not-found")
        })
      })
    }
  }
}]);
sib.directive("sibImgTeam", function() {
  "use strict";
  return {
    restrict: "E",
    scope: {
      teamAbbr: "=",
      type: "@"
    },
    link: function postLink(scope, iElement, iAttrs) {
      scope.$watch("teamAbbr", function(teamAbbr) {
        var teamImageUrl, fallbackUrl;
        var imgroot = "/media/img/teams/";
        if (typeof teamAbbr == "undefined" || teamAbbr == null || !teamAbbr.length) {
          return
        }
        if (teamAbbr.length > 0 && iAttrs.type == "pill") {
          teamImageUrl = imgroot + "pills/" + teamAbbr + "_68x44.png";
          fallbackUrl = imgroot + "pills/_34x22.png";
          iElement.html('<img class="team-img" src="' + teamImageUrl + '" />')
        } else if (teamAbbr.length > 0 && !($("html").hasClass("ie8") || window.isAndroid)) {
          teamImageUrl = imgroot + "logos/" + teamAbbr + "_logo.svg";
          fallbackUrl = imgroot + "logos/NBA-grey_logo.svg";
          iElement.html('<img class="team-img" src="' + teamImageUrl + '" type="image/svg+xml" />')
        } else if (teamAbbr.length > 0 && ($("html").hasClass("ie8") || window.isAndroid)) {
          teamImageUrl = imgroot + "logos/" + teamAbbr + "_logo.png";
          fallbackUrl = imgroot + "logos/NBA-grey_logo.png";
          iElement.html('<img class="team-img" src="' + teamImageUrl + '" />')
        }
        iElement.find("img").bind("error", function() {
          angular.element(this).attr("src", fallbackUrl)
        })
      })
    }
  }
});
"use strict";
sib.directive("sibListSlider", function() {
  function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min)
  }
  return {
    restrict: "E",
    transclude: true,
    scope: true,
    controller: function($element, $attrs, $scope) {
      var displayCount = 1;
      var animationSpeed = 1500;
      var itemCount = 5;
      var maxPages = 5;
      var currentPage = 1;
      var uid = getRandomArbitrary(0, 99999999);
      var uidClass = "list-slider" + "-" + uid;
      var animationInProgress = false;
      $element.addClass(uidClass);

      function addDocumentStyle(name, rules) {
        var style = document.createElement("style");
        style.type = "text/css";
        style.className = "temp-list-slider-style-" + uid;
        document.getElementsByTagName("head")[0].appendChild(style);
        if (!(style.sheet || {}).insertRule) {
          (style.styleSheet || style.sheet).addRule(name, rules)
        } else {
          style.sheet.insertRule(name + "{" + rules + "}", 0)
        }
      }

      function animate(direction, pages) {
        var distance = pages * 100;
        onBeginAnimation();
        if (direction == "left") {
          $("." + uidClass).find(".sib-list-wrap").animate({
            left: "-=" + distance + "%"
          }, animationSpeed, "swing", onEndAnimation)
        } else if (direction == "right") {
          $("." + uidClass).find(".sib-list-wrap").animate({
            left: "+=" + distance + "%"
          }, animationSpeed, "swing", onEndAnimation)
        }
      }

      function onBeginAnimation() {
        animationInProgress = true
      }

      function onEndAnimation() {
        animationInProgress = false
      }
      this.adjustViewport = function(ww, begin, end, count) {
        if (ww >= begin && (ww < end || end === Infinity)) {
          if (displayCount != count) {
            this.paginate(1)
          }
          displayCount = count
        }
      };
      this.calculateViewport = function() {
        maxPages = itemCount / displayCount;
        $(".temp-list-slider-style-" + uid).remove();
        var liw = "width:" + 100 / displayCount + "%;";
        var listItemSelector = "." + uidClass + " .sib-list-wrap ul li";
        addDocumentStyle(listItemSelector, liw)
      };
      this.paginate = $scope.paginate = function(pageNo) {
        var last = currentPage;
        if (pageNo > currentPage || pageNo < currentPage) {
          currentPage = pageNo;
          animate(pageNo > last ? "left" : "right", Math.abs(last - pageNo))
        }
      };
      this.setItemCount = function(count) {
        itemCount = count;
        maxPages = itemCount / displayCount
      };
      this.getUidClass = function() {
        return uidClass
      };
      this.setAnimationSpeed = function(speed) {
        animationSpeed = angular.isNumber(speed) ? speed : animationSpeed
      };
      $scope.range = function(n) {
        return angular.isNumber(n) && n <= itemCount ? new Array(Math.round(n)) : []
      };
      $scope.getMaxPages = function() {
        return maxPages
      };
      $scope.getCurrentPage = function() {
        return currentPage
      };
      $scope.scroll = function(offset) {
        var requestPage = currentPage + offset;
        if (requestPage >= 1 && requestPage <= maxPages) {
          $scope.paginate(requestPage)
        }
      };
      var element = document.querySelector("." + uidClass + " .sib-list-wrap");
      if (!$("html").hasClass("ie8") && element) {
        if (window.isAndroid) {
          Hammer(element).on("dragleft", function(event) {
            event.preventDefault();
            Hammer(element).trigger("swipeleft", event)
          });
          Hammer(element).on("dragright", function(event) {
            event.preventDefault();
            Hammer(element).trigger("swiperight", event)
          })
        }
        Hammer(element).on("swipeleft", function(event) {
          event.preventDefault();
          if (!animationInProgress) {
            $scope.scroll(1);
            if (!$scope.$$phase) {
              $scope.$apply()
            }
          }
        });
        Hammer(element).on("swiperight", function(event) {
          event.preventDefault();
          if (!animationInProgress) {
            $scope.scroll(-1);
            if (!$scope.$$phase) {
              $scope.$apply()
            }
          }
        })
      }
    },
    link: function postLink(scope, element, attrs) {},
    templateUrl: function(elem, attrs) {
      return attrs["template"] || "/templates/slider/listslider.html"
    }
  }
});
sib.directive("sibNewsList", ["Page", "SimpleFeedFetcher", "$location", "$timeout", function(Page, SimpleFeedFetcher, $location, $timeout) {
  "use strict";
  return {
    restrict: "E",
    scope: {},
    link: function(scope, element, attrs) {
      var THUMB_IMAGE_BREAKPOINT = 500;
      var template = angular.isUndefined(attrs["template"]) ? "news" : attrs["template"];
      var linkBase = attrs["linkBase"];
      linkBase = angular.isDefined(linkBase) ? linkBase : "/article.html#!";
      var showDescription = attrs["showDescription"];
      scope.showDescription = angular.isDefined(showDescription) ? showDescription : true;
      var showHeadshot = attrs["showHeadshot"];
      scope.showHeadshot = angular.isDefined(showHeadshot) ? showHeadshot : true;
      var linkCaption = attrs["linkCaption"];
      scope.linkCaption = angular.isDefined(linkCaption) ? linkCaption : true;
      var lazyLoad = attrs["lazyLoad"];
      scope.lazyLoad = angular.isDefined(lazyLoad) ? lazyLoad : false;
      scope.lazyLoadAmt = lazyLoad ? 10 : attrs["maxItems"] || 100;
      scope.gotoUrl = function(article) {
        if (angular.isDefined(article.ListItemLink)) {
          window.location = /^http/.test(article.ListItemLink) ? article.ListItemLink : linkBase + article.ListItemLink
        }
      };

      function getLazyLoadPosition(itemid) {
        for (var i in scope.articles) {
          if (scope.articles[i].UpdateId == itemid) {
            return Math.max(i, 10)
          }
        }
        return 10
      }
      var listUrl = attrs["listUrl"];
      SimpleFeedFetcher.get(listUrl).then(function(data) {
        scope.articles = data.ListItems.slice(0, attrs["maxItems"] || 100);
        var windowWidth = $(window).width();
        angular.forEach(scope.articles, function(item) {
          setImgUrl(item, windowWidth)
        });
        Page.setLoading(false);
        var params = $location.search();
        if (params.itemId) {
          if (lazyLoad) {
            scope.lazyLoadAmt = getLazyLoadPosition(params.itemId)
          }
          $timeout(function() {
            $(window).scrollTop($("#" + params.itemId).offset().top - 10)
          }, 750)
        }
      });
      scope.fileLocation = "/templates/content/" + template + ".html";
      $(window).scroll(function() {
        var wintop = $(window).scrollTop();
        var docheight = $(document).height();
        var winheight = $(window).height();
        var scrolltrigger = .95;
        if (wintop / (docheight - winheight) > scrolltrigger) {
          scope.lazyLoadAmt += 10;
          scope.$apply()
        }
      });
      scope.$watch(function() {
        return $(window).width()
      }, function(newValue, oldValue) {
        var wasThumb = oldValue <= THUMB_IMAGE_BREAKPOINT;
        var isThumb = newValue <= THUMB_IMAGE_BREAKPOINT;
        if (wasThumb && !isThumb || !wasThumb && isThumb) {
          $timeout(function() {
            angular.forEach(scope.articles, function(item) {
              setImgUrl(item, newValue)
            })
          })
        }
      });

      function setImgUrl(listItem, windowWidth) {
        listItem.displayImgUrl = listItem.ListItemImageURL;
        if (windowWidth < THUMB_IMAGE_BREAKPOINT && listItem.ListItemThumbnailURL != null && listItem.ListItemThumbnailURL.length > 0) {
          listItem.displayImgUrl = listItem.ListItemThumbnailURL
        }
      }
    },
    template: '<div ng-include="fileLocation"></div>'
  }
}]);
sib.directive("sibPageHeader", ["$compile", function($compile) {
  "use strict";
  return {
    restrict: "E",
    link: function(scope, element, attrs) {
      var breadcrumbExp = false;
      var titleExp = false;
      var sibTitleText = "";
      var sibBreadcrumbText = "";
      if (attrs["sibBreadcrumbExp"]) {
        var sibBreadcrumbExp = attrs["sibBreadcrumbExp"].split(";");
        angular.forEach(sibBreadcrumbExp, function(part) {
          var subBreadcrumb = part.split(":");
          var key = subBreadcrumb[0].split(",");
          var value = subBreadcrumb[1];
          var keyExpression = "";
          angular.forEach(key, function(subKey) {
            keyExpression += " {{" + subKey + "}}"
          });
          if (value.trim() == "''") {
            sibBreadcrumbText += " / " + keyExpression
          } else {
            sibBreadcrumbText += "<a href=" + value + "> / " + keyExpression + "</a>"
          }
        });
        breadcrumbExp = true
      }
      if (attrs["sibTitleExp"]) {
        var sibTitleExp = attrs["sibTitleExp"].split(";");
        angular.forEach(sibTitleExp, function(subTitle) {
          var subTitleParts = subTitle.split(",");
          angular.forEach(subTitleParts, function(part) {
            sibTitleText += "{{" + part + "}} "
          })
        });
        titleExp = true
      }
      if (attrs["sibTitle"] && !titleExp) {
        var sibTitle = attrs["sibTitle"].split(";");
        angular.forEach(sibTitle, function(subTitle) {
          sibTitleText += '{{"' + subTitle + '"|i18next}} '
        })
      }
      if (attrs["sibBreadcrumb"] && !breadcrumbExp) {
        var sibBreadcrumb = angular.fromJson(attrs["sibBreadcrumb"]);
        angular.forEach(sibBreadcrumb, function(value, key) {
          if (value == "") {
            sibBreadcrumbText += " / " + '{{"' + key + '"|i18next}}'
          } else {
            sibBreadcrumbText += '<a href="' + value + '"> / ' + '{{"' + key + '"|i18next}}</a>'
          }
        })
      }
      sibBreadcrumbText = '<a href="/"><span data-ng-i18next="_page.home"></span></a>' + sibBreadcrumbText;
      if (!titleExp && !breadcrumbExp && !(sibTitleText == "")) {
        sibBreadcrumbText += " / " + sibTitleText
      }
      element.find("span.breadcrumb")[0].innerHTML = sibBreadcrumbText;
      element.find("h1.page-title")[0].innerHTML = sibTitleText;
      $compile(element.contents())(scope)
    },
    template: '<div class="page-header" data-ng-show="showNav" >' + '<div class="content-left">' + '<span class="breadcrumb"> </span>' + '<h1 class="page-title"></h1>' + "</div>" + '<div class="content-right">' + "</div>" + "</div>"
  }
}]);
"use strict";
sib.directive("sibPhotoIndex", ["SimpleFeedFetcher", "Page", function(SimpleFeedFetcher, Page) {
  return {
    restrict: "E",
    link: function(scope, element, attrs) {
      if (attrs["gallerySrc"]) {
        var maxItems = attrs["maxItems"] ? attrs["maxItems"] : 30;
        SimpleFeedFetcher.get(attrs["gallerySrc"]).then(function(data) {
          scope.galleries = data.ListItems.slice(0, maxItems);
          Page.setLoading(false)
        })
      } else {
        console.log("no gallery src")
      }
    },
    templateUrl: "/templates/photo/index.html"
  }
}]);
sib.directive("sibPlayerRecordComparison", ["$timeout", "$animate", "FEEDS_CONFIG", "StatsFeedFetcher", "$filter", "UrlParams", function($timeout, $animate, FEEDS_CONFIG, StatsFeedFetcher, $filter, UrlParams) {
  "use strict";
  return {
    restrict: "E",
    link: function(scope, element, attrs) {
      var testPlayers = [];
      var feedUrl = FEEDS_CONFIG.playerCareerStats;
      var updateInterval = 6e4;
      var params = [];
      if (typeof attrs["recordHolder"] !== "undefined") {
        params.push(attrs["recordHolder"])
      }
      if (typeof attrs["comparePlayer"] !== "undefined") {
        params.push(attrs["comparePlayer"])
      }

      function fetchStats() {
        StatsFeedFetcher.fetch(feedUrl, UrlParams.create([], {
          playerCodes: params.join(",")
        }, false, false)).then(function(data) {
          var players = data.player;
          scope.tie = players[0].regularCareerStatsTotal.points == players[1].regularCareerStatsTotal.points ? true : false;
          scope.approaching = players[0].regularCareerStatsTotal.points > players[1].regularCareerStatsTotal.points ? true : false;
          scope.pass = players[0].regularCareerStatsTotal.points < players[1].regularCareerStatsTotal.points ? true : false;
          players[0].barRatio = 100 + "%";
          players[1].barRatio = 100 + "%";
          if (scope.approaching) {
            players[1].barRatio = Number(players[1].regularCareerStatsTotal.points.toString().slice(-2)) / Number(players[0].regularCareerStatsTotal.points.toString().slice(-2)) * 100 + "%"
          }
          if (scope.pass) {
            players[0].barRatio = players[0].regularCareerStatsTotal.points / players[1].regularCareerStatsTotal.points * 100 + "%"
          }
          scope.difference = players[0].regularCareerStatsTotal.points - players[1].regularCareerStatsTotal.points;
          scope.players = players
        });
        $timeout(function() {
          fetchStats()
        }, updateInterval)
      }
      fetchStats()
    },
    templateUrl: "/templates/players/recordcomparison.html"
  }
}]);
sib.directive("sibPlayerUrls", ["Site", function(Site) {
  return {
    restrict: "A",
    scope: {
      team: "="
    },
    link: function(scope, element, attribute) {
      function isDisableLeagueTeam(leagueId) {
        if (Site.hasOwnProperty("disableLeagueTeam") && Site.disableLeagueTeam.indexOf(leagueId) > -1) {
          return true
        } else {
          return false
        }
      }
      scope.$watch("team", function(team) {
        if (team) {
          if (!scope.team.isLeagueTeam || isDisableLeagueTeam(scope.team.leagueId)) {
            if (element.hasClass("anchor-unstyled")) {
              element.removeClass("anchor-unstyled");
              element.addClass("unstyled")
            }
            if (!element.hasClass("team-player-anchor-unstyled")) {
              element.addClass("team-player-anchor-unstyled")
            }
            if (element.attr("href")) {
              element.on("click", function(event) {
                event.preventDefault()
              });
              element.removeAttr("href")
            }
          }
        }
      })
    }
  }
}]);
sib.directive("sibPlayoffBracket", function() {
  "use strict";
  return {
    restrict: "E",
    scope: {
      seriesData: "="
    },
    link: function postLink(scope, iElement, iAttrs) {
      if ($("html").hasClass("ie8")) {
        return
      }
      var data;
      var setViewBox = false;
      scope.$watch("seriesData", function(seriesData) {
        if (typeof seriesData !== "undefined") {
          data = seriesData;
          var gWest = $.grep(seriesData.groups, function(n) {
            return n.groupName == "Western"
          })[0];
          var gEast = $.grep(seriesData.groups, function(n) {
            return n.groupName == "Eastern"
          })[0];
          var gFinal = $.grep(seriesData.groups, function(n) {
            return n.groupName == "Finals"
          })[0];
          renderSeriesData(gEast);
          renderSeriesData(gWest);
          renderFinalSeriesData(gFinal)
        }
      });
      var fontOptions = {
        "font-size": "14px",
        "font-family": "Roboto, sans-serif",
        fill: "#444444"
      };
      var paper = Raphael("svg-container", 940, 450);
      var svg = [0, 0, 915, 422, {
        type: "path",
        path: "M 115 351 L 115 306 L 42 306 L 115",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 115 351 L 127 351 L 115",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 42 396 L 115 396 L 115 351 L 42",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 281 97 L 329 97 L 329 200 L 281",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 329 200 L 340 200 L 329",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 280 320 L 329 320 L 329 200 L 280",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 169 228 L 230 228 L 230 300 L 169",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 230 300 L 240 300 L 230",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 169 371 L 230 371 L 230 300 L 169",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 0 305 L 43 305 L 43 348 L 0 348 L 0",
        fill: "#dadada",
        stroke: "none",
        "stroke-width": "0",
        "fill-opacity": "1",
        "stroke-opacity": "0"
      }, {
        type: "path",
        path: "M 127 329 L 170 329 L 170 372 L 127 372 L 127",
        fill: "#dadada",
        stroke: "none",
        "stroke-width": "0",
        "fill-opacity": "1",
        "stroke-opacity": "0"
      }, {
        type: "path",
        path: "M 240 278 L 283 278 L 283 321 L 240 321 L 240",
        fill: "#dadada",
        stroke: "none",
        "stroke-width": "0",
        "fill-opacity": "1",
        "stroke-opacity": "0"
      }, {
        type: "path",
        path: "M 127 227 L 170 227 L 170 270 L 127 270 L 127",
        fill: "#dadada",
        stroke: "none",
        "stroke-width": "0",
        "fill-opacity": "1",
        "stroke-opacity": "0"
      }, {
        type: "path",
        path: "M 0 354 L 43 354 L 43 397 L 0 397 L 0",
        fill: "#dadada",
        stroke: "none",
        "stroke-width": "0",
        "fill-opacity": "1",
        "stroke-opacity": "0"
      }, {
        type: "path",
        path: "M 340 158 L 425 158 L 425 243 L 340 243 L 340",
        fill: "#dadada",
        stroke: "none",
        "stroke-width": "0",
        "fill-opacity": "1",
        "stroke-opacity": "0"
      }, {
        type: "path",
        path: "M 115 249 L 115 204 L 42 204 L 115",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 115 249 L 127 249 L 115",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 42 294 L 115 294 L 115 249 L 42",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 0 203 L 43 203 L 43 246 L 0 246 L 0",
        fill: "#dadada",
        stroke: "none",
        "stroke-width": "0",
        "fill-opacity": "1",
        "stroke-opacity": "0"
      }, {
        type: "path",
        path: "M 0 252 L 43 252 L 43 295 L 0 295 L 0",
        fill: "#dadada",
        stroke: "none",
        "stroke-width": "0",
        "fill-opacity": "1",
        "stroke-opacity": "0"
      }, {
        type: "path",
        path: "M 115 148 L 115 103 L 42 103 L 115",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 115 148 L 127 148 L 115",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 42 193 L 115 193 L 115 148 L 42",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 169 25 L 230 25 L 230 97 L 169",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 230 97 L 240 97 L 230",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 169 168 L 230 168 L 230 97 L 169",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 0 102 L 43 102 L 43 145 L 0 145 L 0",
        fill: "#dadada",
        stroke: "none",
        "stroke-width": "0",
        "fill-opacity": "1",
        "stroke-opacity": "0"
      }, {
        type: "path",
        path: "M 127 126 L 170 126 L 170 169 L 127 169 L 127",
        fill: "#dadada",
        stroke: "none",
        "stroke-width": "0",
        "fill-opacity": "1",
        "stroke-opacity": "0"
      }, {
        type: "path",
        path: "M 240 75 L 283 75 L 283 118 L 240 118 L 240",
        fill: "#dadada",
        stroke: "none",
        "stroke-width": "0",
        "fill-opacity": "1",
        "stroke-opacity": "0"
      }, {
        type: "path",
        path: "M 127 24 L 170 24 L 170 67 L 127 67 L 127",
        fill: "#dadada",
        stroke: "none",
        "stroke-width": "0",
        "fill-opacity": "1",
        "stroke-opacity": "0"
      }, {
        type: "path",
        path: "M 0 151 L 43 151 L 43 194 L 0 194 L 0",
        fill: "#dadada",
        stroke: "none",
        "stroke-width": "0",
        "fill-opacity": "1",
        "stroke-opacity": "0"
      }, {
        type: "path",
        path: "M 115 46 L 115 1 L 42 1 L 115",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 115 46 L 127 46 L 115",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 42 91 L 115 91 L 115 46 L 42",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 0 0 L 43 0 L 43 43 L 0 43 L 0",
        fill: "#dadada",
        stroke: "none",
        "stroke-width": "0",
        "fill-opacity": "1",
        "stroke-opacity": "0"
      }, {
        type: "path",
        path: "M 0 49 L 43 49 L 43 92 L 0 92 L 0",
        fill: "#dadada",
        stroke: "none",
        "stroke-width": "0",
        "fill-opacity": "1",
        "stroke-opacity": "0"
      }, {
        type: "path",
        path: "M 847 306 L 774 306 L 774 351 L 847",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 762 351 L 774 351 L 762",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 774 351 L 774 396 L 847 396 L 774",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 561 200 L 561 97 L 608 97 L 561",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 550 200 L 561 200 L 550",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 561 200 L 561 320 L 609 320 L 561",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 659 300 L 659 228 L 720 228 L 659",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 649 300 L 659 300 L 649",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 659 300 L 659 371 L 720 371 L 659",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 847 305 L 890 305 L 890 348 L 847 348 L 847",
        fill: "#dadada",
        stroke: "none",
        "stroke-width": "0",
        "fill-opacity": "1",
        "stroke-opacity": "0"
      }, {
        type: "path",
        path: "M 720 329 L 763 329 L 763 372 L 720 372 L 720",
        fill: "#dadada",
        stroke: "none",
        "stroke-width": "0",
        "fill-opacity": "1",
        "stroke-opacity": "0"
      }, {
        type: "path",
        path: "M 607 278 L 650 278 L 650 321 L 607 321 L 607",
        fill: "#dadada",
        stroke: "none",
        "stroke-width": "0",
        "fill-opacity": "1",
        "stroke-opacity": "0"
      }, {
        type: "path",
        path: "M 720 227 L 763 227 L 763 270 L 720 270 L 720",
        fill: "#dadada",
        stroke: "none",
        "stroke-width": "0",
        "fill-opacity": "1",
        "stroke-opacity": "0"
      }, {
        type: "path",
        path: "M 847 354 L 890 354 L 890 397 L 847 397 L 847",
        fill: "#dadada",
        stroke: "none",
        "stroke-width": "0",
        "fill-opacity": "1",
        "stroke-opacity": "0"
      }, {
        type: "path",
        path: "M 465 158 L 550 158 L 550 243 L 465 243 L 465",
        fill: "#dadada",
        stroke: "none",
        "stroke-width": "0",
        "fill-opacity": "1",
        "stroke-opacity": "0"
      }, {
        type: "path",
        path: "M 847 204 L 774 204 L 774 249 L 847",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 762 249 L 774 249 L 762",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 774 249 L 774 294 L 847 294 L 774",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 847 203 L 890 203 L 890 246 L 847 246 L 847",
        fill: "#dadada",
        stroke: "none",
        "stroke-width": "0",
        "fill-opacity": "1",
        "stroke-opacity": "0"
      }, {
        type: "path",
        path: "M 847 252 L 890 252 L 890 295 L 847 295 L 847",
        fill: "#dadada",
        stroke: "none",
        "stroke-width": "0",
        "fill-opacity": "1",
        "stroke-opacity": "0"
      }, {
        type: "path",
        path: "M 847 103 L 774 103 L 774 148 L 847",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 762 148 L 774 148 L 762",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 774 148 L 774 193 L 847 193 L 774",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 659 97 L 659 25 L 720 25 L 659",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 649 97 L 659 97 L 649",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 659 97 L 659 168 L 720 168 L 659",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 847 102 L 890 102 L 890 145 L 847 145 L 847",
        fill: "#dadada",
        stroke: "none",
        "stroke-width": "0",
        "fill-opacity": "1",
        "stroke-opacity": "0"
      }, {
        type: "path",
        path: "M 720 126 L 763 126 L 763 169 L 720 169 L 720",
        fill: "#dadada",
        stroke: "none",
        "stroke-width": "0",
        "fill-opacity": "1",
        "stroke-opacity": "0"
      }, {
        type: "path",
        path: "M 607 75 L 650 75 L 650 118 L 607 118 L 607",
        fill: "#dadada",
        stroke: "none",
        "stroke-width": "0",
        "fill-opacity": "1",
        "stroke-opacity": "0"
      }, {
        type: "path",
        path: "M 720 24 L 763 24 L 763 67 L 720 67 L 720",
        fill: "#dadada",
        stroke: "none",
        "stroke-width": "0",
        "fill-opacity": "1",
        "stroke-opacity": "0"
      }, {
        type: "path",
        path: "M 847 151 L 890 151 L 890 194 L 847 194 L 847",
        fill: "#dadada",
        stroke: "none",
        "stroke-width": "0",
        "fill-opacity": "1",
        "stroke-opacity": "0"
      }, {
        type: "path",
        path: "M 847 1 L 774 1 L 774 46 L 847",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 762 46 L 774 46 L 762",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 774 46 L 774 91 L 847 91 L 774",
        fill: "none",
        stroke: "#dadada",
        "stroke-width": "2",
        "stroke-linecap": "square",
        "stroke-miterlimit": "10",
        "fill-opacity": "1",
        "stroke-opacity": "1"
      }, {
        type: "path",
        path: "M 847 0 L 890 0 L 890 43 L 847 43 L 847",
        fill: "#dadada",
        stroke: "none",
        "stroke-width": "0",
        "fill-opacity": "1",
        "stroke-opacity": "0"
      }, {
        type: "path",
        path: "M 847 49 L 890 49 L 890 92 L 847 92 L 847",
        fill: "#dadada",
        stroke: "none",
        "stroke-width": "0",
        "fill-opacity": "1",
        "stroke-opacity": "0"
      }];
      var svgId = [null, null, null, null, {
        id: "western_round_1_series_4_top_line"
      }, {
        id: "western_round_1_series_4_bridge"
      }, {
        id: "western_round_1_series_4_bottom_line"
      }, {
        id: "western_conf_finals_top_line"
      }, {
        id: "western_conf_finals_bridge"
      }, {
        id: "western_conf_finals_bottom_line"
      }, {
        id: "western_semi_finals_series_2_top_line"
      }, {
        id: "western_semi_finals_series_2_bridge"
      }, {
        id: "western_semi_finals_series_bottom_line"
      }, {
        id: "western_round_1_series_4_top_box",
        cls: "team_logo_box"
      }, {
        id: "western_semi_finals_series_2_bottom_box",
        cls: "team_logo_box"
      }, {
        id: "western_conf_finals_bottom_box",
        cls: "team_logo_box"
      }, {
        id: "western_semi_finals_series_2_top_box",
        cls: "team_logo_box"
      }, {
        id: "western_round_1_series_4_bottom_box",
        cls: "team_logo_box"
      }, {
        id: "western_nba_finals_box",
        cls: "team_logo_box"
      }, {
        id: "western_round_1_series_3_top_line"
      }, {
        id: "western_round_1_series_3_bridge"
      }, {
        id: "western_round_1_series_3_bottom_line"
      }, {
        id: "western_round_1_series_3_top_box",
        cls: "team_logo_box"
      }, {
        id: "western_round_1_series_3_bottom_box",
        cls: "team_logo_box"
      }, {
        id: "western_round_1_series_2_top_line"
      }, {
        id: "western_round_1_series_2_bridge"
      }, {
        id: "western_round_1_series_2_bottom_line"
      }, {
        id: "western_semi_finals_series_1_top_line"
      }, {
        id: "western_semi_finals_series_1_bridge"
      }, {
        id: "western_semi_finals_series_1_bottom_line"
      }, {
        id: "western_round_1_series_2_top_box",
        cls: "team_logo_box"
      }, {
        id: "western_semi_finals_series_1_bottom_box",
        cls: "team_logo_box"
      }, {
        id: "western_conf_finals_top_box",
        cls: "team_logo_box"
      }, {
        id: "western_semi_finals_series_1_top_box",
        cls: "team_logo_box"
      }, {
        id: "western_round_1_series_2_bottom_box",
        cls: "team_logo_box"
      }, {
        id: "western_round_1_series_1_top_line"
      }, {
        id: "western_round_1_series_1_bridge"
      }, {
        id: "western_round_1_series_1_bottom_line"
      }, {
        id: "western_round_1_series_1_top_box",
        cls: "team_logo_box"
      }, {
        id: "western_round_1_series_1_bottom_box",
        cls: "team_logo_box"
      }, {
        id: "eastern_round_1_series_4_top_line"
      }, {
        id: "eastern_round_1_series_4_bridge"
      }, {
        id: "eastern_round_1_series_4_bottom_line"
      }, {
        id: "eastern_conf_finals_top_line"
      }, {
        id: "eastern_conf_finals_bridge"
      }, {
        id: "eastern_conf_finals_bottom_line"
      }, {
        id: "eastern_semi_finals_series_2_top_line"
      }, {
        id: "eastern_semi_finals_series_2_bridge"
      }, {
        id: "eastern_semi_finals_series_2_bottom_line"
      }, {
        id: "eastern_round_1_series_4_top_box",
        cls: "team_logo_box"
      }, {
        id: "eastern_semi_finals_series_2_bottom_box",
        cls: "team_logo_box"
      }, {
        id: "eastern_conf_finals_bottom_box",
        cls: "team_logo_box"
      }, {
        id: "eastern_semi_finals_series_2_top_box",
        cls: "team_logo_box"
      }, {
        id: "eastern_round_1_series_4_bottom_box",
        cls: "team_logo_box"
      }, {
        id: "eastern_nba_finals_box",
        cls: "team_logo_box"
      }, {
        id: "eastern_round_1_series_3_top_line"
      }, {
        id: "eastern_round_1_series_3_bridge"
      }, {
        id: "eastern_round_1_series_3_bottom_line"
      }, {
        id: "eastern_round_1_series_3_top_box",
        cls: "team_logo_box"
      }, {
        id: "eastern_round_1_series_3_bottom_box",
        cls: "team_logo_box"
      }, {
        id: "eastern_round_1_series_2_top_line"
      }, {
        id: "eastern_round_1_series_2_bridge"
      }, {
        id: "eastern_round_1_series_2_bottom_line"
      }, {
        id: "eastern_semi_finals_series_1_top_line"
      }, {
        id: "eastern_semi_finals_series_1_bridge"
      }, {
        id: "eastern_semi_finals_series_1_bottom_line"
      }, {
        id: "eastern_round_1_series_2_top_box",
        cls: "team_logo_box"
      }, {
        id: "eastern_semi_finals_series_1_bottom_box",
        cls: "team_logo_box"
      }, {
        id: "eastern_conf_finals_top_box",
        cls: "team_logo_box"
      }, {
        id: "eastern_semi_finals_series_1_top_box",
        cls: "team_logo_box"
      }, {
        id: "eastern_round_1_series_2_bottom_box",
        cls: "team_logo_box"
      }, {
        id: "eastern_round_1_series_1_top_line"
      }, {
        id: "eastern_round_1_series_1_bridge"
      }, {
        id: "eastern_round_1_series_1_bottom_line"
      }, {
        id: "eastern_round_1_series_1_top_box",
        cls: "team_logo_box"
      }, {
        id: "eastern_round_1_series_1_bottom_box",
        cls: "team_logo_box"
      }];
      var seeds = [{
        id: "western_round_1_series_0_upper_seed",
        x: -10,
        y: 24
      }, {
        id: "western_round_1_series_0_lower_seed",
        x: -10,
        y: 71
      }, {
        id: "western_round_1_series_1_upper_seed",
        x: -10,
        y: 126
      }, {
        id: "western_round_1_series_1_lower_seed",
        x: -10,
        y: 174
      }, {
        id: "western_round_1_series_2_upper_seed",
        x: -10,
        y: 224
      }, {
        id: "western_round_1_series_2_lower_seed",
        x: -10,
        y: 275
      }, {
        id: "western_round_1_series_3_upper_seed",
        x: -10,
        y: 328
      }, {
        id: "western_round_1_series_3_lower_seed",
        x: -10,
        y: 376
      }, {
        id: "western_round_2_series_0_upper_seed",
        x: 150,
        y: 13
      }, {
        id: "western_round_2_series_0_lower_seed",
        x: 150,
        y: 115
      }, {
        id: "western_round_2_series_1_upper_seed",
        x: 150,
        y: 216
      }, {
        id: "western_round_2_series_1_lower_seed",
        x: 150,
        y: 318
      }, {
        id: "western_round_3_series_0_upper_seed",
        x: 262,
        y: 64
      }, {
        id: "western_round_3_series_0_lower_seed",
        x: 262,
        y: 266
      }, {
        id: "eastern_round_1_series_0_upper_seed",
        x: 900,
        y: 24
      }, {
        id: "eastern_round_1_series_0_lower_seed",
        x: 900,
        y: 71
      }, {
        id: "eastern_round_1_series_1_upper_seed",
        x: 900,
        y: 126
      }, {
        id: "eastern_round_1_series_1_lower_seed",
        x: 900,
        y: 174
      }, {
        id: "eastern_round_1_series_2_upper_seed",
        x: 900,
        y: 224
      }, {
        id: "eastern_round_1_series_2_lower_seed",
        x: 900,
        y: 275
      }, {
        id: "eastern_round_1_series_3_upper_seed",
        x: 900,
        y: 328
      }, {
        id: "eastern_round_1_series_3_lower_seed",
        x: 900,
        y: 376
      }, {
        id: "eastern_round_2_series_0_upper_seed",
        x: 743,
        y: 13
      }, {
        id: "eastern_round_2_series_0_lower_seed",
        x: 743,
        y: 115
      }, {
        id: "eastern_round_2_series_1_upper_seed",
        x: 743,
        y: 216
      }, {
        id: "eastern_round_2_series_1_lower_seed",
        x: 743,
        y: 318
      }, {
        id: "eastern_round_3_series_0_upper_seed",
        x: 630,
        y: 64
      }, {
        id: "eastern_round_3_series_0_lower_seed",
        x: 630,
        y: 266
      }, {
        id: "finals_round_upper_seed",
        x: 380,
        y: 146
      }, {
        id: "finals_round_lower_seed",
        x: 510,
        y: 146
      }];
      var seriesStatus = [{
        id: "western_round_1_series_0",
        x: 78,
        y: 44
      }, {
        id: "western_round_1_series_1",
        x: 78,
        y: 147
      }, {
        id: "western_round_1_series_2",
        x: 78,
        y: 246
      }, {
        id: "western_round_1_series_3",
        x: 78,
        y: 350
      }, {
        id: "western_round_2_series_0",
        x: 180,
        y: 93
      }, {
        id: "western_round_2_series_1",
        x: 180,
        y: 296
      }, {
        id: "western_round_3_series_0",
        x: 280,
        y: 200
      }, {
        id: "eastern_round_1_series_0",
        x: 812,
        y: 44
      }, {
        id: "eastern_round_1_series_1",
        x: 812,
        y: 147
      }, {
        id: "eastern_round_1_series_2",
        x: 812,
        y: 246
      }, {
        id: "eastern_round_1_series_3",
        x: 812,
        y: 350
      }, {
        id: "eastern_round_2_series_0",
        x: 713,
        y: 93
      }, {
        id: "eastern_round_2_series_1",
        x: 713,
        y: 296
      }, {
        id: "eastern_round_3_series_0",
        x: 620,
        y: 200
      }, {
        id: "finals_round_4_series_0",
        x: 445,
        y: 270
      }];
      var logos = [{
        id: "playoffs_logo",
        width: 183,
        height: 68,
        x: 352,
        y: 0
      }, {
        id: "western_round_1_series_0_upper_logo",
        width: 40,
        height: 40,
        x: 1,
        y: 5
      }, {
        id: "western_round_1_series_0_lower_logo",
        width: 40,
        height: 40,
        x: 1,
        y: 51
      }, {
        id: "western_round_1_series_1_upper_logo",
        width: 40,
        height: 40,
        x: 1,
        y: 105
      }, {
        id: "western_round_1_series_1_lower_logo",
        width: 40,
        height: 40,
        x: 1,
        y: 152
      }, {
        id: "western_round_1_series_2_upper_logo",
        width: 40,
        height: 40,
        x: 1,
        y: 205
      }, {
        id: "western_round_1_series_2_lower_logo",
        width: 40,
        height: 40,
        x: 1,
        y: 257
      }, {
        id: "western_round_1_series_3_upper_logo",
        width: 40,
        height: 40,
        x: 1,
        y: 309
      }, {
        id: "western_round_1_series_3_lower_logo",
        width: 40,
        height: 40,
        x: 1,
        y: 355
      }, {
        id: "western_round_2_series_0_upper_logo",
        width: 40,
        height: 40,
        x: 130,
        y: 25
      }, {
        id: "western_round_2_series_0_lower_logo",
        width: 40,
        height: 40,
        x: 130,
        y: 130
      }, {
        id: "western_round_2_series_1_upper_logo",
        width: 40,
        height: 40,
        x: 130,
        y: 230
      }, {
        id: "western_round_2_series_1_lower_logo",
        width: 40,
        height: 40,
        x: 130,
        y: 330
      }, {
        id: "western_round_3_series_0_upper_logo",
        width: 40,
        height: 40,
        x: 242,
        y: 78
      }, {
        id: "western_round_3_series_0_lower_logo",
        width: 40,
        height: 40,
        x: 242,
        y: 280
      }, {
        id: "eastern_round_1_series_0_upper_logo",
        width: 40,
        height: 40,
        x: 849,
        y: 5
      }, {
        id: "eastern_round_1_series_0_lower_logo",
        width: 40,
        height: 40,
        x: 849,
        y: 51
      }, {
        id: "eastern_round_1_series_1_upper_logo",
        width: 40,
        height: 40,
        x: 849,
        y: 105
      }, {
        id: "eastern_round_1_series_1_lower_logo",
        width: 40,
        height: 40,
        x: 849,
        y: 152
      }, {
        id: "eastern_round_1_series_2_upper_logo",
        width: 40,
        height: 40,
        x: 849,
        y: 205
      }, {
        id: "eastern_round_1_series_2_lower_logo",
        width: 40,
        height: 40,
        x: 849,
        y: 257
      }, {
        id: "eastern_round_1_series_3_upper_logo",
        width: 40,
        height: 40,
        x: 849,
        y: 309
      }, {
        id: "eastern_round_1_series_3_lower_logo",
        width: 40,
        height: 40,
        x: 849,
        y: 355
      }, {
        id: "eastern_round_2_series_0_upper_logo",
        width: 40,
        height: 40,
        x: 723,
        y: 25
      }, {
        id: "eastern_round_2_series_0_lower_logo",
        width: 40,
        height: 40,
        x: 723,
        y: 130
      }, {
        id: "eastern_round_2_series_1_upper_logo",
        width: 40,
        height: 40,
        x: 723,
        y: 230
      }, {
        id: "eastern_round_2_series_1_lower_logo",
        width: 40,
        height: 40,
        x: 723,
        y: 330
      }, {
        id: "eastern_round_3_series_0_upper_logo",
        width: 40,
        height: 40,
        x: 610,
        y: 78
      }, {
        id: "eastern_round_3_series_0_lower_logo",
        width: 40,
        height: 40,
        x: 610,
        y: 280
      }, {
        id: "finals_round_upper_logo",
        width: 80,
        height: 80,
        x: 342,
        y: 160
      }, {
        id: "finals_round_lower_logo",
        width: 80,
        height: 80,
        x: 468,
        y: 160
      }];

      function renderShapes(paper) {
        for (var x = 0; x < svg.length; x++) {
          if (svg[x].type === "path") {
            var p = paper.path(svg[x].path);
            p.node.setAttribute("id", svgId[x].id);
            p.node.setAttribute("class", svgId[x].cls ? "team_logo_box" : "shape");
            p.attr({
              fill: svgId[x].cls ? 'url("/media/img/global/hardwood-square.jpg")' : "none",
              stroke: svg[x].stroke,
              "stroke-width": "2",
              "stroke-linecap": "square",
              "stroke-miterlimit": "10",
              "fill-opacity": 0,
              "stroke-opacity": 1
            })
          }
          if (!setViewBox) {
            paper.setViewBox(-30, -30, 940, 450, true);
            setViewBox = true
          }
        }
        var playoffLogo = $.grep(logos, function(e) {
          return e.id === "playoffs_logo"
        });
        var renderPlayoffLogo = paper.image("/media/img/Playoffs_Logo.svg", playoffLogo[0].x, playoffLogo[0].y, playoffLogo[0].width, playoffLogo[0].height).node.setAttribute("id", playoffLogo[0].id)
      }

      function unescapeChars(text) {
        var textValue = text;
        var escapedTextValue = $("<div/>").html(textValue).text();
        return escapedTextValue
      }

      function clickTextElement(text, round, series) {
        window.location.href = "/playoffs/series/#!/" + round + "/" + series + "/" + data.season.year
      }

      function clickTeamLogo(team) {
        window.location.href = "/teams/#!/" + team
      }

      function renderFinalSeriesData(finalsRound) {
        if (!finalsRound) {
          return
        }
        angular.forEach(finalsRound.rounds[0].series, function(series, key) {
          var westSeed = $.grep(seeds, function(e) {
            return e.id === "finals_round_upper_seed"
          });
          var eastSeed = $.grep(seeds, function(e) {
            return e.id === "finals_round_lower_seed"
          });
          var westLogo = $.grep(logos, function(e) {
            return e.id === "finals_round_upper_logo"
          });
          var eastLogo = $.grep(logos, function(e) {
            return e.id === "finals_round_lower_logo"
          });
          var seriesText = $.grep(seriesStatus, function(e) {
            return e.id === "finals_round_4_series_0"
          });
          var renderSeriesStatus = paper.text(seriesText[0].x, seriesText[0].y, unescapeChars(series.seriesText));
          renderSeriesStatus.attr("font", "10px 'Lato'");
          renderSeriesStatus.attr("fill", "#444");
          renderSeriesStatus.attr("cursor", "pointer");
          renderSeriesStatus.node.setAttribute("id", seriesText[0].id);
          var westSeedRenderLogo = paper.image("/media/img/teams/logos/" + series.highSeedOrWest.profile.abbr + "_logo.svg", westLogo[0].x, westLogo[0].y, westLogo[0].width, westLogo[0].height);
          westSeedRenderLogo.attr("cursor", "pointer");
          westSeedRenderLogo.node.setAttribute("id", westLogo[0].id);
          var eastSeedRenderLogo = paper.image("/media/img/teams/logos/" + series.lowSeedOrEast.profile.abbr + "_logo.svg", eastLogo[0].x, eastLogo[0].y, eastLogo[0].width, eastLogo[0].height);
          eastSeedRenderLogo.attr("cursor", "pointer");
          eastSeedRenderLogo.node.setAttribute("id", eastLogo[0].id);
          westSeedRenderLogo.click(function() {
            clickTeamLogo(series.highSeedOrWest.profile.code)
          });
          eastSeedRenderLogo.click(function() {
            clickTeamLogo(series.lowSeedOrEast.profile.code)
          });
          renderSeriesStatus.click(function() {
            key = key + 1;
            clickTextElement(this, 4, key)
          })
        })
      }

      function renderSeriesData(playoffRound) {
        if (!playoffRound) {
          return
        }
        var conference = playoffRound.groupName;
        angular.forEach(playoffRound.rounds, function(round, num) {
          var r = num + 1;
          angular.forEach(round.series, function(series, key) {
            var upperSeedRank = series.highSeedOrWest.standing.confRank;
            var lowerSeedRank = series.lowSeedOrEast.standing.confRank;
            var upperLogo = $.grep(logos, function(e) {
              return e.id === conference.toLowerCase() + "_round_" + r + "_series_" + key + "_upper_logo"
            });
            var lowerLogo = $.grep(logos, function(e) {
              return e.id === conference.toLowerCase() + "_round_" + r + "_series_" + key + "_lower_logo"
            });
            var seriesText = $.grep(seriesStatus, function(e) {
              return e.id === conference.toLowerCase() + "_round_" + r + "_series_" + key
            });
            var renderSeriesStatus = paper.text(seriesText[0].x, seriesText[0].y, unescapeChars(series.seriesText));
            renderSeriesStatus.attr("font", "10px 'Lato'");
            renderSeriesStatus.attr("fill", "#444");
            renderSeriesStatus.attr("cursor", "pointer");
            renderSeriesStatus.node.setAttribute("id", seriesText[0].id);
            var upperSeedRenderLogo = paper.image("/media/img/teams/logos/" + series.highSeedOrWest.profile.abbr + "_logo.svg", upperLogo[0].x, upperLogo[0].y, upperLogo[0].width, upperLogo[0].height);
            upperSeedRenderLogo.attr("cursor", "pointer");
            upperSeedRenderLogo.node.setAttribute("id", upperLogo[0].id);
            var lowerSeedRenderLogo = paper.image("/media/img/teams/logos/" + series.lowSeedOrEast.profile.abbr + "_logo.svg", lowerLogo[0].x, lowerLogo[0].y, lowerLogo[0].width, lowerLogo[0].height);
            lowerSeedRenderLogo.attr("cursor", "pointer");
            lowerSeedRenderLogo.node.setAttribute("id", lowerLogo[0].id);
            upperSeedRenderLogo.click(function() {
              clickTeamLogo(series.highSeedOrWest.profile.code)
            });
            lowerSeedRenderLogo.click(function() {
              clickTeamLogo(series.lowSeedOrEast.profile.code)
            });
            renderSeriesStatus.click(function() {
              var that = this;
              if (r === 1 && conference.toLowerCase() === "western") {
                key = key + 5;
                clickTextElement(that, r, key)
              } else if (r === 2 && conference.toLowerCase() === "western") {
                key = key + 3;
                clickTextElement(that, r, key)
              } else if (r === 3 && conference.toLowerCase() === "western") {
                key = key + 2;
                clickTextElement(that, r, key)
              } else {
                key = key + 1;
                clickTextElement(that, r, key)
              }
            });
            if (round.roundNo === "1") {
              var upperSeed = $.grep(seeds, function(e) {
                return e.id === conference.toLowerCase() + "_round_" + r + "_series_" + key + "_upper_seed"
              });
              var lowerSeed = $.grep(seeds, function(e) {
                return e.id === conference.toLowerCase() + "_round_" + r + "_series_" + key + "_lower_seed"
              });
              var upperSeedRenderText = paper.text(upperSeed[0].x, upperSeed[0].y, upperSeedRank);
              upperSeedRenderText.attr("font", "14px 'Oswald'");
              upperSeedRenderText.attr("fill", "#929090");
              upperSeedRenderText.node.setAttribute("id", upperSeed[0].id);
              var lowerSeedRenderText = paper.text(lowerSeed[0].x, lowerSeed[0].y, lowerSeedRank);
              lowerSeedRenderText.attr("font", "14px 'Oswald'");
              lowerSeedRenderText.attr("fill", "#929090");
              lowerSeedRenderText.node.setAttribute("id", lowerSeed[0].id)
            }
          })
        })
      }
      renderShapes(paper)
    }
  }
});
"use strict";
sib.directive("sibPlayoffScoreboardSlider", function() {
  return {
    restrict: "A",
    link: function postLink(scope, element, attrs, MiniGameSnapshotCtrl) {
      var viewport = {
        target: $(".viewport-inner"),
        gameSnapshots: $(".game"),
        visibleWidth: $(".scoreboard").width(),
        innerWidth: 0,
        currentOffset: 0,
        maxOffset: 0,
        transitionDelay: 500
      };
      scope.$watch("playoffSeriesData", function() {
        calculateViewportSize()
      });
      scope.$watch("mobile", function() {
        calculateViewportSize()
      });
      scope.viewport = {
        disable: {
          forward: true,
          reverse: true
        }
      };
      if (viewport.innerWidth > viewport.visibleWidth) {
        scope.viewport.disable.forward = false
      }

      function calculateViewportSize() {
        if (!scope.playoffSeriesData) {
          return
        }
        var dateWidth = 1;
        var gameWidth = 155;
        viewport.visibleWidth = $(".scoreboard").width();
        var viewportInner = document.getElementById("viewport-inner");
        viewport.innerWidth = 10 + scope.playoffSeriesData.games.length * gameWidth + (scope.playoffSeriesData.games.length - 1) * dateWidth;
        viewport.maxOffset = viewport.innerWidth - viewport.visibleWidth;
        if (viewport.innerWidth > viewport.visibleWidth) {
          scope.viewport.disable.forward = false
        }
        var page = $(element).find("#page");
        if (!scope.mobile) {
          page.width(viewport.innerWidth + "px")
        } else {
          page.width("100%")
        }
      }
      scope.viewportForward = function() {
        if (scope.viewport.disable.forward) {
          return
        }
        calculateViewportSize();
        var viewportStep = calculateViewportStep();
        viewport.currentOffset -= viewportStep;
        scope.viewport.disable.reverse = false;
        if (-viewport.currentOffset > viewport.maxOffset) {
          viewport.currentOffset = -viewport.maxOffset;
          scope.viewport.disable.forward = true
        } else {
          scope.viewport.disable.forward = false
        }
        slideViewport();
        setCurrentDate("forward")
      };
      scope.viewportReverse = function() {
        if (scope.viewport.disable.reverse) {
          return
        }
        var viewportStep = calculateViewportStep();
        viewport.currentOffset += viewportStep;
        scope.viewport.disable.forward = false;
        if (viewport.currentOffset >= 0) {
          viewport.currentOffset = 0;
          scope.viewport.disable.reverse = true
        } else {
          scope.viewport.disable.reverse = false
        }
        slideViewport();
        setCurrentDate("reverse")
      };

      function setCurrentDate(direction) {
        var found = false;
        var lastDate = null;
        for (var offset in scope.dateOffsets) {
          var date = scope.dateOffsets[offset];
          if (direction == "forward" && offset < -viewport.currentOffset) {
            scope.currentDate = date
          } else if (direction == "reverse" && offset > -viewport.currentOffset) {
            if (!found && lastDate) {
              scope.currentDate = lastDate;
              found = true
            }
          }
          lastDate = date
        }
      }

      function calculateViewportStep() {
        return parseInt($(".scoreboard").width() * .75)
      }

      function slideViewport() {
        viewport.target.animate({
          left: viewport.currentOffset
        }, viewport.transitionDelay)
      }
    }
  }
});
"use strict";
sib.directive("sibPlayoffSeriesContent", ["StatsFeedFetcher", "$filter", "$timeout", "Page", "FEEDS_CONFIG", function(StatsFeedFetcher, $filter, $timeout, Page, FEEDS_CONFIG) {
  return {
    require: "^sibContentSlider",
    restrict: "E",
    link: function(scope, element, attrs, sliderController) {
      debug("init sibPlayoffSeriesContent");
      var mobileBp = 768;
      var singleViewBp = 320;
      var isMobile = false;
      var intervalId;
      var seriesDataTimerId;
      var localDebug = true;
      var contentWidth = 151;
      var singleViewContentWidth = 220;
      var isInitialized = false;
      var defaultGameIndex = null;
      var seriesParams = createSeriesParams(attrs);

      function run() {
        if (getContentSliderWidth() > 0) {
          debug("content slider width > 0, proceeding...");
          loadSeriesData()
        } else {
          debug("content slider width == 0, waiting...");
          $timeout(run, 500)
        }
      }

      function getContentSliderWidth() {
        return $("sib-content-slider .content-slider").outerWidth()
      }

      function loadSeriesData(feedUrl) {
        var url = angular.isDefined(feedUrl) ? feedUrl : FEEDS_CONFIG.playoffSeriesScore;
        debug("loading url: " + url);
        StatsFeedFetcher.fetchData(url, {}, seriesParams, true, false).then(function(data) {
          var gamesArray;
          if (angular.isDefined(data.group.round.series.game && data.group.round.series.game != null)) {
            gamesArray = createGamesArray(data.group.round.series.game)
          } else {
            gamesArray = data.group.round.series.games
          }
          if (angular.isDefined(gamesArray)) {
            sliderController.setContentWidth(getContentWidth(), gamesArray.length);
            sliderController.setSlideFactor(getSlideFactor());
            sliderController.calculateViewport();
            var foundLiveGame = false;
            for (var i = 0; i < gamesArray.length; i++) {
              if (!foundLiveGame) {
                if (gamesArray[i].boxscore.status == "2") {
                  foundLiveGame = true;
                  debug("found live game. fast poll");
                  seriesDataTimerId = $timeout(function() {
                    loadSeriesData(FEEDS_CONFIG.playoffSeriesScoreLive)
                  }, FEEDS_CONFIG.liveFeedUpdateInterval)
                }
              }
              addStatus(gamesArray[i]);
              addHomeAndAway(gamesArray[i])
            }
            if (!foundLiveGame) {
              debug("no live game. slow poll");
              seriesDataTimerId = $timeout(function() {
                loadSeriesData()
              }, FEEDS_CONFIG.staticFeedUpdateInterval)
            }
            gamesArray = getMergedGameArray(gamesArray);
            addSeriesText(gamesArray, data.group.round.series.seriesText);
            setDefaultGame(gamesArray);
            scope.games = gamesArray;
            if (!isInitialized) {
              debug("inital view default game is " + gamesArray[defaultGameIndex].profile.gameId);
              if (sliderController.isItemOffScreenRight(defaultGameIndex)) {
                sliderController.alignItemToRightEdge(defaultGameIndex)
              }
              isInitialized = true
            }
          } else {
            debug("no games in feed")
          }
        })
      }

      function addStatus(game) {
        switch (Number(game.boxscore.status)) {
          case 2:
            game.status = "live";
            break;
          case 3:
            game.status = "post";
            break;
          default:
            game.status = "pre"
        }
      }

      function addHomeAndAway(game) {
        game.homeTeam = game.teamOne.isHome == "true" ? game.teamOne : game.teamTwo;
        game.awayTeam = game.teamTwo.isHome == "true" ? game.teamOne : game.teamTwo
      }

      function setDefaultGame(gamesArray) {
        var tmpIndex = null;
        for (var i = 0; i < gamesArray.length; i++) {
          if (gamesArray[i].isToday === "true") {
            tmpIndex = i;
            break
          }
        }
        if (tmpIndex == null) {
          for (var i = gamesArray.length - 1; i >= 0; i--) {
            if (gamesArray[i].boxscore.status == "3") {
              tmpIndex = i;
              break
            }
          }
        }
        defaultGameIndex = tmpIndex == null ? 0 : tmpIndex
      }

      function addSeriesText(gamesArray, seriesText) {
        var isSet = false;
        for (var i = gamesArray.length - 1; i >= 0; i--) {
          if (gamesArray[i].boxscore.status == "3" && !isSet) {
            gamesArray[i].seriesText = seriesText;
            isSet = true
          } else {
            gamesArray[i].seriesText = ""
          }
        }
      }

      function createSeriesParams(attrs) {
        var seriesParams = {
          roundNo: 4,
          seriesNo: 1,
          season: 2014
        };
        if (angular.isDefined(attrs)) {
          var seriesNo = Number(attrs["series"]);
          var roundNo = Number(attrs["round"]);
          var season = Number(attrs["season"]);
          if (isFinite(seriesNo) && isFinite(roundNo) && isFinite(season)) {
            seriesParams = {
              roundNo: roundNo,
              seriesNo: seriesNo,
              season: season
            }
          } else {
            debug("attributes not defined properly, using default")
          }
        }
        return seriesParams
      }

      function createGamesArray(game) {
        var gamesArray = [];
        var gameIndex = Number(game.profile.gameId.substring(game.profile.gameId.length - 1)) - 1;
        for (var i = 0; i < scope.games.length; i++) {
          if (i == gameIndex) {
            debug("putting game " + gameIndex + " into the array");
            gamesArray.push(game)
          } else {
            gamesArray.push(scope.games[i])
          }
        }
        return gamesArray
      }

      function getMergedGameArray(gamesArray) {
        var tmpScopeGames = angular.merge({}, scope.games);
        var tmpDataGames = angular.merge({}, gamesArray);
        var tmpGames = angular.merge({}, tmpScopeGames, tmpDataGames);
        gamesArray = new Array;
        gamesArray = Object.keys(tmpGames).map(function(key) {
          return tmpGames[key]
        });
        return gamesArray
      }

      function debug(s) {
        if (FEEDS_CONFIG.debug || localDebug) {
          console.log(s)
        }
      }
      scope.isWinner = function(score, comparisonScore) {
        var winner = false;
        if (Number(score) > Number(comparisonScore)) {
          winner = true
        }
        return winner
      };
      scope.showOverlay = function(game) {
        if (!isMobile) {
          game.openOverlay = true;
          debug("show: " + game.profile.gameId)
        }
      };
      scope.hideOverlay = function(game) {
        if (!isMobile) {
          game.openOverlay = false;
          debug("hide: " + game.profile.gameId)
        }
      };
      scope.toggleOverlay = function(game) {
        if (isMobile) {
          game.openOverlay = !game.openOverlay;
          debug("toggling overlay to: " + game.openOverlay + " target:" + game.profile.gameId)
        }
      };

      function getWindowWidth() {
        return $(window).innerWidth()
      }

      function isSingleViewMode() {
        return getWindowWidth() <= singleViewBp
      }
      scope.$watch(getWindowWidth, function(newValue, oldValue) {
        isMobile = newValue < mobileBp;
        debug("isMobile: " + isMobile + " newValue: " + newValue + " oldValue: " + oldValue);
        if (angular.isDefined(scope.games) && newValue != oldValue) {
          debug("page resize, resetting view");
          sliderController.setContentWidth(getContentWidth(), scope.games.length);
          sliderController.calculateViewport();
          sliderController.setSlideFactor(getSlideFactor());
          sliderController.alignItemToLeftEdge(0)
        }
      });

      function getSlideFactor() {
        if (isSingleViewMode()) {
          return 1
        }
        return .8
      }

      function getContentWidth() {
        if (isSingleViewMode()) {
          return singleViewContentWidth
        }
        return contentWidth
      }
      window.addEventListener("resize", function() {
        $timeout(function() {
          scope.$apply()
        })
      });
      element.on("$destroy", function() {
        $timeout.cancel(seriesDataTimerId)
      });
      debug("sibPlayoffSeriesContent run");
      run()
    },
    templateUrl: "/templates/slider/playoffseriescontent.html"
  }
}]);
"use strict";
sib.directive("sibRotowireNewsList", ["Page", "SimpleFeedFetcher", "$location", "Site", "$timeout", function(Page, SimpleFeedFetcher, $location, Site, $timeout) {
  return {
    restrict: "E",
    scope: {},
    link: function(scope, element, attrs) {
      var template = angular.isUndefined(attrs["template"]) ? "news" : attrs["template"];
      var fetchInterval = angular.isUndefined(attrs["fetchInterval"]) ? 3e5 : attrs["fetchInterval"];
      var updateInterval = angular.isUndefined(attrs["updateInterval"]) ? 6e5 : attrs["updateInterval"];
      var param = $location.path().substring(1);
      var config = angular.isUndefined(attrs["siteConfig"]) ? null : attrs["siteConfig"];
      scope.fileLocation = "/templates/rotowire/" + template + ".html";

      function fetchNews(args) {
        SimpleFeedFetcher.proxy(args).then(function(data) {
          for (var key in data) {
            if (data.hasOwnProperty(key)) {
              scope.newsList = data[key].slice(0, attrs["maxItems"] || 10);
              break
            }
          }
          $timeout(function() {
            fetchNews()
          }, updateInterval)
        }, function(reason) {
          console.log(reason.statusText);
          $timeout(function() {
            fetchNews()
          }, fetchInterval)
        })
      }
      if (angular.isDefined(config) && Site.hasOwnProperty(config) && Site[config] == true) {
        var args = {
          url: "http://stats-prod.nba.com/feed/",
          params: {
            feedType: "rotowire_player"
          }
        };
        if (config == "teamNews") {
          args.params.team = param
        } else if (config == "playerNews") {
          args.params.playerCode = param
        }
        fetchNews(args)
      }
    },
    template: '<div data-ng-include="fileLocation"></div>'
  }
}]);
"use strict";
sib.directive("sibScoreboardDate", ["$timeout", "$filter", function($timeout, $filter) {
  return {
    require: "^sibScoreboardSlider",
    restrict: "AE",
    scope: {
      date: "=",
      key: "=",
      games: "=",
      mobile: "@"
    },
    link: function postLink(scope, element, attrs, sibScoreboardSlider) {
      var counter = 0;
      var MAX_WAIT_ITERATION = 10;
      var WAIT_TIME_MS = 500;
      var isOffsetSet = false;
      scope.$watch("date", function(dateValue) {
        if (!dateValue) {
          return
        }
        scope.gameCount = scope.games ? scope.games.length : 0;
        var dateObject = {
          millis: Number(scope.date)
        };
        scope.dateObject = dateObject;

        function setOffset() {
          var offset = element.children()[0].offsetLeft;
          if (offset > 0 && angular.isDefined(sibScoreboardSlider)) {
            sibScoreboardSlider.addDateOffset(scope.date, offset);
            sibScoreboardSlider.addGamesOffset(scope.games, offset);
            sibScoreboardSlider.addKeyOffset(scope.key, offset);
            isOffsetSet = true
          }
          return isOffsetSet
        }

        function waitForElement() {
          if (!isOffsetSet && counter++ < MAX_WAIT_ITERATION && !setOffset()) {
            $timeout(waitForElement, WAIT_TIME_MS)
          }
        }
        waitForElement()
      })
    },
    template: '<div class="date" id="scoreboard-date" >' + '<div data-ng-hide="{{mobile}}">' + "<span class=\"month\">{{ dateObject.millis | date: 'MMM' }}</span>" + "<span class=\"num\">{{ dateObject.millis | date: 'd' }}</span>" + "<span class=\"day\">{{ dateObject.millis | date: 'scoreBoardDay' }}</span>" + '<span class="gamecount">{{ gameCount }}</span><span class="gametext" data-ng-i18next="navbar.games"></span>' + "</div>" + '<span data-ng-show="{{mobile}}">{{ dateObject.millis | date:\'monthDay\' }} ({{ gameCount }} <span data-ng-i18next="navbar.games"></span>)</span>' + "</div>"
  }
}]);
"use strict";
sib.directive("sibScoreboardSlider", function() {
  return {
    restrict: "A",
    controller: ["$scope", "$element", function($scope, $element) {
      var dateOffsets = $scope.dateOffsets = {};
      var gamesOffsets = $scope.gamesOffsets = {};
      var keyOffsets = $scope.keyOffsets = {};
      this.addDateOffset = function(date, offset) {
        if (dateOffsets[offset] == null) {
          dateOffsets[offset] = parseInt(date, 10)
        }
      };
      this.addGamesOffset = function(games, offset) {
        if (gamesOffsets[offset] == null) {
          gamesOffsets[offset] = games
        }
      };
      this.addKeyOffset = function(key, offset) {
        if (keyOffsets[key] == null) {
          keyOffsets[key] = offset
        }
        if (key == "today") {
          $scope.todayOffset = offset
        } else if (key == "next") {
          $scope.todayOffset = keyOffsets["today"] != null ? keyOffsets["today"] : keyOffsets["next"]
        }
      }
    }],
    link: function postLink(scope, element, attrs, MiniGameSnapshotCtrl) {
      var viewport = {
        target: $(".viewport-inner"),
        gameSnapshots: $(".game"),
        visibleWidth: $(".scoreboard").width(),
        innerWidth: 0,
        currentOffset: 0,
        maxOffset: 0,
        transitionDelay: 500
      };
      scope.$watch("gamesByDay", function() {
        calculateViewportSize()
      });
      scope.$watch("mobile", function() {
        calculateViewportSize();
        if (scope.mobile) {
          viewport.target.css({
            left: 0
          })
        } else {
          viewport.target.css({
            left: viewport.currentOffset
          })
        }
      });
      scope.$watch("todayOffset", function() {
        if (scope.todayOffset > 0) {
          var offset = -(scope.todayOffset + 45);
          scope.viewport.disable.reverse = false;
          scope.startOffset = offset;
          viewport.currentOffset = offset;
          viewport.target.css({
            left: offset
          });
          setCurrentDate("forward")
        }
      });
      scope.viewport = {
        disable: {
          forward: true,
          reverse: true
        }
      };
      if (viewport.innerWidth > viewport.visibleWidth) {
        scope.viewport.disable.forward = false
      }

      function calculateViewportSize() {
        if (!scope.gamesByDay) {
          return
        }
        var dateWidth = 55;
        var gameWidth = 155;
        viewport.visibleWidth = $(".scoreboard").width();
        var viewportInner = document.getElementById("viewport-inner");
        viewport.innerWidth = 70 + scope.gameCount * gameWidth + (scope.gamesByDay.length - 1) * dateWidth;
        viewport.maxOffset = viewport.innerWidth - viewport.visibleWidth;
        if (viewport.innerWidth > viewport.visibleWidth) {
          scope.viewport.disable.forward = false
        }
        var page = $(element).find("#page");
        if (!scope.mobile) {
          page.width(viewport.innerWidth + "px")
        } else {
          page.width("auto")
        }
      }
      scope.viewportForward = function() {
        if (scope.viewport.disable.forward) {
          return
        }
        calculateViewportSize();
        var viewportStep = calculateViewportStep();
        viewport.currentOffset -= viewportStep;
        scope.viewport.disable.reverse = false;
        if (-viewport.currentOffset > viewport.maxOffset) {
          if ($(".viewport").width() < $(".scoreboard").width()) {
            viewport.currentOffset = scope.startOffset
          } else {
            viewport.currentOffset = -viewport.maxOffset
          }
          scope.viewport.disable.forward = true
        } else {
          scope.viewport.disable.forward = false
        }
        slideViewport();
        setCurrentDate("forward")
      };
      scope.viewportReverse = function() {
        if (scope.viewport.disable.reverse) {
          return
        }
        var viewportStep = calculateViewportStep();
        viewport.currentOffset += viewportStep;
        scope.viewport.disable.forward = false;
        if (viewport.currentOffset >= 0) {
          viewport.currentOffset = 0;
          scope.viewport.disable.reverse = true
        } else {
          scope.viewport.disable.reverse = false
        }
        slideViewport();
        setCurrentDate("reverse")
      };

      function setCurrentDate(direction) {
        var found = false;
        var lastDate = null;
        var lastGames = null;
        for (var offset in scope.dateOffsets) {
          var date = scope.dateOffsets[offset];
          var games = scope.gamesOffsets[offset];
          if (direction == "forward" && offset < -viewport.currentOffset) {
            scope.currentDate = date;
            scope.currentGames = games
          } else if (direction == "reverse" && offset > -viewport.currentOffset) {
            if (!found && lastDate) {
              scope.currentDate = lastDate;
              scope.currentGames = lastGames;
              found = true
            }
          }
          lastDate = date;
          lastGames = games
        }
      }

      function calculateViewportStep() {
        return parseInt($(".scoreboard").width() * .75, 10)
      }

      function slideViewport() {
        viewport.target.animate({
          left: viewport.currentOffset
        }, viewport.transitionDelay)
      }
    }
  }
});
"use strict";
sib.directive("sibScoreboardStrip", function() {
  return {
    restrict: "E",
    controller: function($scope, $element, $attrs) {},
    link: function(scope, element, attrs) {},
    templateUrl: "/templates/sibscoreboardstrip/template.html"
  }
});
"use strict";
sib.directive("sibScoresCalendar", ["$filter", "$locale", "$rootScope", function($filter, $locale, $rootScope) {
  return {
    restrict: "E",
    scope: {
      monthIndex: "=",
      calPosition: "=",
      gameData: "=",
      activeDate: "="
    },
    link: function link(scope, element, attrs) {
      if (!scope.monthIndex) {
        scope.monthIndex = 0
      }
      var calendarPosition = "";
      switch (scope.calPosition) {
        case "left":
          calendarPosition = "prev-month-cal";
          break;
        case "right":
          calendarPosition = "next-month-cal";
          break;
        default:
          calendarPosition = "";
          break
      }
      $rootScope.$on("$localeChangeError", function() {
        if ($locale.id != "undefined") {
          setCal();
          scope.$watch("monthIndex", function() {
            setCal()
          })
        }
      });
      $rootScope.$on("$localeChangeSuccess", function() {
        setCal();
        scope.$watch("monthIndex", function() {
          setCal()
        })
      });

      function getTime() {
        var now = new Date;
        var hour = now.getHours();
        var minute = now.getMinutes();
        now = null;
        var ampm = "";
        if (hour >= 12) {
          hour -= 12;
          ampm = "PM"
        } else {
          ampm = "AM";
          hour = hour == 0 ? 12 : hour
        }
        if (minute < 10) {
          minute = "0" + minute
        }
        return hour + ":" + minute + " " + ampm
      }

      function leapYear(year) {
        if (year % 4 == 0) {
          return true
        } else {
          return false
        }
      }

      function getDays(month, year) {
        var ar = new Array(12);
        ar[0] = 31;
        ar[1] = leapYear(year) ? 29 : 28;
        ar[2] = 31;
        ar[3] = 30;
        ar[4] = 31;
        ar[5] = 30;
        ar[6] = 31;
        ar[7] = 31;
        ar[8] = 30;
        ar[9] = 31;
        ar[10] = 30;
        ar[11] = 31;
        return ar[month]
      }

      function getMonthName(month) {
        var ar = new Array(12);
        ar[0] = $locale.DATETIME_FORMATS.MONTH[0];
        ar[1] = $locale.DATETIME_FORMATS.MONTH[1];
        ar[2] = $locale.DATETIME_FORMATS.MONTH[2];
        ar[3] = $locale.DATETIME_FORMATS.MONTH[3];
        ar[4] = $locale.DATETIME_FORMATS.MONTH[4];
        ar[5] = $locale.DATETIME_FORMATS.MONTH[5];
        ar[6] = $locale.DATETIME_FORMATS.MONTH[6];
        ar[7] = $locale.DATETIME_FORMATS.MONTH[7];
        ar[8] = $locale.DATETIME_FORMATS.MONTH[8];
        ar[9] = $locale.DATETIME_FORMATS.MONTH[9];
        ar[10] = $locale.DATETIME_FORMATS.MONTH[10];
        ar[11] = $locale.DATETIME_FORMATS.MONTH[11];
        return ar[month]
      }

      function setCal() {
        now = null;
        var now = new Date;
        var currentDate = now.getDate();
        now.setMonth(now.getMonth() + scope.monthIndex, 1);
        var year = now.getFullYear();
        var month = now.getMonth();
        var monthName = getMonthName(month);
        var date = scope.monthIndex == 0 ? currentDate : null;
        var firstDayInstance = new Date(year, month, 1);
        var firstDay = firstDayInstance.getDay();
        firstDayInstance = null;
        var days = getDays(month, year);
        drawCal(firstDay + 1, days, date, monthName, year, month)
      }

      function drawCal(firstDay, lastDate, date, monthName, year, month) {
        var monthDate = new Date(year, month);
        var monthDateText = $filter("date")(monthDate, "monthYear");
        var filteredMonthDate = $filter("date")(monthDate, "MM/yyyy");
        var text = "";
        text += '<TABLE  class="sib-calendar" id="' + calendarPosition + '">';
        text += "<TH COLSPAN=7>";
        text += '<a href="/schedule/#!/' + filteredMonthDate + '"><b>';
        text += monthDateText;
        text += "</b></a>";
        text += "</TH>";
        var openCol = '<TD  class="day_label">';
        var closeCol = "</TD>";
        var weekDay = new Array(7);
        weekDay[0] = $locale.DATETIME_FORMATS.SHORTDAY[0];
        weekDay[1] = $locale.DATETIME_FORMATS.SHORTDAY[1];
        weekDay[2] = $locale.DATETIME_FORMATS.SHORTDAY[2];
        weekDay[3] = $locale.DATETIME_FORMATS.SHORTDAY[3];
        weekDay[4] = $locale.DATETIME_FORMATS.SHORTDAY[4];
        weekDay[5] = $locale.DATETIME_FORMATS.SHORTDAY[5];
        weekDay[6] = $locale.DATETIME_FORMATS.SHORTDAY[6];
        text += '<TR class="day-title">';
        for (var dayNum = 0; dayNum < 7; ++dayNum) {
          text += openCol + weekDay[dayNum] + closeCol
        }
        text += "</TR>";
        var digit = 1;
        var curCell = 1;
        for (var row = 1; row <= Math.ceil((lastDate + firstDay - 1) / 7); ++row) {
          text += "<TR>";
          for (var col = 1; col <= 7; ++col) {
            var todayDate = new Date(year, month, digit);
            var filteredDate = $filter("date")(todayDate, "yyyy-MM-dd");
            var filteredActiveDate = $filter("date")(scope.activeDate, "yyyy-MM-dd");
            if (digit > lastDate) break;
            if (curCell < firstDay) {
              text += '<TD class="no_date"></TD>';
              curCell++
            } else {
              if (scope.monthIndex == 0) {
                if (digit == date) {
                  text += '<TD class="active" ><a href="/scores/#!/' + filteredDate + '" class="anchor-unstyled sibCalendarLink">' + digit + "</a></TD>"
                } else {
                  text += '<TD><a href="/scores/#!/' + filteredDate + '" class="anchor-unstyled sibCalendarLink">' + digit + "</a></TD>"
                }
              } else {
                text += '<TD><a href="/scores/#!/' + filteredDate + '" class="anchor-unstyled sibCalendarLink">' + digit + "</a></TD>"
              }
              digit++
            }
          }
          text += "</TR>"
        }
        text += "</TABLE>";
        $(element).html(text)
      }
    }
  }
}]);
"use strict";
sib.directive("sibSlideShow", ["$location", "SimpleFeedFetcher", "Page", "FEEDS_CONFIG", function($location, SimpleFeedFetcher, Page, FEEDS_CONFIG) {
  return {
    restrict: "E",
    link: function(scope, element, attrs) {
      var urlParam = typeof $location.search().url == "undefined" ? $location.path() : $location.search().url;
      if (urlParam) {
        scope.currentPage = 1;
        scope.maxPages = 1;
        SimpleFeedFetcher.get(decodeURIComponent(urlParam)).then(function(data) {
          scope.galleryDescription = data.ListHeader[0].ListDescription;
          scope.photos = data.ListItems;
          scope.maxPages = scope.photos.length;
          scope.currentImage = scope.photos[0].ListItemImageURL;
          scope.currentCaption = scope.photos[0].ListItemCaption;
          scope.currentAbstract = scope.photos[0].ListItemAbstract;
          Page.setLoading(false)
        });
        scope.changePage = function() {
          scope.currentImage = scope.photos[scope.currentPage - 1].ListItemImageURL;
          scope.currentCaption = scope.photos[scope.currentPage - 1].ListItemCaption;
          scope.currentAbstract = scope.photos[scope.currentPage - 1].ListItemAbstract
        };
        scope.paginate = function(direction) {
          scope.paginating = true;
          if (FEEDS_CONFIG.debug) console.log("go " + direction);
          switch (direction) {
            case "prev":
              if (scope.currentPage > 1) {
                scope.currentPage--;
                scope.changePage()
              }
              break;
            case "next":
              if (scope.currentPage < scope.maxPages) {
                scope.currentPage++;
                scope.changePage()
              }
              break
          }
        };
        var element = document.getElementById("sib-list-galleries");
        if (!$("html").hasClass("ie8") && element) {
          if (window.isAndroid) {
            Hammer(element).on("dragleft", function(event) {
              event.preventDefault();
              Hammer(element).trigger("swipeleft", event)
            });
            Hammer(element).on("dragright", function(event) {
              event.preventDefault();
              Hammer(element).trigger("swiperight", event)
            })
          }
          Hammer(element).on("swipeleft", function(event) {
            event.preventDefault();
            scope.paginate("prev");
            if (!scope.$$phase) {
              scope.$apply()
            }
          });
          Hammer(element).on("swiperight", function(event) {
            event.preventDefault();
            scope.paginate("next");
            if (!scope.$$phase) {
              scope.$apply()
            }
          })
        }
      } else {
        console.log("error : there is no url src")
      }
    },
    templateUrl: "/templates/photo/slideshow.html"
  }
}]);
"use strict";
sib.directive("sibSocialIcons", function() {
  return {
    restrict: "E",
    scope: {
      label: "@",
      smLabel: "@",
      linkI18nextTitle: "@"
    },
    controller: ["$scope", "$element", "$attrs", function($scope, $element, $attrs) {
      $scope.$watch(function() {
        return window.location.href
      }, function() {
        $scope.location = window.location.href.split("?")[0]
      });
      if (!$scope.linkI18nextTitle) {
        $scope.$watch(function() {
          return window.document.title
        }, function() {
          $scope.socialIconMessage = window.document.title
        })
      }
    }],
    template: '<div class="social-wrap">' + '<div class="social-icons">' + '<a target="_blank" href="http://twitter.com/home?status={{ socialIconMessage | i18next }} {{ location | encode }}"><i class="icon-twitter"></i></a>' + '<a target="_blank" href="http://www.facebook.com/sharer/sharer.php?s=100&p[title]={{ socialIconMessage | i18next }}&p[url]={{ location | encode }}"><i class="icon-facebook"></i></a>' + '<a target="_blank" href="mailto:?subject={{ socialIconMessage | i18next }}&body={{ socialIconMessage | i18next }} {{ location }}"><i class="icon-envelope-alt"></i></a>' + "</div>" + '<span class="share-label">' + '<span class="visible-lg" data-ng-hide="!label">{{ label | i18next }}</span>' + '<span class="hidden-lg" data-ng-hide="!smLabel">{{ smLabel | i18next }}</span>' + "</span>" + "</div>"
  }
});
"use strict";
sib.directive("sibTeamTwitter", function() {
  return {
    restrict: "E",
    scope: {
      teamTwitter: "="
    },
    link: function postLink(scope, iElement, iAttrs) {
      scope.$watch("teamTwitter", function(teamTwitter) {
        if (teamTwitter) {
          var elBody = '<div class="list-title"><span>Team Twitter</span><a href="https://twitter.com/' + teamTwitter + '" class="twitter-follow-button" data-show-count="false" data-lang="en">Follow @' + teamTwitter + "</a></div>";
          elBody += '<div class="twitter-feed"><a class="twitter-timeline" href="https://twitter.com/' + teamTwitter + '" data-widget-id="378246099670032384" data-screen-name="' + teamTwitter + '" height="300" lang="EN" data-tweet-limit="3" data-chrome="noheader nofooter">Tweets by @' + teamTwitter + '</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script></div><div class="twitter-footer"></div>';
          $(iElement).html(elBody);
          if (typeof twttr != "undefined") {
            twttr.widgets.load()
          }
        }
      })
    }
  }
});
sib.directive("sibTeamUrls", ["Site", function(Site) {
  return {
    restrict: "A",
    scope: {
      team: "="
    },
    link: function(scope, element, attribute) {
      function isDisableLeagueTeam(leagueId) {
        if (Site.hasOwnProperty("disableLeagueTeam") && Site.disableLeagueTeam.indexOf(leagueId) > -1) {
          return true
        } else {
          return false
        }
      }
      scope.$watch("team", function(team) {
        if (team) {
          if (!scope.team.isLeagueTeam || isDisableLeagueTeam(scope.team.leagueId)) {
            if (element.hasClass("anchor-unstyled")) {
              element.removeClass("anchor-unstyled");
              element.addClass("unstyled")
            }
            if (!element.hasClass("team-player-anchor-unstyled")) {
              element.addClass("team-player-anchor-unstyled")
            }
          }
          if (!scope.team.isLeagueTeam || isDisableLeagueTeam(scope.team.leagueId)) {
            if (element.attr("href")) {
              element.removeAttr("href");
              element.on("click", function(event) {
                event.preventDefault()
              })
            }
          }
          if (scope.team.isAllStarTeam) {
            if (element.attr("href")) {
              var value = element.attr("href");
              element.attr("href", value.replace("teams/#!/", "teams/allstar/roster/#!/"))
            }
          }
        }
      })
    }
  }
}]);
sib.directive("sibTimeago", function() {
  var msPerMinute = 60 * 1e3;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  return {
    restrict: "E",
    scope: {
      timestamp: "="
    },
    link: function(scope, element, attrs) {
      var displayTime = "";
      var currentTime = (new Date).getTime();
      var timeago = currentTime - scope.timestamp * 1e3;

      function pluralize(qty, unit) {
        var displayUnit = unit;
        if (qty > 1) {
          displayUnit += "s"
        } else if (qty <= 0) {
          qty = 1
        }
        return qty + " " + displayUnit
      }
      if (timeago < msPerMinute) {
        displayTime += pluralize(Math.floor(timeago / 1e3), "sec")
      } else if (timeago < msPerHour) {
        displayTime += pluralize(Math.floor(timeago / msPerMinute), "min")
      } else if (timeago < msPerDay) {
        displayTime += pluralize(Math.floor(timeago / msPerHour), "hour")
      } else {
        displayTime += pluralize(Math.floor(timeago / msPerDay), "day")
      }
      scope.displayTime = displayTime
    },
    template: '<div class="timeago">{{displayTime}}</div>'
  }
});
"use strict";
sib.directive("sibTopNews", ["$window", function($window, $timeout) {
  return {
    restrict: "E",
    transclude: true,
    link: function(scope, element, attrs) {
      if (attrs["mobile"]) {
        scope.mobile = attrs["mobile"]
      }
      if (attrs["desktop"]) {
        scope.desktop = attrs["desktop"]
      }
      if (attrs["title"]) {
        scope.title = attrs["title"]
      }
      if (attrs["subtitle"]) {
        scope.subtitle = attrs["subtitle"]
      }
      if (attrs["href"]) {
        scope.href = attrs["href"]
      }
      scope.$watch(function() {
        return $window.innerWidth
      }, function(newValue) {
        if (newValue < 768) {
          scope.image = scope.mobile
        } else {
          scope.image = scope.desktop
        }
      });
      $window.addEventListener("resize", function() {
        if (!scope.$$phase) {
          scope.$apply()
        }
      })
    },
    template: '<div class="top-news row">' + '<div class="col-lg-8 col-md-8 col-sm-12 news-image">' + '<a data-ng-href="{{href}}"><img data-ng-src="{{image}}" /></a>' + "</div>" + '<div class="col-lg-4 col-md-4 col-sm-12 news-text">' + '<a data-ng-href="{{href}}"><h1 class="news-title">{{title}}</h1></a>' + '<div class="news-subtitle">{{subtitle}}</div>' + '<div class="news-description" data-ng-transclude></div>' + "</div>" + "</div>"
  }
}]);
"use strict";
sib.directive("sibTwitterList", ["SimpleFeedFetcher", "$filter", "$interval", "$http", function(SimpleFeedFetcher, $filter, $interval, $http) {
  return {
    require: "^sibListSlider",
    restrict: "E",
    link: function(scope, element, attrs, sliderController) {
      var intervalId;
      var limit = 12;
      var pollingInterval = 3 * 60 * 1e3;
      var pageAnimationSpeed = 500;
      var categoryAnimationSpeed = 1500;
      var endpoints = {
        NBA: "http://api.massrelevance.com/NBA_Interactive/gt_latestfeed.json?callback=JSON_CALLBACK&limit=" + limit,
        "ALL NBA": "http://api.massrelevance.com/NBA_Interactive/gt_latestfeed_all.json?callback=JSON_CALLBACK&limit=" + limit
      };
      var endpoint = endpoints.NBA;
      var types = ["hashtags", "urls", "user_mentions", "media"];

      function appendCategories() {
        var select = $("<select></select>", {
          id: "social-category"
        });
        for (var key in endpoints) {
          if (endpoints.hasOwnProperty(key)) {
            $("<option></option>", {
              value: endpoints[key],
              text: key
            }).appendTo(select)
          }
        }
        select.on("change", function() {
          endpoint = $("#social-category").val();
          sliderController.calculateViewport();
          sliderController.setAnimationSpeed(categoryAnimationSpeed);
          sliderController.paginate(1);
          scope.$apply();
          $interval.cancel(intervalId);
          load();
          sliderController.setAnimationSpeed(pageAnimationSpeed)
        });
        select[0].selectedIndex = 0;
        $("." + sliderController.getUidClass()).find(".sib-slider-header").append($('<div class="selection-wrap"></div>').append(select))
      }
      scope.$watch(function() {
        return $(document).width()
      }, function(newValue, oldValue) {
        var ww = newValue;
        sliderController.adjustViewport(ww, 0, 400, 1);
        sliderController.adjustViewport(ww, 400, 992, 2);
        sliderController.adjustViewport(ww, 992, Infinity, 3);
        sliderController.calculateViewport()
      });

      function getEntityHtml(text, obj, type) {
        var oldText = text.substring(obj.indices[0], obj.indices[1]);
        var anchorText = "";
        if (type == "user_mentions") {
          anchorText += '<a class="twitter-link" href="http://twitter.com/' + obj.screen_name + '" target="_blank">'
        } else if (type == "urls") {
          anchorText += '<a class="twitter-link" href="' + obj.expanded_url + '" target="_blank">'
        } else if (type == "hashtags") {
          anchorText += '<a class="twitter-link" href="http://twitter.com/search?q=%23' + obj.text + '&src=hash" target="_blank">'
        } else if (type == "media") {
          anchorText += '<a class="twitter-link" href="' + obj.expanded_url + '" target="_blank">'
        }
        anchorText += oldText + (anchorText.length > 0 ? "</a>" : "");
        var obj = {
          oldText: oldText,
          newText: anchorText
        };
        return obj
      }

      function formatTweet(item) {
        item.retweeted = item.retweeted_status ? true : false;
        var itemObj = item.retweeted ? item.retweeted_status.entities : item.entities;
        var textEdit = item.retweeted ? item.retweeted_status.text : item.text;
        item.author = item.retweeted ? item.retweeted_status.user : item.user;
        item.displayText = textEdit;
        var textArray = [];
        for (var key in itemObj) {
          if (itemObj.hasOwnProperty(key) && types.indexOf(key) >= 0) {
            angular.forEach(itemObj[key], function(obj) {
              textArray.push(getEntityHtml(textEdit, obj, key))
            })
          }
        }
        angular.forEach(textArray, function(obj) {
          item.displayText = item.displayText.replace(obj.oldText, obj.newText)
        });
        if (item.displayText.match(/^\./)) {
          item.displayText = item.displayText.substring(1)
        }
      }

      function addDisplayDate(item) {
        var date = new Date(item.created_at.replace(/^\w+ (\w+) (\d+) ([\d:]+) \+0000 (\d+)$/, "$1 $2 $4 $3 UTC")).getTime();
        var currentDate = (new Date).getTime();
        var diff = currentDate - date;
        var sec = 1e3;
        var min = 60 * sec;
        var hour = 60 * min;
        var day = 24 * hour;
        var week = 7 * day;
        if (diff / min < 60) {
          item.displayDate = Math.round(diff / min) + "m"
        } else if (diff / hour < 24) {
          item.displayDate = Math.round(diff / hour) + "h"
        } else if (diff / day < 7) {
          item.displayDate = Math.round(diff / day) + "d"
        } else {
          item.displayDate = Math.round(diff / week) + "w"
        }
      }

      function load() {
        var promise = SimpleFeedFetcher.get(endpoint, "jsonp").then(function(data) {
          angular.forEach(data, function(item) {
            addDisplayDate(item);
            formatTweet(item)
          });
          scope.data = data;
          sliderController.setItemCount(data.length);
          intervalId = $interval(function() {
            load()
          }, pollingInterval)
        })
      }
      element.on("$destroy", function() {
        $interval.cancel(intervalId)
      });
      load();
      sliderController.setAnimationSpeed(pageAnimationSpeed);
      appendCategories()
    },
    templateUrl: "/templates/slider/twitterlist.html"
  }
}]);
"use strict";
sib.directive("sibVideoList", ["SimpleFeedFetcher", "$filter", "$timeout", function(SimpleFeedFetcher, $filter, $timeout) {
  return {
    require: "^sibListSlider",
    restrict: "E",
    link: function(scope, element, attrs, sliderController) {
      var pageAnimationSpeed = 500;
      var categoryAnimationSpeed = 1500;
      var categories = attrs["categories"] ? angular.fromJson(attrs["categories"]) : null;

      function appendCategories() {
        var select = $("<select></select>", {
          name: scope.category,
          id: "video-category"
        });
        if (categories && angular.isArray(categories)) {
          updateVideoList(categories[0])
        } else {
          categories = scope.categories
        }
        angular.forEach(categories, function(value, key) {
          $("<option></option>", {
            value: value,
            text: value
          }).appendTo(select)
        });
        select[0].selectedIndex = 0;
        $("." + sliderController.getUidClass()).find(".sib-slider-header").append($('<div class="selection-wrap"><span class="select-label">VIDEO:</span></div>').append(select));
        select.on("change", function() {
          scope.category = $("#video-category").val();
          updateVideoList(scope.category);
          sliderController.setItemCount(scope.videoArray.length);
          sliderController.calculateViewport();
          sliderController.setAnimationSpeed(categoryAnimationSpeed);
          sliderController.paginate(1);
          scope.$apply();
          sliderController.setAnimationSpeed(pageAnimationSpeed)
        })
      }
      scope.$watch(function() {
        return $(document).width()
      }, function(newValue, oldValue) {
        var ww = newValue;
        sliderController.adjustViewport(ww, 0, 400, 1);
        sliderController.adjustViewport(ww, 400, 768, 2);
        sliderController.adjustViewport(ww, 768, Infinity, 1);
        sliderController.calculateViewport()
      });

      function load() {
        var promise = SimpleFeedFetcher.get("/statsm2/jsp/proxy.jsp?url=http://smb.cdnllnwnl.neulion.com/u/nba/nba/mrss/nba/videos.json").then(function(data) {
          scope.feed = data;
          scope.categories = [];
          for (var category in scope.feed) {
            scope.categories.push(category)
          }
          scope.category = scope.categories[0];
          updateVideoList(scope.category);
          sliderController.setItemCount(scope.videoArray.length);
          appendCategories()
        })
      }

      function updateVideoList(category) {
        var rawVideoArray = scope.feed[category];
        var candidateArray = [];
        for (var i = 0; i < Math.min(5, rawVideoArray.length); i++) {
          var oneItem = rawVideoArray[i];
          oneItem.img = oneItem.thumbs[1].url;
          candidateArray.push(oneItem)
        }
        scope.videoArray = candidateArray
      }
      load()
    },
    templateUrl: "/templates/slider/videolist.html"
  }
}]);
sib.directive("sibWith", ["$parse", "$log", function(parse, log) {
  return {
    scope: true,
    link: function(scope, el, attr) {
      var expression = attr.sibWith;
      var parts = expression.split(" as ");
      if (parts.length != 2) {
        log.error("`with` directive expects expression in the form `String as String`");
        return
      }
      scope.$watch(parts[0], function(value) {
        scope[parts[1]] = value
      }, true)
    }
  }
}]);
sib.filter("debracket", function() {
  return function(string) {
    return typeof string !== "undefined" && string != null ? string.replace(/^\[.*\]/, "") : ""
  }
});
sib.filter("earlyTeamChange", ["$filter", function($filter) {
  var imgAbbr = [];
  var name = [];
  var abbr = [];

  function getImgAbbrUpdate(current) {
    var update = current;
    angular.forEach(imgAbbr, function(entry) {
      if (current.toLowerCase() == entry.current) {
        update = entry.update
      }
    });
    return update
  }

  function getNameUpdate(current) {
    var update = current;
    angular.forEach(name, function(entry) {
      if (current.toLowerCase() == entry.current) {
        update = $filter("i18next")("_team.name." + entry.update)
      }
    });
    return update
  }

  function getAbbrUpdate(current) {
    var update = current;
    angular.forEach(abbr, function(entry) {
      if (current.toLowerCase() == entry.current) {
        update = entry.update
      }
    });
    return update
  }
  return function(current, lookup) {
    var update = current;
    if (angular.isDefined(current)) {
      if (angular.isString(current)) {
        if (lookup == "imgAbbr") {
          update = getImgAbbrUpdate(current)
        } else if (lookup == "name") {
          update = getNameUpdate(current)
        } else if (lookup == "abbr") {
          update = getAbbrUpdate(current)
        }
      }
    }
    return update
  }
}]);
sib.filter("encode", function() {
  return function(uri) {
    if (uri) {
      return encodeURIComponent(uri)
    }
  }
});
sib.filter("first", function() {
  return function(items) {
    return items[0]
  }
});
sib.filter("gamestreamPostgamePage", function() {
  return function(input, isGameComplete, pageNo, feedCount) {
    if (!input || !input.length) {
      return
    }
    var toReverse = input[0].timestamp >= input[input.length - 1].timestamp;
    if (isGameComplete) {
      if (toReverse) {
        input = input.reverse()
      }
      return input.slice(pageNo * feedCount, (pageNo + 1) * feedCount)
    } else {
      return input.slice()
    }
  }
});
sib.filter("gamestreamPostFilter", function() {
  return function(items, participantAwayteam, participantHometeam) {
    var postArray = [];
    for (var i = 0; i < items.length; i++) {
      if (angular.isUndefined(participantAwayteam) || angular.isUndefined(participantHometeam)) {
        postArray.push(items[i])
      } else if (items[i].tag_category.toUpperCase().indexOf(participantAwayteam) >= 0 || items[i].tag_category.toUpperCase().indexOf(participantHometeam) >= 0) {
        postArray.push(items[i])
      }
    }
    return postArray
  }
});
sib.filter("gameUrlAllowed", ["Site", function(Site) {
  return function(gameUrlArray, gameStatus) {
    if (gameUrlArray.length > 0) {
      var allowedGameUrlArray = [];
      if (gameStatus == 1 && Site.hasOwnProperty("allowedGameUrlPre")) {
        allowedGameUrlArray = Site.allowedGameUrlPre
      } else if (gameStatus == 2 && Site.hasOwnProperty("allowedGameUrlLive")) {
        allowedGameUrlArray = Site.allowedGameUrlLive
      } else if (gameStatus == 3 && Site.hasOwnProperty("allowedGameUrlPost")) {
        allowedGameUrlArray = Site.allowedGameUrlPost
      } else {
        return gameUrlArray
      }
      var filteredUrl = [];
      $.grep(gameUrlArray, function(el) {
        if ($.inArray(el.type, allowedGameUrlArray) >= 0) filteredUrl.push(el)
      });
      return filteredUrl
    }
    return gameUrlArray
  }
}]);
sib.filter("hyphenateScore", function() {
  return function(game, score, period) {
    return period <= Number(game.boxscore.period) ? score : "-"
  }
});
sib.filter("leftpad", function() {
  return function pad(n, width, z) {
    z = z || "0";
    n = n + "";
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n
  }
});
sib.filter("notFirst", function() {
  return function(items) {
    items.shift();
    return items
  }
});
sib.filter("ordinal", ["$i18next", function($i18next) {
  return function(n) {
    var s = ["th", "st", "nd", "rd"],
      v = n % 100;
    var ordinal = s[(v - 20) % 10] || s[v] || s[0];
    return $i18next("_ordinals." + ordinal)
  }
}]);
sib.filter("percent", function() {
  return function(decimalPercentage) {
    return (decimalPercentage * 100).toFixed(1) + "%"
  }
});
sib.filter("reverse", function() {
  return function(items) {
    if (items) {
      return items.slice().reverse()
    }
  }
});
sib.filter("unsafe", function($sce) {
  return function(val) {
    return $sce.trustAsHtml(val)
  }
});
sib.filter("unsafeResource", function($sce) {
  return function(url) {
    return $sce.trustAsResourceUrl(url)
  }
});
"use strict";
sib.factory("BrowserTimeZone", [function BrowserTimeZone() {
  var BrowserTimeZone = {
    dst: null,
    offset: null,
    init: function() {
      var rightNow = new Date;
      var rightNowHour = rightNow.getHours();
      var jan1 = new Date(rightNow.getFullYear(), 0, 1, 0, 0, 0, 0);
      var june1 = new Date(rightNow.getFullYear(), 6, 1, 0, 0, 0, 0);
      var temp = jan1.toGMTString();
      var jan2 = new Date(temp.substring(0, temp.lastIndexOf(" ") - 1));
      temp = june1.toGMTString();
      var june2 = new Date(temp.substring(0, temp.lastIndexOf(" ") - 1));
      var std_time_offset = (jan1 - jan2) / (1e3 * 60 * 60);
      var daylight_time_offset = (june1 - june2) / (1e3 * 60 * 60);
      var dst;
      if (std_time_offset == daylight_time_offset) {
        dst = "0"
      } else {
        var hemisphere = std_time_offset - daylight_time_offset;
        if (hemisphere >= 0) std_time_offset = daylight_time_offset;
        dst = "1"
      }
      std_time_offset = Math.round(std_time_offset);
      if (std_time_offset > 0) {
        std_time_offset = "+" + std_time_offset
      }
      BrowserTimeZone.dst = dst;
      BrowserTimeZone.offset = std_time_offset;
      BrowserTimeZone.now = rightNow.setHours(rightNowHour - std_time_offset)
    }
  };
  BrowserTimeZone.init();

  function get() {
    return {
      offset: BrowserTimeZone.offset,
      dst: BrowserTimeZone.dst,
      now: BrowserTimeZone.now
    }
  }
  return {
    get: get
  }
}]);
"use strict";
sib.factory("Page", ["$window", "$rootScope", "$i18next", "$cookies", "FEEDS_CONFIG", function Page($window, $rootScope, $i18next, $cookies, FEEDS_CONFIG) {
  var pageTitle = null;
  var siteName = null;
  var title = [];
  $rootScope.loading = true;
  $rootScope.languageLoading = true;
  var permitLoading = true;

  function setTitle(newTitle) {
    pageTitle = $i18next(newTitle);
    siteName = $i18next("_siteName");
    title = [];
    if (siteName != "_siteName") {
      title.push(siteName)
    }
    if (newTitle != pageTitle) {
      title.push(pageTitle)
    }
    $window.document.title = title.join(" | ")
  }

  function setLoading(bool) {
    if (permitLoading || !bool) {
      $rootScope.loading = bool
    }
  }

  function setLanguageLoading(val) {
    $rootScope.languageLoading = val
  }

  function setPermitLoading(val) {
    permitLoading = val
  }

  function isLoading() {
    return $rootScope.loading
  }

  function showLoading(val) {
    permitLoading = val
  }

  function changeLanguage(lng, reload) {
    setLoading(true);
    if (FEEDS_CONFIG.debug) console.log("Changing language: " + lng);
    $i18next.options.lng = lng;
    $cookies.put("i18next", lng, {
      path: "/"
    });
    $cookies.put("locale", lng, {
      path: "/"
    });
    if (reload) {
      document.location.reload(true)
    }
  }
  return {
    title: function() {
      return title
    },
    setTitle: function(newTitle) {
      setTitle(newTitle);
      $rootScope.$on("i18nextLanguageChange", function() {
        setTitle(newTitle)
      })
    },
    isLoading: function() {
      return isLoading
    },
    setLoading: function(val) {
      setLoading(val)
    },
    setLanguageLoading: function(val) {
      setLanguageLoading(val)
    },
    setPermitLoading: function(val) {
      setPermitLoading(val)
    },
    showLoading: function(val) {
      showLoading(val)
    },
    changeLanguage: function(lng, reload) {
      changeLanguage(lng, reload)
    }
  }
}]);
"use strict";
sib.factory("SimpleFeedFetcher", ["$rootScope", "FEEDS_CONFIG", "$http", "$q", function($rootScope, FEEDS_CONFIG, $http, $q) {
  var proxyService = "/statsm2/jsp/proxy.jsp";
  var urlPN = "url";
  var contentTypePN = "contenttype";

  function get(feedUrl, requestType) {
    var deferred = $q.defer();
    var reqType = typeof requestType === "undefined" ? "get" : requestType;
    var promise = $http[reqType](feedUrl).then(function(response) {
      deferred.resolve(response.data)
    }, function(reason) {
      deferred.reject(reason)
    });
    $rootScope.$broadcast("event:xhr", {
      url: feedUrl,
      isStatic: false
    });
    return deferred.promise
  }

  function proxy(args) {
    var deferred = $q.defer();
    var contentType = angular.isUndefined(args.contentType) ? "text/javascript" : args.contentType;
    var qs = angular.isDefined(args.params) ? "?" : "";
    for (var key in args.params) {
      qs += key + "=" + args.params[key] + "&"
    }
    var url = args.url += qs;
    var feedUrl = proxyService + "?" + contentTypePN + "=" + contentType + "&" + urlPN + "=" + urlEncodeJavaStyle(url);
    // console.log(feedUrl,1$111111)
    var promise = $http.get(feedUrl).then(function(response) {
      deferred.resolve(response.data)
    }, function(reason) {
      deferred.reject(reason)
    });
    $rootScope.$broadcast("event:xhr", {
      url: feedUrl,
      isStatic: false
    });
    return deferred.promise
  }

  function urlEncodeJavaStyle(url) {
    return encodeURIComponent(url).replace(/'/g, "%27").replace(/"/g, "%22")
  }
  return {
    get: function(feedUrl, requestType) {
      return get(feedUrl, requestType)
    },
    proxy: function(url, params) {
      return proxy(url, params)
    }
  }
}]);
sib.factory("StatsFeedFetcher", ["$rootScope", "FEEDS_CONFIG", "$http", "$cookies", "Page", "$q", "UrlParams", "SimpleFeedFetcher", function FeedFetcher($rootScope, FEEDS_CONFIG, $http, $cookies, Page, $q, UrlParams, SimpleFeedFetcher) {
  "use strict";

  function fetchData(endpointUrl, parameterList, additionalParameters, requestCountryCode, requestTimeZone) {
    var urlparams = UrlParams.create(parameterList, additionalParameters, false, true);
    Page.setLoading(true);
    var parameters = angular.copy(urlparams);
    var url = FEEDS_CONFIG.prefix + endpointUrl;
    var deferred = $q.defer();
    if (requestCountryCode) {
      getCountry(url, parameters, deferred)
    } else {
      makeStatsRequest(url, parameters, deferred)
    }
    return deferred.promise
  }

  function getCountry(statsUrl, parameters, deferred) {
    var countryUrl = "/services/getJson_country.html";
    var country = null;
    if ($cookies.get("countryCode") != null) {
      country = $cookies.get("countryCode");
      if (FEEDS_CONFIG.debug) console.log("Country name returned from cookie: " + country);
      parameters.countryCode = country;
      makeStatsRequest(statsUrl, parameters, deferred)
    } else {
      SimpleFeedFetcher.get(countryUrl).then(function(data) {
        if (typeof data.User != "undefined") {
          country = data.User.country;
          $cookies.put("countryCode", country, {
            path: "/"
          })
        } else {
          country = FEEDS_CONFIG.defaultCountry;
          $cookies.put("countryCode", country, {
            path: "/"
          })
        }
        if (FEEDS_CONFIG.debug) console.log("Country name returned from feed: " + country);
        parameters.countryCode = country;
        makeStatsRequest(statsUrl, parameters, deferred)
      }, function(error) {
        $rootScope.errors.push("Unable to geolocate country code");
        country = FEEDS_CONFIG.defaultCountry;
        $cookies.put("countryCode", country, {
          path: "/"
        });
        parameters.countryCode = country;
        makeStatsRequest(statsUrl, parameters, deferred)
      })
    }
  }

  function fetch(endpointUrl, parameters) {
    Page.setLoading(true);
    var parameters = angular.copy(parameters);
    var url = FEEDS_CONFIG.prefix + endpointUrl;
    var deferred = $q.defer();
    makeStatsRequest(url, parameters, deferred);
    return deferred.promise
  }

  function makeHttpRequest(url, requestParams, deferred) {
    console.log('111111111',url)
    $http[FEEDS_CONFIG.requestMethod](url, {
      params: requestParams
    }).then(function(data) {
      deferred.resolve(data.data.payload);
      Page.setLoading(false)
    }, function(data) {
      Page.setLoading(false)
    })
  }

  function makeStatsRequest(url, parameters, deferred) {
    var isStatic = FEEDS_CONFIG.useStaticFeed ? true : false;
    if (isStatic) {
      makeHttpRequest(getStaticFeedUrl(url, parameters), null, deferred)
    } else {
      makeHttpRequest(url, parameters, deferred)
    }
    $rootScope.$broadcast("event:xhr", {
      url: url,
      isStatic: isStatic
    })
  }

  function getStaticFeedUrl(url, parameters) {
    var baseEndpoint = url.substr(0, url.lastIndexOf("."));
    var paramString = "";
    var keys = [];
    for (var key in parameters) {
      keys.push(key)
    }
    keys.sort();
    console.log(["Original url:", url, "parameters:", parameters].join(" "));
    for (var key in keys) {
      var parameterName = keys[key];
      if (parameterName == "callback") continue;
      if (parameterName == "dst") continue;
      if (parameterName == "tz") continue;
      if (parameterName == "locale") continue;
      if (parameterName == "countryCode") continue;
      if (parameterName == "ds") continue;
      var paramValue = parameters[parameterName];
      if (paramValue == null) continue;
      paramString = [paramString, "_", paramValue].join("").replace(/ /g, "_");
      console.log(["param:", parameterName, "value:", paramValue].join(" "))
    }
    var staticFeedUrl = [baseEndpoint, paramString, ".json"].join("");
    console.log(["Static url: ", staticFeedUrl].join(""));
    return staticFeedUrl
  }
  return {
    fetch: fetch,
    fetchData: fetchData
  }
}]);
sib.factory("UrlParams", ["FEEDS_CONFIG", "$rootScope", "$cookies", "BrowserTimeZone", "$location", "SimpleFeedFetcher", function FeedFetcher(FEEDS_CONFIG, $rootScope, $cookies, BrowserTimeZone, $location, SimpleFeedFetcher) {
  "use strict";

  function create(parameterList, additionalParameters, requestCountryCode, requestTimeZone) {
    var count = 0;
    var path = $location.path();
    var pathParams;
    var localParams = angular.copy(additionalParameters);
    if (path) {
      pathParams = path.replace(/^\//, "").split("/");
      parameterList.forEach(function(key) {
        if (!localParams[key]) {
          var value = pathParams[count];
          if (value != null && value != "") {
            localParams[key] = value
          }
          count++
        }
      })
    }
    localParams.locale = getLanguage();
    if (requestTimeZone) {
      var btz = BrowserTimeZone.get();
      localParams.tz = btz.offset;
      localParams.dst = btz.dst
    }
    if (!localParams.callback && FEEDS_CONFIG.requestMethod == "jsonp") {
      localParams.callback = "JSON_CALLBACK"
    }
    if (requestCountryCode) {
      localParams.countryCode = getCountry()
    }
    return localParams
  }

  function getLanguage() {
    var language = $cookies.get("locale");
    if (!language || language == "dev") {
      language = FEEDS_CONFIG.locale
    }
    return language
  }

  function getCountry() {
    var url = "/services/getJson_country.html";
    var country = null;
    if ($cookies.get("countryCode") != null) {
      if (FEEDS_CONFIG.debug) console.log("Country name returned from cookie: " + country);
      country = $cookies.get("countryCode")
    } else {
      SimpleFeedFetcher.get(url).then(function(data) {
        if (typeof data.User != "undefined") {
          country = data.User.country;
          $cookies.put("countryCode", country, {
            path: "/"
          })
        } else {
          country = FEEDS_CONFIG.defaultCountry;
          $cookies.put("countryCode", country, {
            path: "/"
          })
        }
        if (FEEDS_CONFIG.debug) console.log("Country name returned from feed: " + country)
      }, function(error) {
        $rootScope.errors.push("Unable to geolocate country code");
        country = FEEDS_CONFIG.defaultCountry;
        $cookies.put("countryCode", country, {
          path: "/"
        })
      })
    }
    return country
  }
  return {
    create: create
  }
}]);
var ua = navigator.userAgent.toLowerCase();
window.isAndroid = ua.indexOf("android") > -1;
(function() {
  var method;
  var noop = function() {};
  var methods = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"];
  var length = methods.length;
  var console = window.console = window.console || {};
  while (length--) {
    method = methods[length];
    if (!console[method]) {
      console[method] = noop
    }
  }
})();
if (!Date.prototype.toISOString) {
  Date.prototype.toISOString = function() {
    function pad(n) {
      return n < 10 ? "0" + n : n
    }
    return this.getUTCFullYear() + "-" + pad(this.getUTCMonth() + 1) + "-" + pad(this.getUTCDate()) + "T" + pad(this.getUTCHours()) + ":" + pad(this.getUTCMinutes()) + ":" + pad(this.getUTCSeconds()) + "." + pad(this.getUTCMilliseconds()) + "Z"
  }
}
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function(fn, scope) {
    for (var i = 0, len = this.length; i < len; ++i) {
      fn.call(scope, this[i], i, this)
    }
  }
}
if (!Date.now) {
  Date.now = function() {
    return new Date.getTime
  }
}
$(document).ready(function() {
  if (!Modernizr.svg || !document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
    $('img[src*="svg"]').attr("src", function() {
      return $(this).attr("src").replace(".svg", ".png")
    });
    $(".search-input .close-btn").css("background", "url(../../media/img/global/close-icon-blue.png) center no-repeat")
  }
  var wire = {
    calendar: {
      el: $("#scoreboard-calendar"),
      hidden: true
    },
    snapshot: {
      el: $(".snapshot-footer .share-drawer")
    }
  };
  $(document).on("click", "#show-calendar", function() {
    if (wire.calendar.hidden) {
      wire.calendar.el.removeClass("hidden-sm").show();
      wire.calendar.hidden = false
    } else {
      wire.calendar.el.addClass("hidden-sm").hide();
      wire.calendar.hidden = true
    }
  })
});
$(window).load(function() {
  $("#twitter-widget-1").contents().find("body .e-entry-title, body .p-name, body .p-nickname, body a.expand").css({
    "font-size": "11px",
    color: "#666666"
  });
  $(".nav-buttons").on("mouseenter", ".sib-button", function() {
    $(this).css("background-color", "#2a6cb6");
    $(this).find(".drop").css("display", "block")
  }).on("mouseleave", ".sib-button", function() {
    $(this).css("background-color", "#165899");
    $(this).find(".drop").css("display", "none")
  });
  setTimeout(function() {
    if ($("#sib-table-standings") && document.getElementById("eastern")) {
      var url = window.location.hash;
      if (url.indexOf("eastern") > 0) {
        $("html, body").scrollTop(document.getElementById("eastern").offsetTop + 360)
      } else if (url.indexOf("western") > 0) {
        $("html, body").scrollTop(document.getElementById("western").offsetTop + 360)
      }
    }
  }, 1e3)
});
if (typeof navigationOptions === "undefined") {
  window.navigationOptions = {
    language: "en",
    otherLocation: "http://www.nba.com/",
    usLocation: "http://www.nba.com/",
    optionText: "NBA.com",
    editionCookie: "edition"
  }
}

function handle_edition() {
  $("#edition_wrapper").show("slow");
  var hpc = $.cookie(navigationOptions.editionCookie);
  if (hpc != null && hpc == "us") document.editionForm.edition[1].checked = true;
  else document.editionForm.edition[0].checked = true
}

function handle_redirect() {
  var hpCookie = $.cookie(navigationOptions.editionCookie);
  if (hpCookie == null) {
    window.location.href = navigationOptions.otherLocation
  } else {
    if (hpCookie == "us") {
      window.location.href = navigationOptions.usLocation
    } else {
      window.location.href = navigationOptions.otherLocation
    }
  }
}

function set_HP_default(val) {
  var expires = 1e3 * 60 * 60 * 24 * 7;
  var today = new Date;
  today.setTime(today.getTime());
  expires = new Date(today.getTime() + expires);
  $.cookie(navigationOptions.editionCookie, val, expires, "/");
  editionSetMessage();
  setTimeout("closeEdition()", 4e3)
}

function closeEdition() {
  $("#edition_wrapper").hide(2e3);
  document.getElementById("edition").className = "edition_open";
  document.getElementById("edition_message").className = "edition_closed"
}

function editionSetMessage() {
  document.getElementById("edition").className = "edition_closed";
  document.getElementById("edition_message").className = "edition_open"
}

function setEdition() {
  var selectedEdition = $("select#edition-select").val();
  set_HP_default(selectedEdition)
}
$(function() {
  $("<input> " + navigationOptions.optionText + "</input>").attr({
    type: "radio",
    name: "edition",
    value: navigationOptions.language
  }).prependTo(".controls").click(function() {
    return set_HP_default(navigationOptions.language)
  });
  $("<option>" + navigationOptions.optionText + "</option>").attr({
    value: navigationOptions.language
  }).prependTo("select#edition-select")
});
jQuery(document).ready(function($) {
  var $nav = $("#sib3-nav");
  var $navbar = $(".sib3-navbar");
  var $navItemDrops = $("#sib3-nav .sib3-nav-item-drop");
  var $navItems = $("#sib3-nav .sib3-nav-items");
  var $navItemLinks = $("#sib3-nav .sib3-nav-items.links");
  var $navItem = $("#sib3-nav .sib3-nav-item");
  var $navItemAnchors = $("#sib3-nav .sib3-nav-item > a");
  var $functionItemAnchors = $("#sib3-nav .functions .sib3-nav-item > a");
  var $linkItemAnchors = $("#sib3-nav .links .sib3-nav-item > a");
  var $navbarToggle = $("#sib3-nav .sib3-navbar-toggle");
  var $languageChoices = $("#sib3-nav .languages a");
  var $currentLanguage = $("#sib3-nav #current-lang");
  var $loginAction = $("#sib3-nav .login-action");
  var $logoutAction = $("#sib3-nav .logout-action");
  var isNavCollapsed;
  var mobileBp = 768;
  window.addEventListener("resize", function() {
    setNavMode()
  });

  function setNavMode() {
    isNavCollapsed = window.innerWidth <= 768;
    resetMenu()
  }

  function highlightActive() {
    $navItemAnchors.each(function(index) {
      var $e = $(this);
      $e.removeClass("active");
      var href = $e.attr("href");
      if (href == window.location.pathname || href == window.location.href) {
        $e.closest(".sib3-nav-item").addClass("active")
      }
    })
  }

  function followOrDrop($el, e) {
    var $drop = $el.siblings(".sib3-nav-item-drop");
    if ($drop.length > 0) {
      e.preventDefault();
      var wasDropCollapsed = $drop.is(":hidden");
      $navItemDrops.hide();
      $navItem.removeClass("selected");
      $navItemAnchors.find("i").removeClass("icon-angle-up").addClass("icon-angle-down");
      if (wasDropCollapsed) {
        $el.closest(".sib3-nav-item").addClass("selected");
        $drop.show();
        $el.find("i").removeClass("icon-angle-down").addClass("icon-angle-up")
      }
    }
  }
  $functionItemAnchors.click(function(e) {
    e.stopPropagation();
    if (isNavCollapsed) {
      var $e = $(this);
      closeBarMenu();
      followOrDrop($e, e);
      if ($e.closest(".sib3-nav-item").hasClass("selected")) {
        navbarExpanded()
      } else {
        resetMenu()
      }
    }
  });

  function closeBarMenu() {
    $navItemLinks.css("display", "");
    $navbarToggle.removeClass("toggled")
  }
  $linkItemAnchors.click(function(e) {
    e.stopPropagation();
    if (isNavCollapsed) {
      var $e = $(this);
      followOrDrop($e, e)
    }
  });
  $currentLanguage.click(function(e) {
    e.stopPropagation();
    var $e = $(this);
    e.preventDefault();
    var $drop = $e.siblings(".languages");
    var wasDropCollapsed = $drop.is(":hidden");
    $drop.hide();
    $e.find("i").removeClass("icon-angle-up").addClass("icon-angle-down");
    if (wasDropCollapsed) {
      $drop.show();
      $e.find("i").removeClass("icon-angle-down").addClass("icon-angle-up")
    }
  });
  $navbarToggle.click(function(e) {
    if (isNavCollapsed) {
      e.preventDefault();
      $navItemLinks.toggle();
      $navbarToggle.toggleClass("toggled");
      $navItemDrops.css("display", "");
      $navItem.removeClass("selected");
      if ($navbarToggle.hasClass("toggled")) {
        navbarExpanded()
      } else {
        resetMenu()
      }
    }
  });

  function navbarExpanded() {
    $navbar.addClass("expanded");
    $nav.addClass("expanded");
    $nav.css({
      height: $("body").height()
    })
  }

  function resetMenu() {
    $navItemDrops.css("display", "");
    $navItemLinks.css("display", "");
    $navbarToggle.removeClass("toggled");
    $navItem.removeClass("selected");
    $navbar.removeClass("expanded");
    $nav.removeClass("expanded");
    $nav.css("height", "")
  }
  $languageChoices.click(function(e) {
    e.preventDefault();
    var $choice = $(this);
    var selectionValue = $choice.attr("data-value");
    var selectionText = $choice.text();
    i18n.setLng(selectionValue, function(err, t) {
      document.location.reload()
    })
  });

  function showLoginForm() {
    var curLocation = encodeURI(location.href);
    var loginIframeSrc = "https://watch.nba.com/secure/signin?external=true&parent=" + curLocation;
    var iframe = "<iframe id='login-form-iframe' src=" + loginIframeSrc + "/>";
    $(iframe).dialog({
      dialogClass: "login-form",
      modal: true,
      width: 500,
      height: 400,
      open: function() {},
      close: function() {}
    })
  }

  function showRegistrationForm() {
    var curLocation = encodeURI(location.href);
    var loginIframeSrc = "https://watch.nba.com/secure/registration?external=true&parent=" + curLocation;
    var iframe = "<iframe id='registration-form-iframe' src=" + loginIframeSrc + "/>";
    $(iframe).dialog({
      dialogClass: "registration-form",
      modal: true,
      width: 550,
      height: 600,
      open: function() {},
      close: function() {}
    })
  }

  function logout() {
    $.removeCookie("nbalpusername", {
      domain: ".nba.com",
      path: "/"
    });
    var $account = $(".account").removeClass("logged-in");
    $account.children(".user-initials").text("")
  }
  $loginAction.click(function(e) {
    showLoginForm()
  });
  $logoutAction.click(function(e) {
    logout()
  });

  function setCurrentLang() {
    var $match;
    var lang = $.cookie("i18next");
    $languageChoices.each(function(e) {
      var $el = $(this);
      var val = $el.attr("data-value");
      if (lang === val) {
        $match = $el;
        return false
      } else if (lang.indexOf(val) === 0) {
        $match = $el
      }
    });
    if (isDefined($match)) {
      var $current = $("#current-lang");
      var oldHtml = $current.html();
      if (isDefined(oldHtml)) {
        var newHtml = oldHtml.replace("?", $match.text());
        $current.html(newHtml);
        i18n.setLng($match.attr("data-value"), function(err, t) {})
      }
    } else {
      console.log("Warning: No language match can be found for cookie.i18next " + lang)
    }
  }

  function isDefined(o) {
    return typeof o !== "undefined"
  }

  function setLoginState() {
    var userName = $.cookie("nbalpusername");
    if (isDefined(userName)) {
      var $account = $(".account").addClass("logged-in");
      $account.find(".user-initials").text(userName.substring(0, 2))
    }
  }

  function setCurrentTitle() {
    window.setTimeout(function() {
      var text = $("h1.page-title").text();
      var colonIndex = text.indexOf(":");
      var startIndex = colonIndex > -1 ? colonIndex + 1 : 0;
      text = text.substring(startIndex, text.length);
      $(".sib3-navbar-current-title").text(text)
    }, 700)
  }

  function initializeNav() {
    setNavMode();
    highlightActive();
    setCurrentTitle();
    setLoginState()
  }
  initializeNav()
});
if (typeof navigationOptions === "undefined") {
  window.navigationOptions = {
    language: "en",
    otherLocation: "http://www.nba.com/",
    usLocation: "http://www.nba.com/",
    optionText: "NBA.com",
    editionCookie: "edition"
  }
}
$(function() {
  var $mobileNavButtons = $(".nav-buttons.mobile");
  $mobileNavButtons.hide();
  $(".mobile-nav-drop").click(function() {
    $mobileNavButtons.toggle()
  });
  $(window).resize(function() {
    $mobileNavButtons.hide()
  });
  $(".sib-button").hover(function() {
    $(this).children(".drop").show()
  }, function() {
    $(this).children(".drop").hide()
  })
});
$(document).ready(function() {
  function parseUrlParameter(string) {
    var array = string.split("&");
    var obj = {};
    $.each(array, function(index, element) {
      var keyValue = element.split("=");
      obj[keyValue[0]] = keyValue[1]
    });
    return obj
  }
  var urlParameters = ["showHeader", "showNav", "showFooter"];
  var searchIndex = window.location.hash.indexOf("?");
  if (searchIndex > -1) {
    var searchMap = parseUrlParameter(window.location.hash.substring(searchIndex + 1));
    if (Object.keys(searchMap).length > 0) {
      var count = 1;
      var setUrlParams = function() {
        var anchors = $("a");
        $.each(anchors, function() {
          if (this.host.match(/mi(.*)\.nba\.com/) || this.host.match(/(.*)\.glob(.*)\.nba\.com/) || this.host.match(/global\.nba\.com/) || this.host.match(/china\.nba\.com/)) {
            var paramMap = {};
            $.each(Object.keys(searchMap), function(index, element) {
              if (urlParameters.indexOf(element) >= 0 && !paramMap[element]) {
                paramMap[element] = searchMap[element]
              }
            });
            if (Object.keys(paramMap).length > 0) {
              var search = "";
              var parameterContain = "";
              if (this.href.indexOf("?") >= 0) {
                search = "&"
              } else {
                search = "?"
              }
              $.each(Object.keys(paramMap), function(index, element) {
                search += (index == 0 ? "" : "&") + element + "=" + paramMap[element];
                parameterContain += (index == 0 ? "" : "&") + element + "=" + paramMap[element]
              });
              if (this.hash.indexOf(parameterContain) < 0) {
                if (this.hash) {
                  this.hash = this.search ? this.hash.replace(/\?(.*)/, search) : this.hash + search
                } else {
                  this.href = this.search ? this.href + search : this.href + (this.pathname.match(/\/$/) || this.pathname.match(/\.(.*)$/) ? "#!" : "/#!") + search
                }
              }
            }
          }
        });
        if (count < 3) {
          count++;
          setTimeout(setUrlParams, 500)
        }
      };
      setTimeout(setUrlParams, 500)
    }
  }
});
(function($) {
  $(function() {
    var module = {},
      waitForFinalEvent;

    function setListeners() {
      $(document).on("click", ".nba-primary-nav .nba-nav__container--button", toggleMenu);
      $(document).on("click", ".nba-secondary-nav__list--item--dropdown > a", showSubNav);
      $(window).on("resize", function() {
        waitForFinalEvent(module.checkNav, 500, "navitems")
      });
      $(document).on("click", ".nba-secondary-nav__list--item-more, .nba-secondary-nav__list--item-back", toggleSSRightNav)
    }

    function cookieCallback(msg, data) {
      renderAccountMenu(data)
    }
    if (window._nba && window._nba.hasOwnProperty("membership") && window._nba.membership.isLoggedIn()) {
      window._nba.PubSub.subscribe("dalton.success.cookie.updated", cookieCallback)
    } else {
      renderAccountMenu()
    }

    function getAccessMenuItems(data) {
      var items = [];
      var itemUpgrade = {
        text: "Upgrade to NBA LEAGUE PASS",
        href: "membership/user/settings"
      };
      if (data) {
        var entitlements = data.entitlements.reduce(function(result, prop) {
          result[prop] = true;
          return result
        }, {});
        if (entitlements.lpbp || entitlements.lpbpnb) {
          $(".nba-nav__account").addClass("nba-nav__account-vip")
        } else if (entitlements.lpbc || entitlements.lprdo) {
          $(".nba-nav__account").addClass("nba-nav__account-lp");
          items.push(itemUpgrade)
        } else {
          items.push(itemUpgrade)
        }
        items.push({
          text: "Account Details",
          href: "/membership/user/settings"
        });
        items.push({
          text: "Sign Out",
          href: "/membership/user/logout"
        })
      } else {
        items.push({
          text: "Sign In",
          href: "/membership/user/login"
        });
        items.push({
          text: "Create Account",
          href: "/membership/user/register"
        })
      }
      items.push({
        text: "Help",
        href: "//leaguepasssupport.nba.com"
      });
      return items
    }

    function renderAccountMenu(data) {
      var items = getAccessMenuItems(data);
      items = items.map(function(d) {
        return $("<li>").append($("<a>").text(d.text).attr("href", d.href))
      });
      if (data) {
        $(".nba-nav__account").text(data.email).addClass("nba-nav__account--signed-in")
      }
      $(".nba-nav__account-item").addClass("nba-nav__account-loaded");
      $(".nba-nav__account").siblings(".nba-nav__submenu").html(items)
    }
    waitForFinalEvent = function() {
      var timers = {};
      return function(callback, ms, uniqueId) {
        if (!uniqueId) {
          uniqueId = "Don't call this twice without a uniqueId"
        }
        if (timers[uniqueId]) {
          clearTimeout(timers[uniqueId])
        }
        timers[uniqueId] = setTimeout(callback, ms)
      }
    }();

    function showSubNav(event) {
      var $navLink = $(this),
        $wrapperLI = $navLink.parents("li:first"),
        $subNav = $wrapperLI.find("ul:first");
      $wrapperLI.toggleClass("nba-secondary-nav__list--item--dropdown--open");
      event.preventDefault();
      if ($subNav.is(":visible")) {
        $navLink.attr("aria-expanded", "false");
        $subNav.hide(500)
      } else {
        $navLink.attr("aria-expanded", "true");
        $subNav.show(500)
      }
      return false
    }

    function toggleSSRightNav(event) {
      var $leftNav = $(".nba-secondary-nav__wrapper"),
        $bothButtons = $(".nba-secondary-nav__list--item-more, .nba-secondary-nav__list--item-back"),
        $button = $(this);
      $bothButtons.each(function() {
        $(this).attr("aria-pressed", "false")
      });
      if ($button.attr("aria-pressed") === "false") {
        $button.attr("aria-pressed", "true")
      } else {
        $button.attr("aria-pressed", "false")
      }
      $leftNav.toggleClass("nba-secondary-nav__container--ss-slide-left")
    }

    function toggleMenu(event) {
      var $button = $(this),
        $secondaryNav = $(".nba-secondary-nav__container");
      $secondaryNav.toggleClass("nba-secondary-nav__container--open");
      $button.toggleClass("nba-nav-container__button--open");
      module.checkNav()
    }
    module.checkNav = function() {
      var $navItems = $(".nba-primary-nav .nba-nav__container--center-menu li"),
        $secondaryNav = $(".nba-secondary-nav__list--top"),
        $primaryRightNav = $(".nba-nav__container--right-add-to-secondary"),
        $firstElement;
      $navItems.each(function(index, element) {
        var $currentElement = $(element),
          currentPosition = $currentElement.position(),
          firstElementPosition;
        if (index === 0) {
          $firstElement = $currentElement
        }
        var $currentElementClasses = $currentElement.attr("class").split(" nba-nav__container--center-menu-item");
        if (!$firstElement.is(":visible")) {
          if (!$secondaryNav.find('a[href="' + $currentElement.find("a:first").attr("href") + '"]').length) {
            $secondaryNav.append('<li class="nba-secondary-nav__list--item ' + $currentElementClasses[0] + '"><a href="' + $currentElement.find("a:first").attr("href") + '">' + $currentElement.find("a:first").html() + "</a></li>")
          }
        } else {
          firstElementPosition = $firstElement.position();
          if (firstElementPosition.top !== currentPosition.top) {
            if (!$secondaryNav.find('a[href="' + $currentElement.find("a:first").attr("href") + '"]').length) {
              $secondaryNav.append('<li class="nba-secondary-nav__list--item ' + $currentElementClasses[0] + '"><a href="' + $currentElement.find("a:first").attr("href") + '">' + $currentElement.find("a:first").html() + "</a></li>")
            }
          } else {
            $secondaryNav.find('a[href="' + $currentElement.find("a:first").attr("href") + '"]').parents("li:first").remove()
          }
        }
      });
      $primaryRightNav.find(".nba-nav__container--right-item").each(function(index, element) {
        var $element = $(element).find("a"),
          href = $element.attr("href");
        if (!$element.is(":visible")) {
          if (!$secondaryNav.find('a[href="' + href + '"]').length) {
            $secondaryNav.prepend('<li class="nba-secondary-nav__list--item nba-secondary-nav__list--item-highlight"><a href="' + href + '">' + $element.html() + "</a></li>")
          }
        } else {
          $secondaryNav.find('a[href="' + href + '"]').parents("li:first").remove()
        }
      })
    };
    module.start = function() {
      setListeners();
      module.checkNav()
    };
    $(module.start)
  })
})(jQuery); /*  |xGv00|c4f3062d5e2234f2b61165c1120f693a */