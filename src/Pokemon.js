import Vue from 'vue'
import { sampleSize, map, shuffle } from 'lodash-es'
import list from './assets/pokemons.json'
import Image from './Image'

export default Vue.extend({
  name: 'Pokemon',
  props: {
    pokemon: String,
    visible: Boolean
  },
  data: () => ({
    result: null
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
    },
    onError () {
      this.$emit('error')
      this.result = false
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
            <figure class="image is-128x128">
              <Image
                visible={this.visible}
                pokemon={this.pokemon} />
            </figure>
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
              {(this.hasResult && <p class="is-size-4">
                This is <strong>{this.pokemon}</strong>
              </p>)}
            </div>
          </div>
        </article>
      </div>
    )
  }
})