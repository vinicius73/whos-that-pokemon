import Vue from 'vue'

export default Vue.extend({
  name: 'Footer',
  render (h) {
    return (
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            Made with <a href="https://www.pika.dev/npm/vue" target="__blank">Vue.js</a> and <a href="https://www.pika.dev/cdn" target="__blank">Pika CDN</a>.
          </p>
          <p>
            Using <a href="https://github.com/vinicius73/rollup-plugin-pika-resolver">@vinicius73/rollup-plugin-pika-resolver</a>.
          </p>
        </div>
      </footer>
    )
  }
})