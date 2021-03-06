webpackJsonp([0], Array(31).concat([function(e, i, t) {
  window.App = {
    local: "" === window.location.host || /localhost/.test(window.location.host),
    _lang: "rus",
    _env: "build",
    mobile: md.mobile(),
    phone: md.phone(),
    tablet: md.tablet(),
    mobileDevice: !1,
    desktopWidth: 1200,
    desktopDevice: !0,
    phoneWidth: 480,
    phoneWidthLandscape: 568,
    phoneDevice: !1,
    tabletWidth: 768,
    tabletWidthLandscape: 1024,
    tabletDevice: !1,
    directives: {},
    main: {
      layout: t(32),
      articles: t(36),
      advice: t(38),
      advisable: t(40),
      feedback: t(42),
      video: t(44),
      language: t(46)
    },
    pages: {
      home: t(48),
      product: t(50),
      article: t(58),
      "lifehack-main": t(63),
      "lifehack-single": t(65)
    }
  }, App.init = function() {
    var e = $("[page]");
    if (e.length) {
      if (App.page = e.attr("page"), !App.pages[App.page]) return void console.warn("[Warn page]", App.page + " not defined!");
      console.log("%c Page: " + App.page + " ", "background: #e91e63;color:#FFF;", App), _.each(App.main, function(e, i) {
        var t = e.call(App, i);
        App.directives = _.extend(t.directives, App.directives)
      });
      var i = App.pages[App.page].call(App, App.page, $("[page='" + App.page + "']"));
      i.init && setTimeout(function() {
        i.init()
      }, 100), i.directives && (App.directives = _.extend(i.directives, App.directives)), $("[directive]").each(function() {
        var e = $(this),
          i = e.attr("directive");
        e.length && (App.directives[i] ? (console.log("[Run directive]", i), setTimeout(function() {
          App.directives[i](e)
        }, 100)) : console.warn("[Warn directive]", i + " not defined!"))
      })
    }
  }, App.findGetParameter = function(e) {
    var i = null,
      t = [];
    return location.search.substr(1).split("&").forEach(function(n) {
      t = n.split("="), t[0] === e && (i = decodeURIComponent(t[1]))
    }), i
  },
    function() {
      function preventDefault(e) {
        e = e || window.event, e.preventDefault && e.preventDefault(), e.returnValue = !1
      }

      function keydown(i) {
        for (var t = e.length; t--;)
          if (i.keyCode === e[t]) return void preventDefault(i)
      }

      function wheel(e) {
        preventDefault(e)
      }

      function disable_scroll() {
        window.addEventListener && window.addEventListener("DOMMouseScroll", wheel, !1), window.onmousewheel = document.onmousewheel = wheel, document.onkeydown = keydown
      }

      function enable_scroll() {
        window.removeEventListener && window.removeEventListener("DOMMouseScroll", wheel, !1), window.onmousewheel = document.onmousewheel = document.onkeydown = null
      }
      $(window).mousewheel(_.throttle(function(e) {
        navigator.userAgent.toLowerCase().indexOf("firefox") > -1 ? e.originalEvent.deltaY > 0 ? $(window).trigger("mousewheelDown") : $(window).trigger("mousewheelUp") : e.originalEvent.wheelDelta < 0 || e.originalEvent.wheelDelta < 0 ? $(window).trigger("mousewheelDown") : $(window).trigger("mousewheelUp")
      }));
      var e = [37, 38, 39, 40];
      App.disableScroll = disable_scroll, App.enableScroll = enable_scroll
    }(),
    function() {
      var e = function() {
        var e = $(window).width();
        App.orientation = window.innerHeight > window.innerWidth ? "portrait" : "landscape", App.desktopDevice = !App.mobile && e > App.tabletWidth && "portrait" == App.orientation || e > App.tabletWidthLandscape && "landscape" == App.orientation, App.mobileDevice = App.mobile && e <= App.tabletWidth && "portrait" == App.orientation || e <= App.tabletWidthLandscape && "landscape" == App.orientation, App.tabletDevice = App.mobile && e > App.phoneWidth && e <= App.tabletWidth && "portrait" == App.orientation || e > App.phoneWidthLandscape && e <= App.tabletWidthLandscape && "landscape" == App.orientation, App.phoneDevice = App.mobile && e < App.tabletWidth && "portrait" == App.orientation || e < App.tabletWidthLandscape && "landscape" == App.orientation, App.mobile || setTimeout(function() {
          $(window).scrollTop(0), $(window).trigger("mousewheelUp")
        }, 200)
      };
      $(window).on("resize", e)
    }(), $(document).ready(function() {
    setTimeout(function() {
      $("body > .main-preloader").addClass("main-preloader-inactive"), App.mobile || ($(window).scrollTop(0), $(window).trigger("mousewheelUp"))
    }, 800), $(window).trigger("resize"), App.mobile && window.addEventListener("orientationchange", function() {
      setTimeout(function() {
        console.log("[APP orientationchange]"), window.location.reload()
      }, 200)
    }), App.init()
  })
}, function(e, i, t) {
  e.exports = function(e) {
    var i = this;
    return t(33), t(34), t(35), {
      directives: {
        topFrame: function(e) {
          function changeSlides(e) {
            e > r && (e = 0);
            var i = c.eq(d),
              t = c.eq(e);
            i.addClass("hide-slide");
            t.removeClass("hide-slide");
            // ???????????????????? ????????
            const menu = document.querySelector('main > header')
            if (t[0].classList.contains('change-menu')) {
              menu.classList.add('menu-changed')
            } else {
              menu.classList.remove('menu-changed')
            }
            //
            d = e, l.removeClass("active"),
              setTimeout(function() {
                l.eq(e).addClass("active")
              }, 10)
          }
          var t = (e.find(".round-bottom"), e.find(".down")),
            n = $("[page] > .sections"),
            o = !1,
            s = function() {
              i.disableScroll(), o = !0, e.addClass("inactive"), n.removeClass("active"), setTimeout(function() {
                $("html,body").animate({
                  scrollTop: n.offset().top
                }, 800, function() {
                  o = !1, i.enableScroll()
                })
              }, 200)
            },
            a = function() {
              i.disableScroll(), o = !0, $("html,body").animate({
                scrollTop: 0
              }, 800, function() {
                o = !1, e.removeClass("inactive"), n.addClass("active")
              })
            };
          $(window).on("mousewheelDown", function() {
            i.desktopDevice && !o && $(document).scrollTop() < e.height() && s()
          }), $(window).on("mousewheelUp", function() {
            i.desktopDevice && !o && $(document).scrollTop() < e.height() && a()
          }), t.click(function() {
            i.desktopDevice && !o && ($(window).trigger("mousewheelDown"), s())
          }), $(window).resize(function() {
            i.desktopDevice ? $(document).scrollTop() < e.height() && i.disableScroll() : i.enableScroll()
          }), $(window).trigger("resize");
          var c = $(".slide"),
            r = c.length - 1,
            d = 0,
            l = $(".slide-buttons .dots .dot");
          l.on("click", function(e) {
            var i = $(this),
              t = i.attr("data-id");
            clearInterval(p), p = setInterval(function() {
              changeSlides(d + 1)
            }, 4e3), changeSlides(1 * t)
          });
          var f = 0,
            u = 0;
          e[0].ontouchstart = function(e) {
            f = e.changedTouches[0].clientX
          }, e[0].ontouchend = function(e) {
            u = e.changedTouches[0].clientX, u < f && changeSlides(d + 1), u > f && changeSlides(d - 1)
          };
          var p = setInterval(function() {
            changeSlides(d + 1)
          }, 4e3)
        },
        header: function(e) {
          var t = e.find(".menu"),
            n = e.find(".menu-collapsed"),
            o = n.find(".icon"),
            s = n.find(".close"),
            a = n.find(".container"),
            c = a.find(".list"),
            r = c.find(".drop"),
            d = r.find(".title");
          e.find(".contacts").click(function() {
            return $("html,body").animate({
              scrollTop: $("footer").offset().top
            }, 1e3, function() {
              i.enableScroll()
            }), !1
          });
          var l = $("[page] > .top-frame"),
            f = $("[page] > .sections > section"),
            u = [
              [0, l.height()]
            ];
          i.desktopDevice && (setTimeout(function() {
            f.filter(".blue").each(function() {
              u.push([$(this).offset().top, $(this).offset().top + $(this).height()])
            })
          }), $(window).on("scroll", function() {
            var i = $(window).scrollTop();
            n.removeClass("opened"), i > 0 ? (e.css({
              position: "fixed"
            }), t.removeClass("active"), n.addClass("active")) : (e.css({
              position: "absolute"
            }), t.addClass("active"), n.removeClass("active")), n.attr("icon", "blue"), _.each(u, function(e) {
              i + 30 > e[0] && i + 30 < e[1] && n.attr("icon", "white")
            })
          })), o.click(function() {
            n.addClass("opened")
          }), s.click(function() {
            n.removeClass("opened")
          }), d.click(function() {
            r.not($(this).parent()).removeClass("active"), $(this).parent().toggleClass("opened")
          })
        }
      }
    }
  }
}, function(e, i) {}, function(e, i) {}, function(e, i) {}, function(e, i, t) {
  e.exports = function(e) {
    var i = this;
    return t(37), {
      directives: {
        articles: function(e) {
          var t = e.find("ul"),
            n = t.width(e.width()).slick({
              useTransform: !1,
              dots: !1,
              arrows: !1,
              infinite: !1,
              speed: 300,
              variableWidth: !0,
              centerMode: i.mobileDevice,
              slidesToShow: 1,
              accessibility: !1
            });
          i.mobileDevice && n.slick("slickGoTo", 1)
        }
      }
    }
  }
}, function(e, i) {}, function(e, i, t) {
  e.exports = function(e) {
    var i = this;
    return t(39), {
      directives: {
        advice: function(e) {
          var t = e.find("ul"),
            n = t.find("li"),
            o = t.width(e.width()).slick({
              useTransform: !1,
              dots: n.length > 4,
              arrows: !1,
              infinite: !1,
              speed: 300,
              variableWidth: !0,
              centerMode: i.mobileDevice,
              slidesToScroll: i.mobileDevice && n.length < 4 ? 1 : 4,
              slidesToShow: 1,
              accessibility: !1
            });
          i.mobileDevice && o.slick("slickGoTo", n.length / 2)
        }
      }
    }
  }
}, function(e, i) {}, function(e, i, t) {
  e.exports = function(e) {
    var i = this;
    return t(41), {
      directives: {
        advisable: function(e) {
          var t = e.find("ul"),
            n = t.width(e.width()).slick({
              useTransform: !1,
              dots: !1,
              arrows: !1,
              infinite: !1,
              speed: 300,
              variableWidth: !0,
              centerMode: i.phoneDevice && "portrait" == i.orientation,
              slidesToShow: 1,
              accessibility: !1
            });
          i.phoneDevice && "portrait" == i.orientation && n.slick("slickGoTo", 3)
        }
      }
    }
  }
}, function(e, i) {}, function(e, i, t) {
  e.exports = function(e) {
    t(43);
    var i = {
      init: function() {},
      directives: {
        feedback: function(e) {
          new Form({
            formName: "feedback",
            formEl: e,
            submitEl: e.find(".send"),
            fields: {
              name: {
                rules: {
                  required: !0
                }
              },
              contacts: {
                rules: {
                  required: !0
                }
              },
              question: {
                rules: {
                  required: !0
                }
              },
              agree: {
                rules: {
                  required: !0
                }
              }
            },
            fieldsOptions: {
              rules: {
                required: !0
              }
            },
            onSubmit: function(e) {},
            onSuccess: function(e) {
              $.post("/test", {
                name: e.name,
                contacts: e.contacts,
                question: e.question,
                agree: e.agree
              })
            }
          })
        }
      }
    };
    return setTimeout(function() {
      i.init()
    }, 0), i
  }
}, function(e, i) {}, function(e, i, t) {
  e.exports = function(e) {
    var i = this;
    if (t(45), "home" == i.page) {
      var n = document.createElement("script");
      n.src = "https://www.youtube.com/iframe_api";
      var o = document.getElementsByTagName("script")[0];
      o.parentNode.insertBefore(n, o)
    }
    var s = {
      init: function() {},
      directives: {
        video: function(e) {
          function onPlayerReady(e) {
            o(), s(), n = !0
          }

          function onPlayerStateChange(e) {
            e.data != YT.PlayerState.PLAYING || a || (setTimeout(stopVideo, 6e3), a = !0)
          }

          function stopVideo() {
            t.stopVideo()
          }
          if ("home" === i.page) {
            var t, n = !1,
              o = function() {
                var t = i.desktopDevice ? $(window).width() - 150 : $(window).width() - 5;
                e.css({
                  width: t,
                  height: t / (560 / 315) + (i.desktopDevice ? 20 : 10)
                })
              },
              s = function() {
                var i = e.width();
                t.setSize(i, i / (560 / 315))
              };
            window.onYouTubeIframeAPIReady = function() {
              t = new YT.Player("player", {
                videoId: "jpZdUDADKn4",
                events: {
                  onReady: onPlayerReady,
                  onStateChange: onPlayerStateChange
                }
              })
            };
            var a = !1;
            $(window).resize(function() {
              n && (o(), s())
            }), window.popup.$popup.on("open", function(e, i) {
              "video" == i.name && (n ? t.playVideo() : window.popup.close())
            }), window.popup.$popup.on("close", function(e, i) {
              "video" == i.name && n && t.stopVideo()
            })
          }
        }
      }
    };
    return setTimeout(function() {
      s.init()
    }, 0), s
  }
}, function(e, i) {}, function(e, i, t) {
  e.exports = function(e) {
    t(47);
    var i = {
      init: function() {
        $.cookie("comet-language") || popup.open("language", {
          close: !1
        })
      },
      directives: {
        language: function(e) {
          e.find(".step-1 .btn-close").click(function() {
            $.cookie("comet-language", !0, {
              path: "/"
            }), window.popup.close()
          }), e.find(".step-1 .btn.lang").click(function() {
            e.find(".step-1").hide(), e.find(".step-2").show()
          }), e.find(".step-2 .btn").click(function() {
            var e = $(this).attr("lang");
            console.log("[lang]" + e), $.cookie("comet-language", !0, {
              path: "/"
            }), window.location.href = "/" + e
          })
        }
      }
    };
    return setTimeout(function() {
      i.init()
    }, 0), i
  }
}, function(e, i) {}, function(e, i, t) {
  e.exports = function(e, i) {
    var n = this;
    return t(49), {
      init: function() {
        var e = i.find(".top-frame");
        $(window).resize(function() {
          e.height($(window).height())
        }), $(window).trigger("resize")
      },
      directives: {
        clock: function(e) {
          var i = e.find(".dial"),
            t = i.find(".face"),
            n = i.find(".minute"),
            o = (i.find(".hour"), t.find(".icon")),
            s = e.find(".repeat"),
            a = null;
          n.rotate({
            angle: 180,
            center: ["3", "0"]
          });
          var c = function(e) {
              t.find(".icon-" + e).addClass("hidden")
            },
            r = function(e, t, l) {
              i.removeClass("hidden"), o.removeClass("hidden"), s.addClass("hidden"), n.rotate({
                angle: t,
                center: ["3", "0"],
                duration: e,
                animateTo: l,
                step: function(e) {
                  e <= 135 && c(8), e <= 90 && c(7), e <= 45 && c(6), e <= 0 && c(5), e <= -45 && c(4), e <= -90 && c(3), e <= -135 && c(2), e <= -176 && c(1)
                },
                callback: function() {
                  1 == d && setTimeout(function() {
                    r(2300, 25, -110)
                  }, 200), 2 == d && setTimeout(function() {
                    r(2e3, -110, -200), setTimeout(function() {
                      i.addClass("hidden"), s.removeClass("hidden"), a = setTimeout(function() {
                        s.click()
                      }, 3e3)
                    }, 1200)
                  }, 200), d++
                }
              })
            },
            d = 1;
          s.click(function() {
            d = 1, clearTimeout(a), r(2600, 180, 25)
          }), setTimeout(function() {
            s.click()
          }, 600)
        },
        products: function(e) {
          var t, o, s = e,
            a = s.find(".menu"),
            c = a.find("li"),
            r = s.find(".items"),
            d = r.find(".item"),
            l = r.find(".group"),
            f = l.length;
          r.attr("name", "all");
          var u = function() {
              o = e.find(".items").width() / r.find(".group").length * 2.5;
              var i = 60;
              window.innerWidth > 1400 && (i = 0), l.eq(0).width(i + o + 350), l.eq(0).find(".item").each(function(e) {
                $(this).css({
                  left: 0 + 75 * e
                })
              }), l.eq(1).width(i + o + 200), l.eq(1).find(".item").each(function(e) {
                $(this).css({
                  left: 0 + 75 * e
                })
              }), l.eq(2).width(Math.floor((i + o) / 2.5)), l.eq(2).find(".item").each(function(e) {
                $(this).css({
                  left: 0 + 75 * e
                })
              }), l.eq(3).width((i + o) / 1.5), l.eq(3).find(".item").each(function(e) {}), l.eq(4).width(Math.floor(i + o + 70)), l.eq(4).find(".item").each(function(e) {
                $(this).css({
                  left: 0 + 75 * e
                })
              }), document.getElementsByClassName("spray")[0].style.left = "-60px";
              var t = document.getElementsByClassName("powder2")[0];
              t.style.left = "145px", t.style.zIndex = "1";
              var n = document.getElementsByClassName("powder1")[0];
              n.style.left = "220px", n.style.zIndex = "1"
            },
            p = function() {
              o = e.find(".items").width() / r.find(".group").length * 2.5;
              var i = 60;
              window.innerWidth > 1400 && (i = 0), l.eq(0).width(i + o + 350), l.eq(0).find(".item").each(function(e) {
                $(this).css({
                  left: 0 + 75 * e
                })
              }), l.eq(1).width(i + o + 200), l.eq(1).find(".item").each(function(e) {
                $(this).css({
                  left: 0 + 75 * e
                })
              }), l.eq(2).width((i + o) / 4.5), l.eq(2).find(".item").each(function(e) {
                $(this).css({
                  left: 0 + 75 * e
                })
              }), console.log(Math.floor((o + i) / 1.5)), l.eq(3).width(Math.floor((o + i) / 1.5)), l.eq(4).width(Math.floor(1.5 * (o + i)) + i), l.eq(4).find(".item").each(function(e) {
                $(this).css({
                  left: 0 + 75 * e
                })
              });
              var t = document.getElementsByClassName("powder1")[0];
              t.style.left = "220px", t.style.zIndex = "1";
              var n = document.getElementsByClassName("powder2")[0];
              n.style.left = "145px", n.style.zIndex = "1"
            },
            h = function() {
              l.css({
                width: o
              }), l.find(".item").each(function(e) {
                var i = $(this).parent().attr("group");
                $(this).css({
                  width: "auto"
                }), $(this).find(".img").css({
                  overflow: "hidden"
                }), 2 == i ? $(this).css({
                  left: -20
                }) : 3 == i ? $(this).css({
                  left: 10
                }) : 6 == i ? $(this).css({
                  left: 125
                }) : 66 == i ? $(this).css({
                  left: 100
                }) : 4 == i ? $(this).css({
                  left: -10
                }) : 10 == i ? $(this).css({
                  left: 30
                }) : 9 == i ? $(this).css({
                  left: 20
                }) : 5 == i ? $(this).css({
                  left: 150
                }) : 8 == i ? $(this).css({
                  left: 140
                }) : 1 == i ? $(this).css({
                  left: 80
                }) : $(this).css({
                  left: 0
                })
              }), document.getElementsByClassName("item-second_hidden")[0].style.left = "55px";
              var e = document.getElementsByClassName("powder2")[0];
              e.style.left = "145px", e.style.zIndex = "1";
              var i = document.getElementsByClassName("powder1")[0];
              i.style.left = "80px", i.style.zIndex = "1"
            };
          e.mouseenter(function() {
            i.addClass("products-hover")
          }), e.mouseleave(function() {
            i.removeClass("products-hover")
          }), d.mouseenter(function() {
            var e;
            e = $(this).attr("color"), i.attr("color", e)
          }), d.mouseleave(function() {
            i.removeAttr("color")
          }), c.click(function() {
            r.removeClass("all"), r.attr("name", $(this).attr("name")), c.removeClass("active"), $(this).addClass("active"), l.removeClass("active");
            var e = $(this).attr("group"),
              i = $(this).attr("name");
            return d.find(".img").removeClass("img--new"), "all" == e ? void h() : (l.find(".item").each(function() {
              $(this).css({
                width: 0
              })
            }), l.css({
              width: 0
            }), console.log("xxxxxxx------------------------------"), $.each(e.split(","), function(e, i) {
              var t = parseInt(i);
              console.log("group => " + t), l.filter("[group='" + t + "']").each(function() {
                var e = $(this);
                console.log("$choosedGroup => " + e), e.addClass("active");
                var i = 0;
                e.find(".item").each(function() {
                  console.log("$choosedItemsWidth => " + i), $(this).css({
                    left: i,
                    width: "auto"
                  }), $(this).find(".img").css({
                    overflow: "auto"
                  }), i += $(this).width() + 20
                }), e.css({
                  width: i
                })
              })
            }), "bathroom" == i ? void u() : "kitchen" == i ? void p() : void 0)
          }), $(window).resize(function() {
            n.desktopDevice ? s.show() : s.hide(), setTimeout(function() {
              t = r.width(), o = t / f, h()
            }, 100)
          }), $(window).trigger("resize")
        },
        productsMobile: function(e) {
          function createCarousel(t) {
            i = t.width(e.width()).slick({
              useTransform: !1,
              dots: !1,
              arrows: !1,
              infinite: !1,
              speed: 300,
              variableWidth: !0,
              centerMode: !0,
              slidesToShow: 1,
              accessibility: !1
            })
          }
          var i, t = e.find(".groups"),
            o = t.find("ul"),
            s = o.find("li"),
            a = e.find(".items"),
            c = a.find("ul"),
            r = e.find(".btn-back"),
            d = o.width(n.phoneDevice ? $(window).width() : t.width()).slick({
              useTransform: !1,
              dots: !1,
              arrows: !1,
              infinite: !1,
              speed: 300,
              variableWidth: !0,
              centerMode: n.phoneDevice && "portrait" == n.orientation,
              slidesToShow: 1,
              accessibility: !1
            });
          n.phoneDevice && "portrait" == n.orientation && d.slick("slickGoTo", 1), s.click(function() {
            var e = $(this).attr("group");
            t.addClass("inactive"), r.addClass("active");
            var i = a.find("ul[group='" + e + "']");
            i.addClass("active"), i.hasClass("slick-slider") || createCarousel(i)
          }), r.click(function() {
            r.removeClass("active"), t.removeClass("inactive"), c.removeClass("active")
          })
        },
        advantages: function(e) {
          function init() {
            var e = i.find(".draggable"),
              t = e.find("ul"),
              n = t.find("li"),
              o = n.width() + parseInt(n.css("margin-left")) + parseInt(n.css("margin-right")) + parseInt(n.css("padding-left")) + parseInt(n.css("padding-right")),
              s = t.width(),
              a = s + 2 * o;
            e.css({
              position: "absolute",
              left: "50%",
              height: t.height(),
              width: a,
              marginLeft: -a / 2
            }), t.css({
              left: a / 2 - s / 2
            }).draggable({
              axis: "x",
              containment: "parent",
              scroll: !1
            })
          }
          var i = e.find(".menu"),
            t = i.find("li"),
            o = e.find(".item"),
            s = e.find(".bg");
          t.click(function() {
            t.removeClass("active"), $(this).addClass("active"), o.removeClass("active");
            var e = $(this).attr("data-item");
            o.filter("[data-item='" + e + "']").addClass("active"), s.removeClass("active"), s.filter(".bg-" + e).addClass("active")
          }), n.desktopDevice || (setTimeout(function() {
            init()
          }, 2e3), $(window).on("resize", init))
        }
      }
    }
  }
}, function(e, i) {}, function(e, i, t) {
  e.exports = function(e, i) {
    var n = this;
    return t(51), t(52), t(53), t(54), t(55), t(56), t(57), {
      init: function() {
        var e = i.find(".top-frame");
        $(window).resize(function() {
          n.phoneDevice || e.height($(window).height())
        }), $(window).trigger("resize")
      },
      directives: {
        product: function(e) {
          var t = e.find(".prev"),
            o = e.find(".next"),
            s = e.find(".items"),
            a = s.find(".item"),
            c = i.find(".top-frame"),
            r = i.find("section.section-1"),
            d = i.find(".aromas"),
            l = d.find(".switch"),
            f = d.find(".items"),
            u = !1,
            p = s.eq(0).attr("rel"),
            h = {},
            v = {
              useTransform: !1,
              dots: !1,
              arrows: !1,
              infinite: !0,
              swipe: n.phoneDevice,
              speed: 300,
              variableWidth: !0,
              centerMode: !0,
              slidesToShow: 1,
              accessibility: !1,
              initialSlide: parseInt(n.findGetParameter("rel")) || 0
            };
          a.length <= 1 && (t.hide(), o.hide()), l.click(function() {
            p = $(this).attr("rel"), l.removeClass("active"), $(this).addClass("active"), s.removeClass("active"), s.filter("[rel='" + p + "']").addClass("active"), f.removeClass("active"), f.filter("[rel='" + p + "']").addClass("active"), h[p].slick("unslick"), h[p].slick(v)
          }), s.each(function() {
            var e = $(this),
              i = e.attr("rel") || p,
              t = f.filter("[rel='" + i + "']");
            h[i] = e.slick(v), h[i].on("afterChange", function(e, i, n) {
              t.find(".item").removeClass("active").eq(n).addClass("active")
            })
          }), d.find(".item").removeClass("active").eq(n.findGetParameter("rel")).addClass("active"), d.find(".item").mouseenter(function() {
            $(this).addClass("active")
          }).mouseleave(function() {
            $(this).removeClass("active")
          }), o.click(function() {
            h[p].slick("slickNext")
          }), t.click(function() {
            h[p].slick("slickPrev")
          }), d.find(".item").click(function() {
            h[p].slick("slickGoTo", $(this).index())
          }), $(window).on("mousewheelDown", function() {
            n.desktopDevice && !u && $(document).scrollTop() < c.height() && (u = !0, e.animate({
              top: r.offset().top + 50
            }, 1e3, function() {
              u = !1, t.addClass("active"), o.addClass("active")
            }))
          }), $(window).on("mousewheelUp", function() {
            n.desktopDevice && !u && $(document).scrollTop() < c.height() && (u = !0, t.removeClass("active"), o.removeClass("active"), e.animate({
              top: $(window).height() / 2 - e.height() / 2
            }, 1e3, function() {
              u = !1
            }))
          }), $(window).resize(function() {
            n.desktopDevice ? e.css({
              top: $(window).height() / 2 - e.height() / 2
            }) : e.css({
              top: "auto"
            }), s.each(function() {
              var i = $(this);
              n.mobileDevice ? (i.width(e.width()), i.find(".item").css("width", e.width())) : (i.width(e.width() - o.width() - t.width()), i.find(".item").css("width", 244))
            })
          }), $(window).trigger("resize")
        }
      }
    }
  }
}, function(e, i) {}, function(e, i) {}, function(e, i) {}, function(e, i) {}, function(e, i) {}, function(e, i) {}, function(e, i) {}, function(e, i, t) {
  e.exports = function(e, i) {
    return t(59), t(60), t(61), t(62), {
      init: function() {
        var e = i.find(".top-frame");
        $(window).resize(function() {
          e.height($(window).height())
        }), $(window).trigger("resize")
      },
      directives: {}
    }
  }
}, function(e, i) {}, function(e, i) {}, function(e, i) {}, function(e, i) {}, function(e, i, t) {
  e.exports = function(e, i) {
    return t(64), {
      init: function() {
        var e = i.find(".top-frame");
        $(window).resize(function() {
          e.height($(window).height())
        }), $(window).trigger("resize")
      },
      directives: {
        advices: function(e) {
          var i = e.find(".menu"),
            t = i.find("> ul > li"),
            n = t.find(".title"),
            o = i.find(".items"),
            s = o.find("li"),
            a = e.find(".list"),
            c = a.find("li"),
            r = e.find(".activated ul");
          n.click(function() {
            var e = $(this).parent();
            t.not(e).removeClass("active"), e.toggleClass("active")
          });
          var d = {
              rooms: [],
              areas: [],
              problems: []
            },
            l = function() {
              var e = $(this);
              t.removeClass("active");
              var i = e.attr("room"),
                n = e.attr("area"),
                o = e.attr("problem");
              if (i && (_.indexOf(d.rooms, i) >= 0 ? (d.rooms = _.without(d.rooms, i), e.removeClass("active"), r.find("li[room='" + i + "']").remove()) : (d.rooms.push(i), e.addClass("active"), r.append("<li room='" + i + "' ><p>??????????????????????</p><p>" + e.text() + "</p></li>"))), n && (_.indexOf(d.areas, n) >= 0 ? (d.areas = _.without(d.areas, n), e.removeClass("active"), r.find("li[area='" + n + "']").remove()) : (d.areas.push(n), e.addClass("active"), r.append("<li area='" + n + "' ><p>??????????????????</p><p>" + e.text() + "</p></li>"))), o && (_.indexOf(d.problems, o) >= 0 ? (d.problems = _.without(d.problems, o), e.removeClass("active"), r.find("li[problem='" + o + "']").remove()) : (d.problems.push(o), e.addClass("active"), r.append("<li problem='" + o + "' ><p>????????????????</p><p>" + e.text() + "</p></li>"))), !d.rooms.length && !d.areas.length && !d.problems.length) return void c.show();
              c.hide(), c.each(function() {
                var e = $(this),
                  i = e.attr("rooms").split(","),
                  t = e.attr("areas").split(","),
                  n = e.attr("problems").split(",");
                (_.intersection(d.rooms, i).length || _.intersection(d.areas, t).length || _.intersection(d.problems, n).length) && e.show()
              })
            };
          s.click(l), r.on("click", "li", function() {
            var e = $(this),
              i = e.attr("room"),
              t = e.attr("area"),
              n = e.attr("problem");
            i && o.find("li[room='" + i + "']").trigger("click"), t && o.find("li[area='" + t + "']").trigger("click"), n && o.find("li[problem='" + n + "']").trigger("click")
          })
        }
      }
    }
  }
}, function(e, i) {}, function(e, i, t) {
  e.exports = function(e, i) {
    return t(66), t(67), t(68), t(69), t(70), t(71), {
      init: function() {
        var e = i.find(".top-frame");
        $(window).resize(function() {
          e.height($(window).height())
        }), $(window).trigger("resize")
      },
      directives: {}
    }
  }
}, function(e, i) {}, function(e, i) {}, function(e, i) {}, function(e, i) {}, function(e, i) {}, function(e, i) {}]), [31]);