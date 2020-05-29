import Vue from 'vue'
import { sampleSize, map, shuffle } from 'lodash-es'
import list from './assets/pokemons.json'
import Image from './Image'
import ScoreCounter from './ScoreCounter'

export default Vue.extend({
  name: 'Pokemon',
  props: {
    pokemon: String,
    visible: Boolean
  },
  data: () => ({
    result: null,
    score: 0
  }),
  computed: {
    options () {
      return shuffle([
        this.pokemon,
        ...sampleSize(list, 4)
      ])
    },
    hasResult () {
      return this.result !== null
    },
    cardClass () {
      const { result } = this

      if (result === null) {
        return ''
      }

      return result
        ? 'has-background-success'
        : 'has-background-warning'
    }
  },
  methods: {
    setValue (val) {
      this.pokemon === val
       ? this.onSuccess()
       : this.onError()
    },
    onSuccess () {
      this.$emit('success')
      this.result = true
      this.score++
    },
    onError () {
      this.$emit('error')
      this.result = false
      this.score = 0
    }
  },
  watch: {
    pokemon () {
      this.result = null
    }
  },
  render (h) {
    return (
      <div class={`box ${this.cardClass}`}>
        <article class="media">
          <div class="media-left">
            <ScoreCounter class="is-hidden-touch" score={this.score} />
            <figure class="image is-128x128">
              <Image
                visible={this.visible}
                pokemon={this.pokemon} />
            </figure>
            <ScoreCounter class="is-hidden-desktop" score={this.score} />
            {(this.hasResult && <p class="is-size-4 is-hidden-desktop">
              <hr />
              <strong>{this.pokemon}</strong>
            </p>)}
          </div>
          <div class="media-content">
            <div class="content">
              <div class="buttons">
                {map(this.options, id => (
                  <button
                    on-click={() => this.setValue(id)}
                    disabled={this.hasResult}
                    class="button is-dark">{id}</button>
                ))}
              </div>
              {(this.hasResult && <p class="is-size-4 is-hidden-touch">
                This is <strong>{this.pokemon}</strong>
              </p>)}
            </div>
          </div>
        </article>
      </div>
    )
  }
})