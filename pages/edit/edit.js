import { $wuxCalendar } from '../../dist/index'

Page({
    data: {
        time: [],
        fileList:[],
        queryLoading: false
    },
    onShow: function () {
        // console.log(123)
        // this.data.time = [];
        // this.setData({
        //     fileList: [],
        // })
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
    },
    query (e) {
        this.setData({
            queryLoading: true,
        });
    },
    // 时间选择
    openCalendar1() {
        const now = new Date();
        const maxDate = now.getTime();
        $wuxCalendar().open({
            value: this.data.time,
            maxDate,
            onChange: (values, displayValues) => {
                console.log('onChange', values, displayValues)
                this.setData({
                    time: displayValues,
                })
                console.log(this.data.time)
            },
        })
    },
    // 图片上传
    onChange(e) {
        console.log('onChange', e)
        const { file } = e.detail
        if (file.status === 'uploading') {
            this.setData({
                progress: 0,
            })
            wx.showLoading()
        } else if (file.status === 'done') {
            this.setData({
                imageUrl: file.url,
            })
        }
    },
    onSuccess(e) {
        console.log('onSuccess', e)
    },
    onFail(e) {
        console.log('onFail', e)
    },
    onComplete(e) {
        console.log('onComplete', e)
        wx.hideLoading()
    },
    onProgress(e) {
        console.log('onProgress', e)
        this.setData({
            progress: e.detail.file.progress,
        })
    },
    onPreview(e) {
        console.log('onPreview', e)
        const { file, fileList } = e.detail
        wx.previewImage({
            current: file.url,
            urls: fileList.map((n) => n.url),
        })
    },
    onRemove(e) {
        const { file, fileList } = e.detail
        wx.showModal({
            content: '确定删除？',
            success: (res) => {
                if (res.confirm) {
                    this.setData({
                        fileList: fileList.filter((n) => n.uid !== file.uid),
                    })
                }
            },
        })
    },
})