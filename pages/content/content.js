import { $wuxGallery } from '../../dist/index';

Page({
    data: {
        urls: [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543901435175&di=60ea0192c22c233dce369e925de2b71a&imgtype=0&src=http%3A%2F%2Fa3.topitme.com%2F4%2F72%2F90%2F11282123940a390724o.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543901435175&di=b818212b131457c23c56c8f4b4587d6c&imgtype=0&src=http%3A%2F%2Fwx4.sinaimg.cn%2Flarge%2Fa1b61d0aly1fn2h3xwat6j20dw0dwtbp.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543901435175&di=47b310d84702fd4b1ec5f953af8f3bd4&imgtype=0&src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F76490992.jpeg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543901435174&di=510422804f65292bef2da8020f5ea6f4&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F35%2F43%2F94e58PICdzr_1024.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543901435171&di=22f7073262bb1d02784abc5f3953c4e3&imgtype=0&src=http%3A%2F%2Ftupian.qqjay.com%2Fu%2F2017%2F1208%2F3_143331_8.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543901435200&di=7b2f02682442efef9adc7212baad1d78&imgtype=0&src=http%3A%2F%2Fpic11.nipic.com%2F20101126%2F3367900_112731025783_2.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543901435198&di=14c7c554efc9955cf30f81e5792910fb&imgtype=0&src=http%3A%2F%2Fpic25.nipic.com%2F20121130%2F9393861_161841181000_2.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543901435196&di=598b317338bb69e3e854a15c86b6946f&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F35%2F99%2F07A58PICGRm_1024.jpg',
        ],
    },
    // 画廊
    showGallery2(e) {
        const { current } = e.currentTarget.dataset;
        const { urls } = this.data;
        $wuxGallery().show({
            current,
            urls: urls.map((n) => ({ image: n, remark: n })),
            showDelete: false,
            indicatorDots: true,
            indicatorColor: '#fff',
            indicatorActiveColor: '#04BE02',
        })
    },
})