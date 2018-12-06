import { $wuxGallery } from '../../dist/index';

//获取应用实例
// const app = getApp();

Page({
    data: {
        buttons: [{
                openType: 'list',
                label: '列表模式',
                icon: 'data:image/svg+xml;base64,PHN2ZyB0PSIxNTQzODI3NDc4NDIxIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQxNzYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIi8+PC9kZWZzPjxwYXRoIGQ9Ik02NCA0ODBoMzUyVjEyOEg2NHYzNTJ6IG02NC0yODhoMjI0djIyNEgxMjhWMTkyek02NCA5MjhoMzUyVjU3Nkg2NHYzNTJ6IG02NC0yODhoMjI0djIyNEgxMjh2LTIyNHpNNTI2Ljg0OCAyMjRIOTI4YTMyIDMyIDAgMSAwIDAtNjRINTI2Ljg0OGEzMiAzMiAwIDAgMCAwIDY0ek05MjggNjA4SDUyNi44NDhhMzIgMzIgMCAxIDAgMCA2NEg5MjhhMzIgMzIgMCAxIDAgMC02NHpNOTI4IDM4NEg1MjYuODQ4YTMyIDMyIDAgMCAwIDAgNjRIOTI4YTMyIDMyIDAgMSAwIDAtNjR6TTkyOCA4MzJINTI2Ljg0OGEzMiAzMiAwIDEgMCAwIDY0SDkyOGEzMiAzMiAwIDEgMCAwLTY0eiIgcC1pZD0iNDE3NyIgZmlsbD0iI2ZmZmZmZiIvPjwvc3ZnPg==',
            },
            {
                openType: 'image',
                label: '图片模式',
                icon: 'data:image/svg+xml;base64,PHN2ZyB0PSIxNTQzODI3NTY5ODM5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQzNDEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIi8+PC9kZWZzPjxwYXRoIGQ9Ik04OTYgNjI2LjU5MmExNiAxNiAwIDAgMC03LjY4LTEzLjY2NGwtMTcyLjQ0OC0xMDUuMDg4YTE2IDE2IDAgMCAwLTIwLjcwNCAzLjUybC03NiA5Mi42MDgtMS4wMjQgMS4xNTJhMTYgMTYgMCAwIDEtMjIuNjI0IDAuMDMybC0yNTIuODMyLTI1Mi4wNjRhMTYuMDMyIDE2LjAzMiAwIDAgMC0yMi4wOC0wLjUxMmwtMTg3LjM2IDE3MC42NTZhMTUuOTM2IDE1LjkzNiAwIDAgMC01LjI0OCAxMS44NFY4MDBoNzY4di0xNzMuNDA4eiIgcC1pZD0iNDM0MiIgZmlsbD0iI2ZmZmZmZiIvPjxwYXRoIGQ9Ik04MDAgMzIwbS02NCAwYTY0IDY0IDAgMSAwIDEyOCAwIDY0IDY0IDAgMSAwLTEyOCAwWiIgcC1pZD0iNDM0MyIgZmlsbD0iI2ZmZmZmZiIvPjxwYXRoIGQ9Ik0zMiAxMjh2NzY4aDk2MFYxMjhIMzJ6IG04OTYgNzA0SDk2VjE5Mmg4MzJ2NjQweiIgcC1pZD0iNDM0NCIgZmlsbD0iI2ZmZmZmZiIvPjwvc3ZnPg==',
            },
            {
                openType: 'compoundImage',
                label: '合成图',
                icon: 'data:image/svg+xml;base64,PHN2ZyB0PSIxNTQzODI3NzUzOTY3IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ1NTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIi8+PC9kZWZzPjxwYXRoIGQ9Ik05NjYuMjA4IDI0Ni43NTJMNTM0LjE0NCAyMS40MDhhNDcuOTY4IDQ3Ljk2OCAwIDAgMC00NC4xMjgtMC4xMjhMNTguMDggMjQzLjEzNkE0Ny45NjggNDcuOTY4IDAgMCAwIDMyIDI4NS44MjRWNzQ0LjY0YzAgMTguMjA4IDEwLjMwNCAzNC44NDggMjYuNTkyIDQyLjk3Nmw0MzIgMjE1LjM2YTQ4IDQ4IDAgMCAwIDQyLjgxNiAwbDQzMi0yMTUuMzZBNDggNDggMCAwIDAgOTkyIDc0NC42NzJWMjg5LjM0NGMwLTE3LjkyLTkuOTUyLTM0LjMwNC0yNS43OTItNDIuNTkyek01MDguMzg0IDQ2My42OGwtMTYyLjE3Ni03OS44MDggMzY3LjM2LTE5Ni43MDQgMTU4LjQgODIuNjI0LTM2My41ODQgMTkzLjg4OHogbTMuNDg4LTM4MS42OTZsMTMyLjk5MiA2OS4zNzYtMzY5LjMxMiAxOTcuNzYtMTQ0Ljg5Ni03MS4zMjggMzgxLjIxNi0xOTUuODA4ek05NiAzMzIuMDk2bDE1My4yMTYgNzUuMzkydjE2OC4yNTZhMzIgMzIgMCAwIDAgNjQgMHYtMTM2LjczNkw0ODAgNTIxLjAyNHY0MDUuMTg0TDk2IDczNC43NTJWMzMyLjA5NnogbTQ0OCA1OTQuMTEyVjUxNy4xODRsMzg0LTIwNC43MzZ2NDIyLjMwNGwtMzg0IDE5MS40NTZ6IiBwLWlkPSI0NTUzIiBmaWxsPSIjZmZmZmZmIi8+PC9zdmc+',
            }
        ],
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
        position: 'bottomRight',
        selectIndex: 0,
    },
    onLoad() {},
    // 菜单切换
    onClick(e) {
        // console.log('onClick', e.detail)
        this.setData({
            selectIndex: e.detail.index,
        })
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
    // 进入内页
    selectItem() {
        wx.navigateTo({
            url:'../content/content',  //跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径，不需要.wxml后缀
            success:function(){}        //成功后的回调
        })
    },
    tabChange(e) {
        let urls = [
            '../index/index',
            '../edit/edit',
            '../setting/setting'
        ]
        console.log(urls[e.detail.key])
        wx.redirectTo({ 
            url: urls[e.detail.key], 
            success: function (e) {
                var page = getCurrentPages().pop(); 
                if (page == undefined || page == null) return; 
                page.onLoad(); 
            } 
        })
    }
})