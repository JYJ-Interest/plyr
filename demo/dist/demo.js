document.addEventListener('DOMContentLoaded', function() {
    window.shr && window.shr.setup({ count: { classname: 'button__count' } });
    var e = 'tab-focus';
    document.addEventListener('focusout', function(t) {
        t.target.classList.remove(e);
    }),
        document.addEventListener('keydown', function(t) {
            9 === t.keyCode &&
                window.setTimeout(function() {
                    document.activeElement.classList.add(e);
                }, 0);
        });
    var t = new window.Plyr('#player', {
        debug: !0,
        title: 'View From A Blue Moon',
        iconUrl: '../dist/plyr.svg',
        keyboard: { global: !0 },
        tooltips: { controls: !0 },
        captions: { active: !0 },
        ads: { adTagUrl: 'http://go.aniview.com/api/adserver6/vast/?AV_PUBLISHERID=58c25bb0073ef448b1087ad6&AV_CHANNELID=5a0458dc28a06145e4519d21&AV_URL=127.0.0.1:3000&cb=1&AV_WIDTH=640&AV_HEIGHT=480' },
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'fullscreen', 'pip', 'airplay'],
        keys: { google: 'AIzaSyDrNwtN3nLH_8rjCmu5Wq3ZCm4MNAVdc0c' },
    });
    window.player = t;
    var o = document.querySelectorAll('[data-source]'),
        i = { video: 'video', audio: 'audio', youtube: 'youtube', vimeo: 'vimeo' },
        r = window.location.hash.replace('#', ''),
        n = window.history && window.history.pushState;
    function a(e, t, o) {
        e && e.classList[o ? 'add' : 'remove'](t);
    }
    function s(e, n) {
        if (e in i && (n || e !== r) && (r.length || e !== i.video)) {
            switch (e) {
                case i.video:
                    t.source = {
                        type: 'video',
                        title: 'View From A Blue Moon',
                        sources: [{ src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.mp4', type: 'video/mp4' }],
                        poster: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
                        tracks: [
                            {
                                kind: 'captions',
                                label: 'English',
                                srclang: 'en',
                                src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt',
                                default: !0,
                            },
                            {
                                kind: 'captions',
                                label: 'French',
                                srclang: 'fr',
                                src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt',
                            },
                        ],
                    };
                    break;
                case i.audio:
                    t.source = {
                        type: 'audio',
                        title: 'Kishi Bashi &ndash; &ldquo;It All Began With A Burst&rdquo;',
                        sources: [
                            { src: 'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3', type: 'audio/mp3' },
                            { src: 'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.ogg', type: 'audio/ogg' },
                        ],
                    };
                    break;
                case i.youtube:
                    t.source = {
                        type: 'video',
                        title: 'View From A Blue Moon',
                        sources: [{ src: 'https://youtube.com/watch?v=bTqVqk7FSmY', provider: 'youtube' }],
                    };
                    break;
                case i.vimeo:
                    t.source = { type: 'video', sources: [{ src: 'https://vimeo.com/76979871', provider: 'vimeo' }] };
            }
            (r = e),
                Array.from(o).forEach(function(e) {
                    return a(e.parentElement, 'active', !1);
                }),
                a(document.querySelector('[data-source="' + e + '"]'), 'active', !0),
                Array.from(document.querySelectorAll('.plyr__cite')).forEach(function(e) {
                    e.setAttribute('hidden', '');
                }),
                document.querySelector('.plyr__cite--' + e).removeAttribute('hidden');
        }
    }
    if (
        (Array.from(o).forEach(function(e) {
            e.addEventListener('click', function() {
                var t = e.getAttribute('data-source');
                s(t), n && window.history.pushState({ type: t }, '', '#' + t);
            });
        }),
        window.addEventListener('popstate', function(e) {
            e.state && 'type' in e.state && s(e.state.type);
        }),
        n)
    ) {
        var c = !r.length;
        c && (r = i.video), r in i && window.history.replaceState({ type: r }, '', c ? '' : '#' + r), r !== i.video && s(r, !0);
    }
}),
    'plyr.io' === window.location.host &&
        (!(function(e, t, o, i, r, n, a) {
            (e.GoogleAnalyticsObject = 'ga'),
                (e.ga =
                    e.ga ||
                    function() {
                        (e.ga.q = e.ga.q || []).push(arguments);
                    }),
                (e.ga.l = 1 * new Date()),
                (n = t.createElement('script')),
                (a = t.getElementsByTagName('script')[0]),
                (n.async = 1),
                (n.src = '//www.google-analytics.com/analytics.js'),
                a.parentNode.insertBefore(n, a);
        })(window, document),
        window.ga('create', 'UA-40881672-11', 'auto'),
        window.ga('send', 'pageview'));

//# sourceMappingURL=demo.js.map
