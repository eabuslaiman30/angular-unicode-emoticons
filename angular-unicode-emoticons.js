'use strict';
/**
 * phEmoticons Module
 *
 * Description
 */
angular.module('ngUnicodeEmoticons', ['ngSanitize'])
  .value('emoticonList', [{
      "text": "grin",
      "value": "&#x1F601"
    },
    {
      "text": "joy",
      "value": "&#x1F602;"
    },
    {
      "text": "smiley",
      "value": "&#x1F603;",
      "alias": ":)"
    },
    {
      "text": "smile",
      "value": "&#x1F604;",
      "alias": ":D"
    },
    {
      "text": "sweat_smile",
      "value": "&#x1F605;"
    },
    {
      "text": "laughing",
      "value": "&#x1F606;"
    },
    {
      "text": "wink",
      "value": "&#x1F609;"
    },
    {
      "text": "blush",
      "value": "&#x1F60A;"
    },
    {
      "text": "yum",
      "value": "&#x1F60B;"
    },
    {
      "text": "relieved",
      "value": "&#x1F60C;"
    },
    {
      "text": "heart_eyes",
      "value": "&#x1F60D;"
    },
    {
      "text": "smirk",
      "value": "&#x1F60F;"
    },
    {
      "text": "unamused",
      "value": "&#x1F612;"
    },
    {
      "text": "sweat",
      "value": "&#x1F613;"
    },
    {
      "text": "pensive",
      "value": "&#x1F614;"
    },
    {
      "text": "confounded",
      "value": "&#x1F616;"
    },
    {
      "text": "kissing_heart",
      "value": "&#x1F618;"
    },
    {
      "text": "kissing_closed_eyes",
      "value": "&#x1F61A;"
    },
    {
      "text": "stuck_out_tongue_winking_eye",
      "value": "&#x1F61C;"
    },
    {
      "text": "stuck_out_tongue",
      "value": "&#x1F61B;",
      "alias": ":p"
    },
    {
      "text": "stuck_out_tongue_closed_eyes",
      "value": "&#x1F61D;"
    },
    {
      "text": "disappointed",
      "value": "&#x1F61E;",
      "alias": ":("
    },
    {
      "text": "angry",
      "value": "&#x1F620;",
      "alias": ">:("
    },
    {
      "text": "rage",
      "value": "&#x1F621;",
      "alias": "x("
    },
    {
      "text": "cry",
      "value": "&#x1F622;",
      "alias": ":'("
    },
    {
      "text": "persevere",
      "value": "&#x1F623;"
    },
    {
      "text": "triumph",
      "value": "&#x1F624;"
    },
    {
      "text": "disappointed_relieved",
      "value": "&#x1F625;"
    },
    {
      "text": "fearful",
      "value": "&#x1F628;"
    },
    {
      "text": "weary",
      "value": "&#x1F629;"
    },
    {
      "text": "sleepy",
      "value": "&#x1F62A;"
    },
    {
      "text": "tired_face",
      "value": "&#x1F62B;"
    },
    {
      "text": "sob",
      "value": "&#x1F62D;"
    },
    {
      "text": "cold_sweat",
      "value": "&#x1F630;"
    },
    {
      "text": "scream",
      "value": "&#x1F631;"
    },
    {
      "text": "astonished",
      "value": "&#x1F632;"
    },
    {
      "text": "flushed",
      "value": "&#x1F633;"
    },
    {
      "text": "zipper_mouth",
      "value": "&#x1F910;"
    },
    {
      "text": "drooling_face",
      "value": "&#x1F924;"
    },
    {
      "text": "money_mouth",
      "value": "&#x1F911;"
    },
    {
      "text": "nerd_face",
      "value": "&#x1F913"
    },
    {
      "text": "dizzy_face",
      "value": "&#x1F635;"
    },
    {
      "text": "mask",
      "value": "&#x1F637;"
    },
    {
      "text": "smile_cat",
      "value": "&#x1F638;"
    },
    {
      "text": "joy_cat",
      "value": "&#x1F639;"
    },
    {
      "text": "smiley_cat",
      "value": "&#x1F63A;"
    },
    {
      "text": "heart_eyes_cat",
      "value": "&#x1F63B;"
    },
    {
      "text": "smirk_cat",
      "value": "&#x1F63C;"
    },
    {
      "text": "kissing_cat",
      "value": "&#x1F63D;"
    },
    {
      "text": "pouting_cat",
      "value": "&#x1F63E;"
    },
    {
      "text": "crying_cat_face",
      "value": "&#x1F63F;"
    },
    {
      "text": "scream_cat",
      "value": "&#x1F640;"
    },
    {
      "text": "no_good",
      "value": "&#x1F645;"
    },
    {
      "text": "ok_woman",
      "value": "&#x1F646;"
    },
    {
      "text": "bow",
      "value": "&#x1F647;"
    },
    {
      "text": "see_no_evil",
      "value": "&#x1F648;"
    },
    {
      "text": "hear_no_evil",
      "value": "&#x1F649;"
    },
    {
      "text": "speak_no_evil",
      "value": "&#x1F64A;"
    },
    {
      "text": "raising_hand",
      "value": "&#x1F64B;"
    },
    {
      "text": "raised_hands",
      "value": "&#x1F64C;"
    },
    {
      "text": "person_frowning",
      "value": "&#x1F64D;"
    },
    {
      "text": "person_with_pouting_face",
      "value": "&#x1F64E;"
    },
    {
      "text": "pray",
      "value": "&#x1F64F;"
    },
    {
      "text": "rocket",
      "value": "&#x1F680;"
    },
    {
      "text": "railway_car",
      "value": "&#x1F683;"
    },
    {
      "text": "bullettrain_side",
      "value": "&#x1F684;"
    },
    {
      "text": "bullettrain_front",
      "value": "&#x1F685;"
    },
    {
      "text": "metro",
      "value": "&#x1F687;"
    },
    {
      "text": "station",
      "value": "&#x1F689;"
    },
    {
      "text": "bus",
      "value": "&#x1F68C;"
    },
    {
      "text": "busstop",
      "value": "&#x1F68F;"
    },
    {
      "text": "ambulance",
      "value": "&#x1F691;"
    },
    {
      "text": "fire_engine",
      "value": "&#x1F692;"
    },
    {
      "text": "police_car",
      "value": "&#x1F693;"
    },
    {
      "text": "taxi",
      "value": "&#x1F695;"
    },
    {
      "text": "red_car",
      "value": "&#x1F697;"
    },
    {
      "text": "blue_car",
      "value": "&#x1F699;"
    },
    {
      "text": "truck",
      "value": "&#x1F69A;"
    },
    {
      "text": "ship",
      "value": "&#x1F6A2;"
    },
    {
      "text": "speedboat",
      "value": "&#x1F6A4;"
    },
    {
      "text": "traffic_light",
      "value": "&#x1F6A5;"
    },
    {
      "text": "construction",
      "value": "&#x1F6A7;"
    },
    {
      "text": "rotating_light",
      "value": "&#x1F6A8;"
    },
    {
      "text": "triangular_flag_on_post",
      "value": "&#x1F6A9;"
    },
    {
      "text": "door",
      "value": "&#x1F6AA;"
    },
    {
      "text": "no_entry_sign",
      "value": "&#x1F6AB;"
    },
    {
      "text": "smoking",
      "value": "&#x1F6AC;"
    },
    {
      "text": "no_smoking",
      "value": "&#x1F6AD;"
    },
    {
      "text": "bike",
      "value": "&#x1F6B2;"
    },
    {
      "text": "walking",
      "value": "&#x1F6B6;"
    },
    {
      "text": "mens",
      "value": "&#x1F6B9;"
    },
    {
      "text": "womens",
      "value": "&#x1F6BA;"
    },
    {
      "text": "restroom",
      "value": "&#x1F6BB;"
    },
    {
      "text": "baby_symbol",
      "value": "&#x1F6BC;"
    },
    {
      "text": "toilet",
      "value": "&#x1F6BD;"
    },
    {
      "text": "wc",
      "value": "&#x1F6BE;"
    },
    {
      "text": "bath",
      "value": "&#x1F6C0;"
    },
    {
      "text": "articulated_lorry",
      "value": "&#x1F69B;"
    },
    {
      "text": "kissing_smiling_eyes",
      "value": "&#x1F619;"
    },
    {
      "text": "pear",
      "value": "&#x1F350;"
    },
    {
      "text": "bowtie",
      "value": "&#x22c8;"
    },
    {
      "text": "bicyclist",
      "value": "&#x1F6B4;"
    },
    {
      "text": "rabbit2",
      "value": "&#x1F407;"
    },
    {
      "text": "clock830",
      "value": "&#x1F563;"
    },
    {
      "text": "train",
      "value": "&#x1F68B;"
    },
    {
      "text": "squirrel",
      "value": "&#x1f43f;"
    },
    {
      "text": "hash",
      "value": "&#x0023;"
    },
    {
      "text": "zero",
      "value": "&#x0030;"
    },
    {
      "text": "one",
      "value": "&#x0031;"
    },
    {
      "text": "two",
      "value": "&#x0032;"
    },
    {
      "text": "three",
      "value": "&#x0033;"
    },
    {
      "text": "four",
      "value": "&#x0034;"
    },
    {
      "text": "five",
      "value": "&#x0035;"
    },
    {
      "text": "six",
      "value": "&#x0036;"
    },
    {
      "text": "seven",
      "value": "&#x0037;"
    },
    {
      "text": "eight",
      "value": "&#x0038;"
    },
    {
      "text": "nine",
      "value": "&#x0039;"
    },
    {
      "text": "copyright",
      "value": "&#x00A9;"
    },
    {
      "text": "registered",
      "value": "&#x00AE;"
    },
    {
      "text": "bangbang",
      "value": "&#x203C;"
    },
    {
      "text": "interrobang",
      "value": "&#x2049;"
    },
    {
      "text": "tm",
      "value": "&#x2122;"
    },
    {
      "text": "information_source",
      "value": "&#x2139;"
    },
    {
      "text": "left_right_arrow",
      "value": "&#x2194;"
    },
    {
      "text": "arrow_up_down",
      "value": "&#x2195;"
    },
    {
      "text": "arrow_upper_left",
      "value": "&#x2196;"
    },
    {
      "text": "arrow_upper_right",
      "value": "&#x2197;"
    },
    {
      "text": "arrow_lower_right",
      "value": "&#x2198;"
    },
    {
      "text": "arrow_lower_left",
      "value": "&#x2199;"
    },
    {
      "text": "leftwards_arrow_with_hook",
      "value": "&#x21A9;"
    },
    {
      "text": "arrow_right_hook",
      "value": "&#x21AA;"
    },
    {
      "text": "watch",
      "value": "&#x231A;"
    },
    {
      "text": "hourglass",
      "value": "&#x231B;"
    },
    {
      "text": "fast_forward",
      "value": "&#x23E9;"
    },
    {
      "text": "rewind",
      "value": "&#x23EA;"
    },
    {
      "text": "arrow_double_up",
      "value": "&#x23EB;"
    },
    {
      "text": "arrow_double_down",
      "value": "&#x23EC;"
    },
    {
      "text": "alarm_clock",
      "value": "&#x23F0;"
    },
    {
      "text": "hourglass_flowing_sand",
      "value": "&#x23F3;"
    },
    {
      "text": "m",
      "value": "&#x24C2;"
    },
    {
      "text": "black_small_square",
      "value": "&#x25AA;"
    },
    {
      "text": "white_small_square",
      "value": "&#x25AB;"
    },
    {
      "text": "arrow_forward",
      "value": "&#x25B6;"
    },
    {
      "text": "arrow_backward",
      "value": "&#x25C0;"
    },
    {
      "text": "white_medium_square",
      "value": "&#x25FB;"
    },
    {
      "text": "black_medium_square",
      "value": "&#x25FC;"
    },
    {
      "text": "white_medium_small_square",
      "value": "&#x25FD;"
    },
    {
      "text": "black_medium_small_square",
      "value": "&#x25FE;"
    },
    {
      "text": "sunny",
      "value": "&#x2600;"
    },
    {
      "text": "cloud",
      "value": "&#x2601;"
    },
    {
      "text": "telephone",
      "value": "&#x260E;"
    },
    {
      "text": "ballot_box_with_check",
      "value": "&#x2611;"
    },
    {
      "text": "umbrella",
      "value": "&#x2614;"
    },
    {
      "text": "coffee",
      "value": "&#x2615;"
    },
    {
      "text": "point_up",
      "value": "&#x261D;"
    },
    {
      "text": "relaxed",
      "value": "&#x263A;"
    },
    {
      "text": "aries",
      "value": "&#x2648;"
    },
    {
      "text": "taurus",
      "value": "&#x2649;"
    },
    {
      "text": "gemini",
      "value": "&#x264A;"
    },
    {
      "text": "cancer",
      "value": "&#x264B;"
    },
    {
      "text": "leo",
      "value": "&#x264C;"
    },
    {
      "text": "virgo",
      "value": "&#x264D;"
    },
    {
      "text": "libra",
      "value": "&#x264E;"
    },
    {
      "text": "scorpius",
      "value": "&#x264F;"
    },
    {
      "text": "sagittarius",
      "value": "&#x2650;"
    },
    {
      "text": "capricorn",
      "value": "&#x2651;"
    },
    {
      "text": "aquarius",
      "value": "&#x2652;"
    },
    {
      "text": "pisces",
      "value": "&#x2653;"
    },
    {
      "text": "spades",
      "value": "&#x2660;"
    },
    {
      "text": "clubs",
      "value": "&#x2663;"
    },
    {
      "text": "hearts",
      "value": "&#x2665;"
    },
    {
      "text": "diamonds",
      "value": "&#x2666;"
    },
    {
      "text": "hotsprings",
      "value": "&#x2668;"
    },
    {
      "text": "recycle",
      "value": "&#x267B;"
    },
    {
      "text": "wheelchair",
      "value": "&#x267F;"
    },
    {
      "text": "anchor",
      "value": "&#x2693;"
    },
    {
      "text": "warning",
      "value": "&#x26A0;"
    },
    {
      "text": "zap",
      "value": "&#x26A1;"
    },
    {
      "text": "white_circle",
      "value": "&#x26AA;"
    },
    {
      "text": "black_circle",
      "value": "&#x26AB;"
    },
    {
      "text": "soccer",
      "value": "&#x26BD;"
    },
    {
      "text": "baseball",
      "value": "&#x26BE;"
    },
    {
      "text": "snowman",
      "value": "&#x26C4;"
    },
    {
      "text": "partly_sunny",
      "value": "&#x26C5;"
    },
    {
      "text": "ophiuchus",
      "value": "&#x26CE;"
    },
    {
      "text": "no_entry",
      "value": "&#x26D4;"
    },
    {
      "text": "church",
      "value": "&#x26EA;"
    },
    {
      "text": "fountain",
      "value": "&#x26F2;"
    },
    {
      "text": "golf",
      "value": "&#x26F3;"
    },
    {
      "text": "sailboat",
      "value": "&#x26F5;"
    },
    {
      "text": "tent",
      "value": "&#x26FA;"
    },
    {
      "text": "fuelpump",
      "value": "&#x26FD;"
    },
    {
      "text": "scissors",
      "value": "&#x2702;"
    },
    {
      "text": "white_check_mark",
      "value": "&#x2705;"
    },
    {
      "text": "airplane",
      "value": "&#x2708;"
    },
    {
      "text": "envelope",
      "value": "&#x2709;"
    },
    {
      "text": "fist",
      "value": "&#x270A;"
    },
    {
      "text": "raised_hand",
      "value": "&#x270B;"
    },
    {
      "text": "v",
      "value": "&#x270C;"
    },
    {
      "text": "pencil2",
      "value": "&#x270F;"
    },
    {
      "text": "black_nib",
      "value": "&#x2712;"
    },
    {
      "text": "heavy_check_mark",
      "value": "&#x2714;"
    },
    {
      "text": "heavy_multiplication_x",
      "value": "&#x2716;"
    },
    {
      "text": "sparkles",
      "value": "&#x2728;"
    },
    {
      "text": "eight_spoked_asterisk",
      "value": "&#x2733;"
    },
    {
      "text": "eight_pointed_black_star",
      "value": "&#x2734;"
    },
    {
      "text": "snowflake",
      "value": "&#x2744;"
    },
    {
      "text": "sparkle",
      "value": "&#x2747;"
    },
    {
      "text": "x",
      "value": "&#x274C;"
    },
    {
      "text": "negative_squared_cross_mark",
      "value": "&#x274E;"
    },
    {
      "text": "question",
      "value": "&#x2753;"
    },
    {
      "text": "grey_question",
      "value": "&#x2754;"
    },
    {
      "text": "grey_exclamation",
      "value": "&#x2755;"
    },
    {
      "text": "exclamation",
      "value": "&#x2757;"
    },
    {
      "text": "heart",
      "value": "&#x2764;"
    },
    {
      "text": "heavy_plus_sign",
      "value": "&#x2795;"
    },
    {
      "text": "heavy_minus_sign",
      "value": "&#x2796;"
    },
    {
      "text": "heavy_division_sign",
      "value": "&#x2797;"
    },
    {
      "text": "arrow_right",
      "value": "&#x27A1;"
    },
    {
      "text": "curly_loop",
      "value": "&#x27B0;"
    },
    {
      "text": "arrow_heading_up",
      "value": "&#x2934;"
    },
    {
      "text": "arrow_heading_down",
      "value": "&#x2935;"
    },
    {
      "text": "arrow_left",
      "value": "&#x2B05;"
    },
    {
      "text": "arrow_up",
      "value": "&#x2B06;"
    },
    {
      "text": "arrow_down",
      "value": "&#x2B07;"
    },
    {
      "text": "black_large_square",
      "value": "&#x2B1B;"
    },
    {
      "text": "white_large_square",
      "value": "&#x2B1C;"
    },
    {
      "text": "star",
      "value": "&#x2B50;"
    },
    {
      "text": "o",
      "value": "&#x2B55;"
    },
    {
      "text": "wavy_dash",
      "value": "&#x3030;"
    },
    {
      "text": "part_alternation_mark",
      "value": "&#x303D;"
    },
    {
      "text": "congratulations",
      "value": "&#x3297;"
    },
    {
      "text": "secret",
      "value": "&#x3299;"
    },
    {
      "text": "mahjong",
      "value": "&#x1F004;"
    },
    {
      "text": "black_joker",
      "value": "&#x1F0CF;"
    },
    {
      "text": "a",
      "value": "&#x1F170;"
    },
    {
      "text": "b",
      "value": "&#x1F171;"
    },
    {
      "text": "o2",
      "value": "&#x1F17E;"
    },
    {
      "text": "parking",
      "value": "&#x1F17F;"
    },
    {
      "text": "ab",
      "value": "&#x1F18E;"
    },
    {
      "text": "cl",
      "value": "&#x1F191;"
    },
    {
      "text": "cool",
      "value": "&#x1F192;"
    },
    {
      "text": "free",
      "value": "&#x1F193;"
    },
    {
      "text": "id",
      "value": "&#x1F194;"
    },
    {
      "text": "new",
      "value": "&#x1F195;"
    },
    {
      "text": "ng",
      "value": "&#x1F196;"
    },
    {
      "text": "ok",
      "value": "&#x1F197;"
    },
    {
      "text": "sos",
      "value": "&#x1F198;"
    },
    {
      "text": "up",
      "value": "&#x1F199;"
    },
    {
      "text": "vs",
      "value": "&#x1F19A;"
    },
    {
      "text": "cn",
      "value": "&#x1F1E8;"
    },
    {
      "text": "de",
      "value": "&#x1F1E9;"
    },
    {
      "text": "es",
      "value": "&#x1F1EA;"
    },
    {
      "text": "fr",
      "value": "&#x1F1EB;"
    },
    {
      "text": "uk",
      "value": "&#x1F1EC;"
    },
    {
      "text": "it",
      "value": "&#x1F1EE;"
    },
    {
      "text": "jp",
      "value": "&#x1F1EF;"
    },
    {
      "text": "kr",
      "value": "&#x1F1F0;"
    },
    {
      "text": "ru",
      "value": "&#x1F1F7;"
    },
    {
      "text": "us",
      "value": "&#x1F1FA;"
    },
    {
      "text": "koko",
      "value": "&#x1F201;"
    },
    {
      "text": "sa",
      "value": "&#x1F202;"
    },
    {
      "text": "u7121",
      "value": "&#x1F21A;"
    },
    {
      "text": "u6307",
      "value": "&#x1F22F;"
    },
    {
      "text": "u7981",
      "value": "&#x1F232;"
    },
    {
      "text": "u7a7a",
      "value": "&#x1F233;"
    },
    {
      "text": "u5408",
      "value": "&#x1F234;"
    },
    {
      "text": "u6e80",
      "value": "&#x1F235;"
    },
    {
      "text": "u6709",
      "value": "&#x1F236;"
    },
    {
      "text": "u6708",
      "value": "&#x1F237;"
    },
    {
      "text": "u7533",
      "value": "&#x1F238;"
    },
    {
      "text": "u5272",
      "value": "&#x1F239;"
    },
    {
      "text": "u55b6",
      "value": "&#x1F23A;"
    },
    {
      "text": "ideograph_advantage",
      "value": "&#x1F250;"
    },
    {
      "text": "accept",
      "value": "&#x1F251;"
    },
    {
      "text": "cyclone",
      "value": "&#x1F300;"
    },
    {
      "text": "foggy",
      "value": "&#x1F301;"
    },
    {
      "text": "closed_umbrella",
      "value": "&#x1F302;"
    },
    {
      "text": "night_with_stars",
      "value": "&#x1F303;"
    },
    {
      "text": "sunrise_over_mountains",
      "value": "&#x1F304;"
    },
    {
      "text": "sunrise",
      "value": "&#x1F305;"
    },
    {
      "text": "city_sunset",
      "value": "&#x1F306;"
    },
    {
      "text": "city_sunrise",
      "value": "&#x1F307;"
    },
    {
      "text": "rainbow",
      "value": "&#x1F308;"
    },
    {
      "text": "bridge_at_night",
      "value": "&#x1F309;"
    },
    {
      "text": "ocean",
      "value": "&#x1F30A;"
    },
    {
      "text": "volcano",
      "value": "&#x1F30B;"
    },
    {
      "text": "milky_way",
      "value": "&#x1F30C;"
    },
    {
      "text": "earth_asia",
      "value": "&#x1F30F;"
    },
    {
      "text": "new_moon",
      "value": "&#x1F311;"
    },
    {
      "text": "first_quarter_moon",
      "value": "&#x1F313;"
    },
    {
      "text": "waxing_gibbous_moon",
      "value": "&#x1F314;"
    },
    {
      "text": "full_moon",
      "value": "&#x1F315;"
    },
    {
      "text": "crescent_moon",
      "value": "&#x1F319;"
    },
    {
      "text": "first_quarter_moon_with_face",
      "value": "&#x1F31B;"
    },
    {
      "text": "star2",
      "value": "&#x1F31F;"
    },
    {
      "text": "stars",
      "value": "&#x1F320;"
    },
    {
      "text": "chestnut",
      "value": "&#x1F330;"
    },
    {
      "text": "seedling",
      "value": "&#x1F331;"
    },
    {
      "text": "palm_tree",
      "value": "&#x1F334;"
    },
    {
      "text": "cactus",
      "value": "&#x1F335;"
    },
    {
      "text": "tulip",
      "value": "&#x1F337;"
    },
    {
      "text": "cherry_blossom",
      "value": "&#x1F338;"
    },
    {
      "text": "rose",
      "value": "&#x1F339;"
    },
    {
      "text": "hibiscus",
      "value": "&#x1F33A;"
    },
    {
      "text": "sunflower",
      "value": "&#x1F33B;"
    },
    {
      "text": "blossom",
      "value": "&#x1F33C;"
    },
    {
      "text": "corn",
      "value": "&#x1F33D;"
    },
    {
      "text": "ear_of_rice",
      "value": "&#x1F33E;"
    },
    {
      "text": "herb",
      "value": "&#x1F33F;"
    },
    {
      "text": "four_leaf_clover",
      "value": "&#x1F340;"
    },
    {
      "text": "maple_leaf",
      "value": "&#x1F341;"
    },
    {
      "text": "fallen_leaf",
      "value": "&#x1F342;"
    },
    {
      "text": "leaves",
      "value": "&#x1F343;"
    },
    {
      "text": "mushroom",
      "value": "&#x1F344;"
    },
    {
      "text": "tomato",
      "value": "&#x1F345;"
    },
    {
      "text": "eggplant",
      "value": "&#x1F346;"
    },
    {
      "text": "grapes",
      "value": "&#x1F347;"
    },
    {
      "text": "melon",
      "value": "&#x1F348;"
    },
    {
      "text": "watermelon",
      "value": "&#x1F349;"
    },
    {
      "text": "tangerine",
      "value": "&#x1F34A;"
    },
    {
      "text": "banana",
      "value": "&#x1F34C;"
    },
    {
      "text": "pineapple",
      "value": "&#x1F34D;"
    },
    {
      "text": "apple",
      "value": "&#x1F34E;"
    },
    {
      "text": "green_apple",
      "value": "&#x1F34F;"
    },
    {
      "text": "peach",
      "value": "&#x1F351;"
    },
    {
      "text": "cherries",
      "value": "&#x1F352;"
    },
    {
      "text": "strawberry",
      "value": "&#x1F353;"
    },
    {
      "text": "hamburger",
      "value": "&#x1F354;"
    },
    {
      "text": "pizza",
      "value": "&#x1F355;"
    },
    {
      "text": "meat_on_bone",
      "value": "&#x1F356;"
    },
    {
      "text": "poultry_leg",
      "value": "&#x1F357;"
    },
    {
      "text": "rice_cracker",
      "value": "&#x1F358;"
    },
    {
      "text": "rice_ball",
      "value": "&#x1F359;"
    },
    {
      "text": "rice",
      "value": "&#x1F35A;"
    },
    {
      "text": "curry",
      "value": "&#x1F35B;"
    },
    {
      "text": "ramen",
      "value": "&#x1F35C;"
    },
    {
      "text": "spaghetti",
      "value": "&#x1F35D;"
    },
    {
      "text": "bread",
      "value": "&#x1F35E;"
    },
    {
      "text": "fries",
      "value": "&#x1F35F;"
    },
    {
      "text": "sweet_potato",
      "value": "&#x1F360;"
    },
    {
      "text": "dango",
      "value": "&#x1F361;"
    },
    {
      "text": "oden",
      "value": "&#x1F362;"
    },
    {
      "text": "sushi",
      "value": "&#x1F363;"
    },
    {
      "text": "fried_shrimp",
      "value": "&#x1F364;"
    },
    {
      "text": "fish_cake",
      "value": "&#x1F365;"
    },
    {
      "text": "icecream",
      "value": "&#x1F366;"
    },
    {
      "text": "shaved_ice",
      "value": "&#x1F367;"
    },
    {
      "text": "ice_cream",
      "value": "&#x1F368;"
    },
    {
      "text": "doughnut",
      "value": "&#x1F369;"
    },
    {
      "text": "cookie",
      "value": "&#x1F36A;"
    },
    {
      "text": "chocolate_bar",
      "value": "&#x1F36B;"
    },
    {
      "text": "candy",
      "value": "&#x1F36C;"
    },
    {
      "text": "lollipop",
      "value": "&#x1F36D;"
    },
    {
      "text": "custard",
      "value": "&#x1F36E;"
    },
    {
      "text": "honey_pot",
      "value": "&#x1F36F;"
    },
    {
      "text": "cake",
      "value": "&#x1F370;"
    },
    {
      "text": "bento",
      "value": "&#x1F371;"
    },
    {
      "text": "stew",
      "value": "&#x1F372;"
    },
    {
      "text": "egg",
      "value": "&#x1F373;"
    },
    {
      "text": "fork_and_knife",
      "value": "&#x1F374;"
    },
    {
      "text": "tea",
      "value": "&#x1F375;"
    },
    {
      "text": "sake",
      "value": "&#x1F376;"
    },
    {
      "text": "wine_glass",
      "value": "&#x1F377;"
    },
    {
      "text": "cocktail",
      "value": "&#x1F378;"
    },
    {
      "text": "tropical_drink",
      "value": "&#x1F379;"
    },
    {
      "text": "beer",
      "value": "&#x1F37A;"
    },
    {
      "text": "beers",
      "value": "&#x1F37B;"
    },
    {
      "text": "ribbon",
      "value": "&#x1F380;"
    },
    {
      "text": "gift",
      "value": "&#x1F381;"
    },
    {
      "text": "birthday",
      "value": "&#x1F382;"
    },
    {
      "text": "jack_o_lantern",
      "value": "&#x1F383;"
    },
    {
      "text": "christmas_tree",
      "value": "&#x1F384;"
    },
    {
      "text": "santa",
      "value": "&#x1F385;"
    },
    {
      "text": "fireworks",
      "value": "&#x1F386;"
    },
    {
      "text": "sparkler",
      "value": "&#x1F387;"
    },
    {
      "text": "balloon",
      "value": "&#x1F388;"
    },
    {
      "text": "tada",
      "value": "&#x1F389;"
    },
    {
      "text": "confetti_ball",
      "value": "&#x1F38A;"
    },
    {
      "text": "tanabata_tree",
      "value": "&#x1F38B;"
    },
    {
      "text": "crossed_flags",
      "value": "&#x1F38C;"
    },
    {
      "text": "bamboo",
      "value": "&#x1F38D;"
    },
    {
      "text": "dolls",
      "value": "&#x1F38E;"
    },
    {
      "text": "flags",
      "value": "&#x1F38F;"
    },
    {
      "text": "wind_chime",
      "value": "&#x1F390;"
    },
    {
      "text": "rice_scene",
      "value": "&#x1F391;"
    },
    {
      "text": "school_satchel",
      "value": "&#x1F392;"
    },
    {
      "text": "mortar_board",
      "value": "&#x1F393;"
    },
    {
      "text": "carousel_horse",
      "value": "&#x1F3A0;"
    },
    {
      "text": "ferris_wheel",
      "value": "&#x1F3A1;"
    },
    {
      "text": "roller_coaster",
      "value": "&#x1F3A2;"
    },
    {
      "text": "fishing_pole_and_fish",
      "value": "&#x1F3A3;"
    },
    {
      "text": "microphone",
      "value": "&#x1F3A4;"
    },
    {
      "text": "movie_camera",
      "value": "&#x1F3A5;"
    },
    {
      "text": "cinema",
      "value": "&#x1F3A6;"
    },
    {
      "text": "headphones",
      "value": "&#x1F3A7;"
    },
    {
      "text": "art",
      "value": "&#x1F3A8;"
    },
    {
      "text": "tophat",
      "value": "&#x1F3A9;"
    },
    {
      "text": "circus_tent",
      "value": "&#x1F3AA;"
    },
    {
      "text": "ticket",
      "value": "&#x1F3AB;"
    },
    {
      "text": "clapper",
      "value": "&#x1F3AC;"
    },
    {
      "text": "performing_arts",
      "value": "&#x1F3AD;"
    },
    {
      "text": "video_game",
      "value": "&#x1F3AE;"
    },
    {
      "text": "dart",
      "value": "&#x1F3AF;"
    },
    {
      "text": "slot_machine",
      "value": "&#x1F3B0;"
    },
    {
      "text": "8ball",
      "value": "&#x1F3B1;"
    },
    {
      "text": "game_die",
      "value": "&#x1F3B2;"
    },
    {
      "text": "bowling",
      "value": "&#x1F3B3;"
    },
    {
      "text": "flower_playing_cards",
      "value": "&#x1F3B4;"
    },
    {
      "text": "musical_note",
      "value": "&#x1F3B5;"
    },
    {
      "text": "notes",
      "value": "&#x1F3B6;"
    },
    {
      "text": "saxophone",
      "value": "&#x1F3B7;"
    },
    {
      "text": "guitar",
      "value": "&#x1F3B8;"
    },
    {
      "text": "musical_keyboard",
      "value": "&#x1F3B9;"
    },
    {
      "text": "trumpet",
      "value": "&#x1F3BA;"
    },
    {
      "text": "violin",
      "value": "&#x1F3BB;"
    },
    {
      "text": "musical_score",
      "value": "&#x1F3BC;"
    },
    {
      "text": "running_shirt_with_sash",
      "value": "&#x1F3BD;"
    },
    {
      "text": "tennis",
      "value": "&#x1F3BE;"
    },
    {
      "text": "ski",
      "value": "&#x1F3BF;"
    },
    {
      "text": "basketball",
      "value": "&#x1F3C0;"
    },
    {
      "text": "checkered_flag",
      "value": "&#x1F3C1;"
    },
    {
      "text": "snowboarder",
      "value": "&#x1F3C2;"
    },
    {
      "text": "runner",
      "value": "&#x1F3C3;"
    },
    {
      "text": "surfer",
      "value": "&#x1F3C4;"
    },
    {
      "text": "trophy",
      "value": "&#x1F3C6;"
    },
    {
      "text": "football",
      "value": "&#x1F3C8;"
    },
    {
      "text": "swimmer",
      "value": "&#x1F3CA;"
    },
    {
      "text": "house",
      "value": "&#x1F3E0;"
    },
    {
      "text": "house_with_garden",
      "value": "&#x1F3E1;"
    },
    {
      "text": "office",
      "value": "&#x1F3E2;"
    },
    {
      "text": "post_office",
      "value": "&#x1F3E3;"
    },
    {
      "text": "hospital",
      "value": "&#x1F3E5;"
    },
    {
      "text": "bank",
      "value": "&#x1F3E6;"
    },
    {
      "text": "atm",
      "value": "&#x1F3E7;"
    },
    {
      "text": "hotel",
      "value": "&#x1F3E8;"
    },
    {
      "text": "love_hotel",
      "value": "&#x1F3E9;"
    },
    {
      "text": "convenience_store",
      "value": "&#x1F3EA;"
    },
    {
      "text": "school",
      "value": "&#x1F3EB;"
    },
    {
      "text": "department_store",
      "value": "&#x1F3EC;"
    },
    {
      "text": "factory",
      "value": "&#x1F3ED;"
    },
    {
      "text": "izakaya_lantern",
      "value": "&#x1F3EE;"
    },
    {
      "text": "japanese_castle",
      "value": "&#x1F3EF;"
    },
    {
      "text": "european_castle",
      "value": "&#x1F3F0;"
    },
    {
      "text": "snail",
      "value": "&#x1F40C;"
    },
    {
      "text": "snake",
      "value": "&#x1F40D;"
    },
    {
      "text": "racehorse",
      "value": "&#x1F40E;"
    },
    {
      "text": "sheep",
      "value": "&#x1F411;"
    },
    {
      "text": "monkey",
      "value": "&#x1F412;"
    },
    {
      "text": "chicken",
      "value": "&#x1F414;"
    },
    {
      "text": "boar",
      "value": "&#x1F417;"
    },
    {
      "text": "elephant",
      "value": "&#x1F418;"
    },
    {
      "text": "octopus",
      "value": "&#x1F419;"
    },
    {
      "text": "shell",
      "value": "&#x1F41A;"
    },
    {
      "text": "bug",
      "value": "&#x1F41B;"
    },
    {
      "text": "ant",
      "value": "&#x1F41C;"
    },
    {
      "text": "bee",
      "value": "&#x1F41D;"
    },
    {
      "text": "beetle",
      "value": "&#x1F41E;"
    },
    {
      "text": "fish",
      "value": "&#x1F41F;"
    },
    {
      "text": "tropical_fish",
      "value": "&#x1F420;"
    },
    {
      "text": "blowfish",
      "value": "&#x1F421;"
    },
    {
      "text": "turtle",
      "value": "&#x1F422;"
    },
    {
      "text": "hatching_chick",
      "value": "&#x1F423;"
    },
    {
      "text": "baby_chick",
      "value": "&#x1F424;"
    },
    {
      "text": "hatched_chick",
      "value": "&#x1F425;"
    },
    {
      "text": "bird",
      "value": "&#x1F426;"
    },
    {
      "text": "penguin",
      "value": "&#x1F427;"
    },
    {
      "text": "koala",
      "value": "&#x1F428;"
    },
    {
      "text": "poodle",
      "value": "&#x1F429;"
    },
    {
      "text": "camel",
      "value": "&#x1F42B;"
    },
    {
      "text": "dolphin",
      "value": "&#x1F42C;"
    },
    {
      "text": "mouse",
      "value": "&#x1F42D;"
    },
    {
      "text": "cow",
      "value": "&#x1F42E;"
    },
    {
      "text": "tiger",
      "value": "&#x1F42F;"
    },
    {
      "text": "rabbit",
      "value": "&#x1F430;"
    },
    {
      "text": "cat",
      "value": "&#x1F431;"
    },
    {
      "text": "dragon_face",
      "value": "&#x1F432;"
    },
    {
      "text": "whale",
      "value": "&#x1F433;"
    },
    {
      "text": "horse",
      "value": "&#x1F434;"
    },
    {
      "text": "monkey_face",
      "value": "&#x1F435;"
    },
    {
      "text": "dog",
      "value": "&#x1F436;"
    },
    {
      "text": "pig",
      "value": "&#x1F437;"
    },
    {
      "text": "frog",
      "value": "&#x1F438;"
    },
    {
      "text": "hamster",
      "value": "&#x1F439;"
    },
    {
      "text": "wolf",
      "value": "&#x1F43A;"
    },
    {
      "text": "bear",
      "value": "&#x1F43B;"
    },
    {
      "text": "panda_face",
      "value": "&#x1F43C;"
    },
    {
      "text": "pig_nose",
      "value": "&#x1F43D;"
    },
    {
      "text": "feet",
      "value": "&#x1F43E;"
    },
    {
      "text": "eyes",
      "value": "&#x1F440;"
    },
    {
      "text": "ear",
      "value": "&#x1F442;"
    },
    {
      "text": "nose",
      "value": "&#x1F443;"
    },
    {
      "text": "lips",
      "value": "&#x1F444;"
    },
    {
      "text": "tongue",
      "value": "&#x1F445;"
    },
    {
      "text": "point_up_2",
      "value": "&#x1F446;"
    },
    {
      "text": "point_down",
      "value": "&#x1F447;"
    },
    {
      "text": "point_left",
      "value": "&#x1F448;"
    },
    {
      "text": "point_right",
      "value": "&#x1F449;"
    },
    {
      "text": "punch",
      "value": "&#x1F44A;"
    },
    {
      "text": "wave",
      "value": "&#x1F44B;"
    },
    {
      "text": "ok_hand",
      "value": "&#x1F44C;"
    },
    {
      "text": "thumbsup",
      "value": "&#x1F44D;"
    },
    {
      "text": "thumbsdown",
      "value": "&#x1F44E;"
    },
    {
      "text": "clap",
      "value": "&#x1F44F;"
    },
    {
      "text": "open_hands",
      "value": "&#x1F450;"
    },
    {
      "text": "crown",
      "value": "&#x1F451;"
    },
    {
      "text": "womans_hat",
      "value": "&#x1F452;"
    },
    {
      "text": "eyeglasses",
      "value": "&#x1F453;"
    },
    {
      "text": "necktie",
      "value": "&#x1F454;"
    },
    {
      "text": "shirt",
      "value": "&#x1F455;"
    },
    {
      "text": "jeans",
      "value": "&#x1F456;"
    },
    {
      "text": "dress",
      "value": "&#x1F457;"
    },
    {
      "text": "kimono",
      "value": "&#x1F458;"
    },
    {
      "text": "bikini",
      "value": "&#x1F459;"
    },
    {
      "text": "womans_clothes",
      "value": "&#x1F45A;"
    },
    {
      "text": "purse",
      "value": "&#x1F45B;"
    },
    {
      "text": "handbag",
      "value": "&#x1F45C;"
    },
    {
      "text": "pouch",
      "value": "&#x1F45D;"
    },
    {
      "text": "mans_shoe",
      "value": "&#x1F45E;"
    },
    {
      "text": "athletic_shoe",
      "value": "&#x1F45F;"
    },
    {
      "text": "high_heel",
      "value": "&#x1F460;"
    },
    {
      "text": "sandal",
      "value": "&#x1F461;"
    },
    {
      "text": "boot",
      "value": "&#x1F462;"
    },
    {
      "text": "footprints",
      "value": "&#x1F463;"
    },
    {
      "text": "bust_in_silhouette",
      "value": "&#x1F464;"
    },
    {
      "text": "boy",
      "value": "&#x1F466;"
    },
    {
      "text": "girl",
      "value": "&#x1F467;"
    },
    {
      "text": "man",
      "value": "&#x1F468;"
    },
    {
      "text": "woman",
      "value": "&#x1F469;"
    },
    {
      "text": "family",
      "value": "&#x1F46A;"
    },
    {
      "text": "couple",
      "value": "&#x1F46B;"
    },
    {
      "text": "cop",
      "value": "&#x1F46E;"
    },
    {
      "text": "dancers",
      "value": "&#x1F46F;"
    },
    {
      "text": "bride_with_veil",
      "value": "&#x1F470;"
    },
    {
      "text": "person_with_blond_hair",
      "value": "&#x1F471;"
    },
    {
      "text": "man_with_gua_pi_mao",
      "value": "&#x1F472;"
    },
    {
      "text": "man_with_turban",
      "value": "&#x1F473;"
    },
    {
      "text": "older_man",
      "value": "&#x1F474;"
    },
    {
      "text": "older_woman",
      "value": "&#x1F475;"
    },
    {
      "text": "baby",
      "value": "&#x1F476;"
    },
    {
      "text": "construction_worker",
      "value": "&#x1F477;"
    },
    {
      "text": "princess",
      "value": "&#x1F478;"
    },
    {
      "text": "japanese_ogre",
      "value": "&#x1F479;"
    },
    {
      "text": "japanese_goblin",
      "value": "&#x1F47A;"
    },
    {
      "text": "ghost",
      "value": "&#x1F47B;"
    },
    {
      "text": "angel",
      "value": "&#x1F47C;"
    },
    {
      "text": "alien",
      "value": "&#x1F47D;"
    },
    {
      "text": "space_invader",
      "value": "&#x1F47E;"
    },
    {
      "text": "imp",
      "value": "&#x1F47F;"
    },
    {
      "text": "skull",
      "value": "&#x1F480;"
    },
    {
      "text": "information_desk_person",
      "value": "&#x1F481;"
    },
    {
      "text": "guardsman",
      "value": "&#x1F482;"
    },
    {
      "text": "dancer",
      "value": "&#x1F483;"
    },
    {
      "text": "lipstick",
      "value": "&#x1F484;"
    },
    {
      "text": "nail_care",
      "value": "&#x1F485;"
    },
    {
      "text": "massage",
      "value": "&#x1F486;"
    },
    {
      "text": "haircut",
      "value": "&#x1F487;"
    },
    {
      "text": "barber",
      "value": "&#x1F488;"
    },
    {
      "text": "syringe",
      "value": "&#x1F489;"
    },
    {
      "text": "pill",
      "value": "&#x1F48A;"
    },
    {
      "text": "kiss",
      "value": "&#x1F48B;"
    },
    {
      "text": "love_letter",
      "value": "&#x1F48C;"
    },
    {
      "text": "ring",
      "value": "&#x1F48D;"
    },
    {
      "text": "gem",
      "value": "&#x1F48E;"
    },
    {
      "text": "couplekiss",
      "value": "&#x1F48F;"
    },
    {
      "text": "bouquet",
      "value": "&#x1F490;"
    },
    {
      "text": "couple_with_heart",
      "value": "&#x1F491;"
    },
    {
      "text": "wedding",
      "value": "&#x1F492;"
    },
    {
      "text": "heartbeat",
      "value": "&#x1F493;"
    },
    {
      "text": "broken_heart",
      "value": "&#x1F494;"
    },
    {
      "text": "two_hearts",
      "value": "&#x1F495;"
    },
    {
      "text": "sparkling_heart",
      "value": "&#x1F496;"
    },
    {
      "text": "heartpulse",
      "value": "&#x1F497;"
    },
    {
      "text": "cupid",
      "value": "&#x1F498;"
    },
    {
      "text": "blue_heart",
      "value": "&#x1F499;"
    },
    {
      "text": "green_heart",
      "value": "&#x1F49A;"
    },
    {
      "text": "yellow_heart",
      "value": "&#x1F49B;"
    },
    {
      "text": "purple_heart",
      "value": "&#x1F49C;"
    },
    {
      "text": "gift_heart",
      "value": "&#x1F49D;"
    },
    {
      "text": "revolving_hearts",
      "value": "&#x1F49E;"
    },
    {
      "text": "heart_decoration",
      "value": "&#x1F49F;"
    },
    {
      "text": "diamond_shape_with_a_dot_inside",
      "value": "&#x1F4A0;"
    },
    {
      "text": "bulb",
      "value": "&#x1F4A1;"
    },
    {
      "text": "anger",
      "value": "&#x1F4A2;"
    },
    {
      "text": "bomb",
      "value": "&#x1F4A3;"
    },
    {
      "text": "zzz",
      "value": "&#x1F4A4;"
    },
    {
      "text": "boom",
      "value": "&#x1F4A5;"
    },
    {
      "text": "sweat_drops",
      "value": "&#x1F4A6;"
    },
    {
      "text": "droplet",
      "value": "&#x1F4A7;"
    },
    {
      "text": "dash",
      "value": "&#x1F4A8;"
    },
    {
      "text": "poop",
      "value": "&#x1F4A9;"
    },
    {
      "text": "muscle",
      "value": "&#x1F4AA;"
    },
    {
      "text": "dizzy",
      "value": "&#x1F4AB;"
    },
    {
      "text": "speech_balloon",
      "value": "&#x1F4AC;"
    },
    {
      "text": "white_flower",
      "value": "&#x1F4AE;"
    },
    {
      "text": "moneybag",
      "value": "&#x1F4B0;"
    },
    {
      "text": "currency_exchange",
      "value": "&#x1F4B1;"
    },
    {
      "text": "heavy_dollar_sign",
      "value": "&#x1F4B2;"
    },
    {
      "text": "credit_card",
      "value": "&#x1F4B3;"
    },
    {
      "text": "yen",
      "value": "&#x1F4B4;"
    },
    {
      "text": "dollar",
      "value": "&#x1F4B5;"
    },
    {
      "text": "money_with_wings",
      "value": "&#x1F4B8;"
    },
    {
      "text": "chart",
      "value": "&#x1F4B9;"
    },
    {
      "text": "seat",
      "value": "&#x1F4BA;"
    },
    {
      "text": "computer",
      "value": "&#x1F4BB;"
    },
    {
      "text": "briefcase",
      "value": "&#x1F4BC;"
    },
    {
      "text": "minidisc",
      "value": "&#x1F4BD;"
    },
    {
      "text": "floppy_disk",
      "value": "&#x1F4BE;"
    },
    {
      "text": "cd",
      "value": "&#x1F4BF;"
    },
    {
      "text": "dvd",
      "value": "&#x1F4C0;"
    },
    {
      "text": "file_folder",
      "value": "&#x1F4C1;"
    },
    {
      "text": "open_file_folder",
      "value": "&#x1F4C2;"
    },
    {
      "text": "page_with_curl",
      "value": "&#x1F4C3;"
    },
    {
      "text": "page_facing_up",
      "value": "&#x1F4C4;"
    },
    {
      "text": "date",
      "value": "&#x1F4C5;"
    },
    {
      "text": "calendar",
      "value": "&#x1F4C6;"
    },
    {
      "text": "card_index",
      "value": "&#x1F4C7;"
    },
    {
      "text": "chart_with_upwards_trend",
      "value": "&#x1F4C8;"
    },
    {
      "text": "chart_with_downwards_trend",
      "value": "&#x1F4C9;"
    },
    {
      "text": "bar_chart",
      "value": "&#x1F4CA;"
    },
    {
      "text": "clipboard",
      "value": "&#x1F4CB;"
    },
    {
      "text": "pushpin",
      "value": "&#x1F4CC;"
    },
    {
      "text": "round_pushpin",
      "value": "&#x1F4CD;"
    },
    {
      "text": "paperclip",
      "value": "&#x1F4CE;"
    },
    {
      "text": "straight_ruler",
      "value": "&#x1F4CF;"
    },
    {
      "text": "triangular_ruler",
      "value": "&#x1F4D0;"
    },
    {
      "text": "bookmark_tabs",
      "value": "&#x1F4D1;"
    },
    {
      "text": "ledger",
      "value": "&#x1F4D2;"
    },
    {
      "text": "notebook",
      "value": "&#x1F4D3;"
    },
    {
      "text": "notebook_with_decorative_cover",
      "value": "&#x1F4D4;"
    },
    {
      "text": "closed_book",
      "value": "&#x1F4D5;"
    },
    {
      "text": "book",
      "value": "&#x1F4D6;"
    },
    {
      "text": "green_book",
      "value": "&#x1F4D7;"
    },
    {
      "text": "blue_book",
      "value": "&#x1F4D8;"
    },
    {
      "text": "orange_book",
      "value": "&#x1F4D9;"
    },
    {
      "text": "books",
      "value": "&#x1F4DA;"
    },
    {
      "text": "name_badge",
      "value": "&#x1F4DB;"
    },
    {
      "text": "scroll",
      "value": "&#x1F4DC;"
    },
    {
      "text": "pencil",
      "value": "&#x1F4DD;"
    },
    {
      "text": "telephone_receiver",
      "value": "&#x1F4DE;"
    },
    {
      "text": "pager",
      "value": "&#x1F4DF;"
    },
    {
      "text": "fax",
      "value": "&#x1F4E0;"
    },
    {
      "text": "satellite",
      "value": "&#x1F4E1;"
    },
    {
      "text": "loudspeaker",
      "value": "&#x1F4E2;"
    },
    {
      "text": "mega",
      "value": "&#x1F4E3;"
    },
    {
      "text": "outbox_tray",
      "value": "&#x1F4E4;"
    },
    {
      "text": "inbox_tray",
      "value": "&#x1F4E5;"
    },
    {
      "text": "package",
      "value": "&#x1F4E6;"
    },
    {
      "text": "e-mail",
      "value": "&#x1F4E7;"
    },
    {
      "text": "incoming_envelope",
      "value": "&#x1F4E8;"
    },
    {
      "text": "envelope_with_arrow",
      "value": "&#x1F4E9;"
    },
    {
      "text": "mailbox_closed",
      "value": "&#x1F4EA;"
    },
    {
      "text": "mailbox",
      "value": "&#x1F4EB;"
    },
    {
      "text": "postbox",
      "value": "&#x1F4EE;"
    },
    {
      "text": "newspaper",
      "value": "&#x1F4F0;"
    },
    {
      "text": "iphone",
      "value": "&#x1F4F1;"
    },
    {
      "text": "calling",
      "value": "&#x1F4F2;"
    },
    {
      "text": "vibration_mode",
      "value": "&#x1F4F3;"
    },
    {
      "text": "mobile_phone_off",
      "value": "&#x1F4F4;"
    },
    {
      "text": "signal_strength",
      "value": "&#x1F4F6;"
    },
    {
      "text": "camera",
      "value": "&#x1F4F7;"
    },
    {
      "text": "video_camera",
      "value": "&#x1F4F9;"
    },
    {
      "text": "tv",
      "value": "&#x1F4FA;"
    },
    {
      "text": "radio",
      "value": "&#x1F4FB;"
    },
    {
      "text": "vhs",
      "value": "&#x1F4FC;"
    },
    {
      "text": "arrows_clockwise",
      "value": "&#x1F503;"
    },
    {
      "text": "loud_sound",
      "value": "&#x1F50A;"
    },
    {
      "text": "battery",
      "value": "&#x1F50B;"
    },
    {
      "text": "electric_plug",
      "value": "&#x1F50C;"
    },
    {
      "text": "mag",
      "value": "&#x1F50D;"
    },
    {
      "text": "mag_right",
      "value": "&#x1F50E;"
    },
    {
      "text": "lock_with_ink_pen",
      "value": "&#x1F50F;"
    },
    {
      "text": "closed_lock_with_key",
      "value": "&#x1F510;"
    },
    {
      "text": "key",
      "value": "&#x1F511;"
    },
    {
      "text": "lock",
      "value": "&#x1F512;"
    },
    {
      "text": "unlock",
      "value": "&#x1F513;"
    },
    {
      "text": "bell",
      "value": "&#x1F514;"
    },
    {
      "text": "bookmark",
      "value": "&#x1F516;"
    },
    {
      "text": "link",
      "value": "&#x1F517;"
    },
    {
      "text": "radio_button",
      "value": "&#x1F518;"
    },
    {
      "text": "back",
      "value": "&#x1F519;"
    },
    {
      "text": "end",
      "value": "&#x1F51A;"
    },
    {
      "text": "on",
      "value": "&#x1F51B;"
    },
    {
      "text": "soon",
      "value": "&#x1F51C;"
    },
    {
      "text": "top",
      "value": "&#x1F51D;"
    },
    {
      "text": "underage",
      "value": "&#x1F51E;"
    },
    {
      "text": "keycap_ten",
      "value": "&#x1F51F;"
    },
    {
      "text": "capital_abcd",
      "value": "&#x1F520;"
    },
    {
      "text": "abcd",
      "value": "&#x1F521;"
    },
    {
      "text": "symbols",
      "value": "&#x1F523;"
    },
    {
      "text": "abc",
      "value": "&#x1F524;"
    },
    {
      "text": "fire",
      "value": "&#x1F525;"
    },
    {
      "text": "flashlight",
      "value": "&#x1F526;"
    },
    {
      "text": "wrench",
      "value": "&#x1F527;"
    },
    {
      "text": "hammer",
      "value": "&#x1F528;"
    },
    {
      "text": "nut_and_bolt",
      "value": "&#x1F529;"
    },
    {
      "text": "knife",
      "value": "&#x1F52A;"
    },
    {
      "text": "gun",
      "value": "&#x1F52B;"
    },
    {
      "text": "crystal_ball",
      "value": "&#x1F52E;"
    },
    {
      "text": "six_pointed_star",
      "value": "&#x1F52F;"
    },
    {
      "text": "beginner",
      "value": "&#x1F530;"
    },
    {
      "text": "trident",
      "value": "&#x1F531;"
    },
    {
      "text": "black_square_button",
      "value": "&#x1F532;"
    },
    {
      "text": "white_square_button",
      "value": "&#x1F533;"
    },
    {
      "text": "red_circle",
      "value": "&#x1F534;"
    },
    {
      "text": "large_blue_circle",
      "value": "&#x1F535;"
    },
    {
      "text": "large_orange_diamond",
      "value": "&#x1F536;"
    },
    {
      "text": "large_blue_diamond",
      "value": "&#x1F537;"
    },
    {
      "text": "small_orange_diamond",
      "value": "&#x1F538;"
    },
    {
      "text": "small_blue_diamond",
      "value": "&#x1F539;"
    },
    {
      "text": "small_red_triangle",
      "value": "&#x1F53A;"
    },
    {
      "text": "small_red_triangle_down",
      "value": "&#x1F53B;"
    },
    {
      "text": "arrow_up_small",
      "value": "&#x1F53C;"
    },
    {
      "text": "arrow_down_small",
      "value": "&#x1F53D;"
    },
    {
      "text": "clock1",
      "value": "&#x1F550;"
    },
    {
      "text": "clock2",
      "value": "&#x1F551;"
    },
    {
      "text": "clock3",
      "value": "&#x1F552;"
    },
    {
      "text": "clock4",
      "value": "&#x1F553;"
    },
    {
      "text": "clock5",
      "value": "&#x1F554;"
    },
    {
      "text": "clock6",
      "value": "&#x1F555;"
    },
    {
      "text": "clock7",
      "value": "&#x1F556;"
    },
    {
      "text": "clock8",
      "value": "&#x1F557;"
    },
    {
      "text": "clock9",
      "value": "&#x1F558;"
    },
    {
      "text": "clock10",
      "value": "&#x1F559;"
    },
    {
      "text": "clock11",
      "value": "&#x1F55A;"
    },
    {
      "text": "clock12",
      "value": "&#x1F55B;"
    },
    {
      "text": "mount_fuji",
      "value": "&#x1F5FB;"
    },
    {
      "text": "tokyo_tower",
      "value": "&#x1F5FC;"
    },
    {
      "text": "statue_of_liberty",
      "value": "&#x1F5FD;"
    },
    {
      "text": "japan",
      "value": "&#x1F5FE;"
    },
    {
      "text": "moyai",
      "value": "&#x1F5FF;"
    },
    {
      "text": "oncoming_automobile",
      "value": "&#x1F698;"
    },
    {
      "text": "expressionless",
      "value": "&#x1F611;"
    },
    {
      "text": "smiling_imp",
      "value": "&#x1F608;"
    },
    {
      "text": "frowning",
      "value": "&#x1F626;"
    },
    {
      "text": "no_mouth",
      "value": "&#x1F636;"
    },
    {
      "text": "baby_bottle",
      "value": "&#x1F37C;"
    },
    {
      "text": "non-potable_water",
      "value": "&#x1F6B1;"
    },
    {
      "text": "open_mouth",
      "value": "&#x1F62E;"
    },
    {
      "text": "last_quarter_moon_with_face",
      "value": "&#x1F31C;"
    },
    {
      "text": "do_not_litter",
      "value": "&#x1F6AF;"
    },
    {
      "text": "sunglasses",
      "value": "&#x1F60E;"
    },
    {
      "text": "metal",
      "value": "&#x1f918;"
    },
    {
      "text": "loop",
      "value": "&#x27BF;"
    },
    {
      "text": "last_quarter_moon",
      "value": "&#x1F317;"
    },
    {
      "text": "grinning",
      "value": "&#x1F600;"
    },
    {
      "text": "euro",
      "value": "&#x1F4B6;"
    },
    {
      "text": "clock330",
      "value": "&#x1F55E;"
    },
    {
      "text": "telescope",
      "value": "&#x1F52D;"
    },
    {
      "text": "globe_with_meridians",
      "value": "&#x1F310;"
    },
    {
      "text": "postal_horn",
      "value": "&#x1F4EF;"
    },
    {
      "text": "clock1030",
      "value": "&#x1F565;"
    },
    {
      "text": "pound",
      "value": "&#x1F4B7;"
    },
    {
      "text": "two_men_holding_hands",
      "value": "&#x1F46C;"
    },
    {
      "text": "tiger2",
      "value": "&#x1F405;"
    },
    {
      "text": "anguished",
      "value": "&#x1F627;"
    },
    {
      "text": "vertical_traffic_light",
      "value": "&#x1F6A6;"
    },
    {
      "text": "confused",
      "value": "&#x1F615;"
    },
    {
      "text": "repeat",
      "value": "&#x1F501;"
    },
    {
      "text": "oncoming_police_car",
      "value": "&#x1F694;"
    },
    {
      "text": "tram",
      "value": "&#x1F68A;"
    },
    {
      "text": "dragon",
      "value": "&#x1F409;"
    },
    {
      "text": "earth_americas",
      "value": "&#x1F30E;"
    },
    {
      "text": "rugby_football",
      "value": "&#x1F3C9;"
    },
    {
      "text": "left_luggage",
      "value": "&#x1F6C5;"
    },
    {
      "text": "sound",
      "value": "&#x1F509;"
    },
    {
      "text": "clock630",
      "value": "&#x1F561;"
    },
    {
      "text": "dromedary_camel",
      "value": "&#x1F42A;"
    },
    {
      "text": "oncoming_bus",
      "value": "&#x1F68D;"
    },
    {
      "text": "horse_racing",
      "value": "&#x1F3C7;"
    },
    {
      "text": "rooster",
      "value": "&#x1F413;"
    },
    {
      "text": "rowboat",
      "value": "&#x1F6A3;"
    },
    {
      "text": "customs",
      "value": "&#x1F6C3;"
    },
    {
      "text": "repeat_one",
      "value": "&#x1F502;"
    },
    {
      "text": "waxing_crescent_moon",
      "value": "&#x1F312;"
    },
    {
      "text": "mountain_railway",
      "value": "&#x1F69E;"
    },
    {
      "text": "clock930",
      "value": "&#x1F564;"
    },
    {
      "text": "put_litter_in_its_place",
      "value": "&#x1F6AE;"
    },
    {
      "text": "arrows_counterclockwise",
      "value": "&#x1F504;"
    },
    {
      "text": "clock130",
      "value": "&#x1F55C;"
    },
    {
      "text": "goat",
      "value": "&#x1F410;"
    },
    {
      "text": "pig2",
      "value": "&#x1F416;"
    },
    {
      "text": "innocent",
      "value": "&#x1F607;"
    },
    {
      "text": "no_bicycles",
      "value": "&#x1F6B3;"
    },
    {
      "text": "light_rail",
      "value": "&#x1F688;"
    },
    {
      "text": "whale2",
      "value": "&#x1F40B;"
    },
    {
      "text": "train2",
      "value": "&#x1F686;"
    },
    {
      "text": "earth_africa",
      "value": "&#x1F30D;"
    },
    {
      "text": "shower",
      "value": "&#x1F6BF;"
    },
    {
      "text": "waning_gibbous_moon",
      "value": "&#x1F316;"
    },
    {
      "text": "steam_locomotive",
      "value": "&#x1F682;"
    },
    {
      "text": "cat2",
      "value": "&#x1F408;"
    },
    {
      "text": "tractor",
      "value": "&#x1F69C;"
    },
    {
      "text": "thought_balloon",
      "value": "&#x1F4AD;"
    },
    {
      "text": "two_women_holding_hands",
      "value": "&#x1F46D;"
    },
    {
      "text": "full_moon_with_face",
      "value": "&#x1F31D;"
    },
    {
      "text": "mouse2",
      "value": "&#x1F401;"
    },
    {
      "text": "clock430",
      "value": "&#x1F55F;"
    },
    {
      "text": "worried",
      "value": "&#x1F61F;"
    },
    {
      "text": "rat",
      "value": "&#x1F400;"
    },
    {
      "text": "ram",
      "value": "&#x1F40F;"
    },
    {
      "text": "dog2",
      "value": "&#x1F415;"
    },
    {
      "text": "kissing",
      "value": "&#x1F617;",
      "alias": ":*"
    },
    {
      "text": "helicopter",
      "value": "&#x1F681;"
    },
    {
      "text": "clock1130",
      "value": "&#x1F566;"
    },
    {
      "text": "no_mobile_phones",
      "value": "&#x1F4F5;"
    },
    {
      "text": "european_post_office",
      "value": "&#x1F3E4;"
    },
    {
      "text": "ox",
      "value": "&#x1F402;"
    },
    {
      "text": "mountain_cableway",
      "value": "&#x1F6A0;"
    },
    {
      "text": "sleeping",
      "value": "&#x1F634;"
    },
    {
      "text": "cow2",
      "value": "&#x1F404;"
    },
    {
      "text": "minibus",
      "value": "&#x1F690;"
    },
    {
      "text": "clock730",
      "value": "&#x1F562;"
    },
    {
      "text": "aerial_tramway",
      "value": "&#x1F6A1;"
    },
    {
      "text": "speaker",
      "value": "&#x1F508;"
    },
    {
      "text": "no_bell",
      "value": "&#x1F515;"
    },
    {
      "text": "mailbox_with_mail",
      "value": "&#x1F4EC;"
    },
    {
      "text": "no_pedestrians",
      "value": "&#x1F6B7;"
    },
    {
      "text": "microscope",
      "value": "&#x1F52C;"
    },
    {
      "text": "bathtub",
      "value": "&#x1F6C1;"
    },
    {
      "text": "suspension_railway",
      "value": "&#x1F69F;"
    },
    {
      "text": "crocodile",
      "value": "&#x1F40A;"
    },
    {
      "text": "mountain_bicyclist",
      "value": "&#x1F6B5;"
    },
    {
      "text": "waning_crescent_moon",
      "value": "&#x1F318;"
    },
    {
      "text": "monorail",
      "value": "&#x1F69D;"
    },
    {
      "text": "children_crossing",
      "value": "&#x1F6B8;"
    },
    {
      "text": "clock230",
      "value": "&#x1F55D;"
    },
    {
      "text": "busts_in_silhouette",
      "value": "&#x1F465;"
    },
    {
      "text": "mailbox_with_no_mail",
      "value": "&#x1F4ED;"
    },
    {
      "text": "leopard",
      "value": "&#x1F406;"
    },
    {
      "text": "deciduous_tree",
      "value": "&#x1F333;"
    },
    {
      "text": "oncoming_taxi",
      "value": "&#x1F696;"
    },
    {
      "text": "lemon",
      "value": "&#x1F34B;"
    },
    {
      "text": "mute",
      "value": "&#x1F507;"
    },
    {
      "text": "baggage_claim",
      "value": "&#x1F6C4;"
    },
    {
      "text": "twisted_rightwards_arrows",
      "value": "&#x1F500;"
    },
    {
      "text": "sun_with_face",
      "value": "&#x1F31E;"
    },
    {
      "text": "trolleybus",
      "value": "&#x1F68E;"
    },
    {
      "text": "evergreen_tree",
      "value": "&#x1F332;"
    },
    {
      "text": "passport_control",
      "value": "&#x1F6C2;"
    },
    {
      "text": "new_moon_with_face",
      "value": "&#x1F31A;"
    },
    {
      "text": "potable_water",
      "value": "&#x1F6B0;"
    },
    {
      "text": "high_brightness",
      "value": "&#x1F506;"
    },
    {
      "text": "low_brightness",
      "value": "&#x1F505;"
    },
    {
      "text": "clock530",
      "value": "&#x1F560;"
    },
    {
      "text": "hushed",
      "value": "&#x1F62F;"
    },
    {
      "text": "grimacing",
      "value": "&#x1F62C;"
    },
    {
      "text": "water_buffalo",
      "value": "&#x1F403;"
    },
    {
      "text": "neutral_face",
      "value": "&#x1F610;"
    },
    {
      "text": "clock1230",
      "value": "&#x1F567;"
    },
    {
      "text": "100",
      "value": "&#x1F4AF;"
    },
    {
      "text": "1234",
      "value": "&#x1F522;"
    }
  ])
  .run(['emoticonRegex', function(emoticonRegex) {
    emoticonRegex.set();
  }])
  .service('emoticonRegex', ['emoticonList', function(emoticonList) {
    var emoji_regex;
    this.set = function() {
      var token_search_pattern = /:([\w+-]+):/g;
      var quotePatternText = function(alias) {
        // Escape characters that are meaningful in a RegExp context.
        return (alias.replace(/([.()+*[\]{}?-])/g, '\\$1'));
      }
      var alias_array = emoticonList.reduce(function(arr, item) {
        if (item.alias) {
          arr.push(quotePatternText(item.alias));
        }
        return arr;
      }, []);
      emoji_regex = new RegExp((token_search_pattern.source + '|(' + alias_array.join('|') + ')'),
        'g'
      );
    };
    this.get = function() {
      return emoji_regex;
    };
  }])
  .filter('emoticons', ['$sce', 'emoticonList', 'emoticonRegex', function($sce, emoticonList, emoticonRegex) {
    var convertFilter = function(text) {
      var tokenSearchPattern = emoticonRegex.get();
      if (!text || !angular.isString(text)) {
        return (text);
      }
      var emoticons_string = text.replace(
        tokenSearchPattern,
        function replaceMatch($0, token, aliasText) {
          if (token) {
            var emo_index = emoticonList.findIndex(function(emoticon) {
              return emoticon.text == token
            });
            return (emo_index > -1 ? emoticonList[emo_index].value : $0);
          }
          if (aliasText) {
            var alias_index = emoticonList.findIndex(function(emoticon) {
              return emoticon.alias == aliasText
            });
            return (alias_index > -1 ? emoticonList[alias_index].value : $0);
          }
        });
      return $sce.trustAsHtml(emoticons_string);
    }
    return convertFilter;
  }])
  .directive('emoticonsPopup', ['emoticonList', '$timeout', function(emoticonList, $timeout) {
    return {
      scope: {
        'onSelect': '&?',
        'onClose': '&?',
        'ngModel': '='
      },
      restrict: 'E',
      template: '<div class="angular-emotions-container"> <a class="close-popup text-center" style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; display: block; width: 100%; cursor: pointer; padding: 5px;" ng-click="close()">Close</a> <div class="angular-emoticons-input-container" ng-click="$event.stopPropagation()"><input class="emoticon-input" type="text" name="search_smiley" ng-model="search" placeholder="Search Emoticons"></div> <div class="angular-emoticons-list"> <span class="angular-emoticon" ng-repeat="emoticon in emoticonList | filter: {text:search} track by $index" ng-bind-html="emoticon.value" title="{{emoticon.text}}" ng-mouseover="highlight(emoticon)" ng-click="selectEmoticon(emoticon)" ng-class="{\'active\' : data.emoticon.value === emoticon.value}"></span> </div> <div class="angular-emoticons-footer" ng-click="$event.stopPropagation()"> <span class="angular-big-emoticon" ng-bind-html="data.emoticon.value" title="{{data.emoticon.text}}"></span> <span class="angular-emoticon-text" ng-if="data.emoticon" ng-bind="\':\'+data.emoticon.text+\':\'"></span> </div></div>',
      link: function($scope, iElm, iAttrs, controller) {
        $scope.data = {};
        $scope.emoticonList = emoticonList;

        $scope.highlight = function(emoticon) {
          $scope.data.emoticon = emoticon;
        };

        $scope.close = function() {
            if($scope.onClose) {
                $timeout(function(){
                    $scope.onClose()
                }, 0);
            }
        }

        $scope.selectEmoticon = function(emoticon) {
          $scope.ngModel = emoticon;
          if ($scope.onSelect) {
            $timeout(function() {
              $scope.onSelect();
            }, 0);
          }
        };
      }
    };
  }])