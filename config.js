const GLOBAL_SETTING = {
  // 部署时改为 true - 控制着是否显示帧率、界面是否能右击
  PRODUCTION: false,

  IOT_CONFIG: {
    // 统一数据服务平台
    RestAPIService: "http://223.243.25.6:8088", // 外网 - 亳州
    // 登录获取权限
    AuthParameter: '/Auth/login',
    // 根据条件获取租户信息
    TenantInfo: '/tenant',
    // 初始化的配置
    InitDataService: '/REST/System/DATAAPP/IOT/v1/InitdataService?monitortype=',

    VideosService: '/REST/System/DATAAPP/IOT/v1/VideoService',
    // 视频服务器地址
    VideoUrl: "http://59.203.98.86:8005/stream/channels/", //政务网（内网）
    VideoUrl2: "http://223.243.25.6:8005/stream/channels/", //外网

    VideoControlUrl: 'http://59.203.98.86:8005/api/v1/pag/channels/', //视频控制地址（内网）
    VideoControlUrl2: 'http://223.243.25.6:8005/api/v1/pag/channels/', //视频控制地址（外网）
  },

  // videoProxy
  videoUrl: "/videoProxy/Video/GetCameras?pageNo=1&pageSize=100&treeCode=0",
  getVideoUrlById: "/videoProxy/Video/GetPreviewURLs?protocol=hls&cameraIndexCode=",

  userLocalVideo: true,
  videoData: [
    {
    "GroupCode": "000001",
    "GroupName": "央视新闻频道",
    "Videos": [{
      "SPDMC": "CCTV-1（综合）",
      "JXCS": "http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8",
    }, {
      "SPDMC": "CCTV-2（财经）",
      "JXCS": "http://ivi.bupt.edu.cn/hls/cctv2.m3u8",
    }, {
      "SPDMC": "CCTV-3高清（综艺）",
      "JXCS": "http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8",
    }, {
      "SPDMC": "CCTV-4高清（中文国际）",
      "JXCS": "http://ivi.bupt.edu.cn/hls/cctv4.m3u8",
    }, {
      "SPDMC": "CCTV-5+高清（体育）",
      "JXCS": "http://ivi.bupt.edu.cn/hls/cctv5phd.m3u8",
    }, {
      "SPDMC": "CCTV-6高清（电影）",
      "JXCS": "http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8",
    }, {
      "SPDMC": "CCTV-7高清（国防军事）",
      "JXCS": "http://ivi.bupt.edu.cn/hls/cctv7.m3u8",
    }, {
      "SPDMC": "CCTV-8高清（电视剧）",
      "JXCS": "http://ivi.bupt.edu.cn/hls/cctv8hd.m3u8",
    }, {
      "SPDMC": "CCTV-9高清（记录）",
      "JXCS": "http://ivi.bupt.edu.cn/hls/cctv9.m3u8",
    }, {
      "SPDMC": "CCTV-10高清（科教）",
      "JXCS": "http://ivi.bupt.edu.cn/hls/cctv10.m3u8",
    }, {
      "SPDMC": "CCTV-11高清（戏曲）",
      "JXCS": "http://ivi.bupt.edu.cn/hls/cctv11.m3u8",
    }, {
      "SPDMC": "CCTV-12高清（社会与法）",
      "JXCS": "http://ivi.bupt.edu.cn/hls/cctv12.m3u8",
    }, {
      "SPDMC": "CCTV-13高清（新闻）",
      "JXCS": "http://ivi.bupt.edu.cn/hls/cctv13.m3u8",
    }, {
      "SPDMC": "CCTV-14高清（少儿）",
      "JXCS": "http://ivi.bupt.edu.cn/hls/cctv14.m3u8",
    }, {
      "SPDMC": "CCTV-15高清（音乐）",
      "JXCS": "http://ivi.bupt.edu.cn/hls/cctv15.m3u8",
    }, {
      "SPDMC": "CHC高清（电影）",
      "JXCS": "http://ivi.bupt.edu.cn/hls/chchd.m3u8",
    }],
  }, {
    "GroupCode": "000002",
    "GroupName": "地方电视频道",
    "Videos": [{
      "SPDMC": "北京卫视高清",
      "JXCS": "http://ivi.bupt.edu.cn/hls/btv1hd.m3u8",
    }, {
      "SPDMC": "北京文艺高清",
      "JXCS": "http://ivi.bupt.edu.cn/hls/btv2hd.m3u8",
    }, {
      "SPDMC": "湖南卫视高清",
      "JXCS": "http://ivi.bupt.edu.cn/hls/hunanhd.m3u8",
    }, {
      "SPDMC": "浙江卫视高清",
      "JXCS": "http://ivi.bupt.edu.cn/hls/zjhd.m3u8",
    }, {
      "SPDMC": "江苏卫视高清",
      "JXCS": "http://ivi.bupt.edu.cn/hls/jshd.m3u8",
    }, {
      "SPDMC": "东方卫视高清",
      "JXCS": "http://ivi.bupt.edu.cn/hls/dfhd.m3u8",
    }, {
      "SPDMC": "安徽卫视高清",
      "JXCS": "http://ivi.bupt.edu.cn/hls/ahhd.m3u8",
    }, {
      "SPDMC": "黑龙江卫视高清",
      "JXCS": "http://ivi.bupt.edu.cn/hls/hljhd.m3u8",
    }, {
      "SPDMC": "辽宁卫视高清",
      "JXCS": "http://ivi.bupt.edu.cn/hls/lnhd.m3u8",
    }, {
      "SPDMC": "深圳卫视高清",
      "JXCS": "http://ivi.bupt.edu.cn/hls/szhd.m3u8",
    }, {
      "SPDMC": "广东卫视高清",
      "JXCS": "http://ivi.bupt.edu.cn/hls/gdhd.m3u8",
    }, {
      "SPDMC": "天津卫视高清",
      "JXCS": "http://ivi.bupt.edu.cn/hls/tjhd.m3u8",
    }, {
      "SPDMC": "湖北卫视高清",
      "JXCS": "http://ivi.bupt.edu.cn/hls/hbhd.m3u8",
    }, {
      "SPDMC": "东南卫视高清",
      "JXCS": "http://ivi.bupt.edu.cn/hls/sdhd.m3u8",
    }, {
      "SPDMC": "北京纪实高清",
      "JXCS": "http://ivi.bupt.edu.cn/hls/btv11hd.m3u8",
    }, {
      "SPDMC": "民视新闻台",
      "JXCS": "https://6.mms.vlog.xuite.net/hls/ftvtv/index.m3u8",
    }],
  }, {
    "GroupCode": "000003",
    "GroupName": "测试视频",
    "Videos": [{
      "SPDMC": "KBS LIVE",
      "JXCS": "http://kbs-dokdo.gscdn.com/dokdo_300/_definst_/dokdo_300.stream/playlist.m3u8",
    }],
  }]
}
