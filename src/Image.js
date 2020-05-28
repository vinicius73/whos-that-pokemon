export default {
  name: 'PokeImage',
  props: {
    pokemon: String,
    visible: Boolean
  },
  render (h) {
    const visibleClass = this.visible ? 'visible' : null
    return (
      <img
        class={`${visibleClass} pokemon-image`}
        src={`https://img.pokemondb.net/sprites/home/normal/${this.pokemon}.png`} />
    )
  }
}