export default {
  mounted () {
    this.loadData()
  },
  data () {
    return {
      conditions: {},
      records: []
    }
  },
  methods: {
    loadData () {
      this.$refs.list.loadData()
    }
  }
}
