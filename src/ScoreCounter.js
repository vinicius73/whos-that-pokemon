import Vue from 'vue'

export default Vue.extend({
  name: 'ScoreCounter',
  props: {
    score: Number
  },
  render(h) {
    return (
      <div class="tags has-addons">
        <span class="tag is-large">Hits</span>
        <span
          class={this.score === 0 ? 'tag is-large is-danger' : 'tag is-large is-primary'} >
            {this.score}
        </span>
      </div>
    )
  }
})