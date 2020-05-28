import { sample } from 'lodash-es'
import Vue from 'vue'
import list from './assets/pokemons.json'
import PokemonCard from './Pokemon'
import Footer from './Footer'

export default Vue.extend({
  name: 'App',
  data: () => ({
    visible: false,
    pokemon: sample(list)
  }),
  methods: {
    next() {
      this.visible = false
      this.$nextTick(() => {
        this.pokemon = sample(list)
      })
    },
    callNext () {
      this.visible = true
      setTimeout(() => this.next(), 2500)
    },
    onError () {
      this.callNext()
    },
    onSuccess() {
      this.callNext()
    }
  },
  render(h) {
    return (
      <div>
        <section class="hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Who's that Pokemon
              </h1>
              <h2 class="subtitle">
                Test your knowledge
              </h2>
            </div>
          </div>
        </section>
        <PokemonCard
          on-error={this.onError}
          on-success={this.onSuccess}
          visible={this.visible}
          pokemon={this.pokemon} />

        <Footer />
      </div>
    )
  }
})