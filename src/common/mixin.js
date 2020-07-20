import { debounce } from 'common/utils.js'

export const bindImgLoad = {
  data () {
    return {
      imgLoadAndRefresh: null
    }
  },
  mounted () {
    const newRefresh = debounce(this.$refs.scroll.refresh, 500)
    this.imgLoadAndRefresh = () => {
      // debounce(this.$refs.scroll.refresh, 500)()
      newRefresh()
    }
    this.$bus.$on('imgLoad', this.imgLoadAndRefresh)
  }
}