<template>
  <div :class="{'showSuggestions': showSuggestions}" class="search-box">

    <div class="con-input">

      <input
        placeholder="Search"
        @input="query = $event.target.value"
        aria-label="Search"
        :value="query"
        :class="{ 'focused': focused }"
        autocomplete="off"
        spellcheck="false"
        @focus="focused = true"
        @keyup.enter="go(focusIndex)"
        @keyup.up="onUp"
        @keyup.down="onDown"
        @blur="focused = false"
      >
      <i class='bx bx-search' ></i>
    </div>
    <ul
      class="suggestions"
      v-if="showSuggestions"
      :class="{ 'align-right': alignRight }"
      @mouseleave="unfocus"
    >
      <li
        class="suggestion"
        v-for="(s, i) in suggestions"
        :class="{ focused: i === focusIndex }"
        @mousedown="go(i)"
        @mouseenter="focus(i)"
      >
        <a :href="s.path" @click.prevent>
          <span class="page-title">{{ s.title || s.path }}</span>
          <span v-if="s.header" class="header">&gt; {{ s.header.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
/* global SEARCH_MAX_SUGGESTIONS, SEARCH_PATHS */
export default {
  data () {
    return {
      query: '',
      focused: false,
      focusIndex: 0
    }
  },

  computed: {
    showSuggestions () {
      return (
        this.focused
        && this.suggestions
        && this.suggestions.length
      )
    },

    suggestions () {
      const query = this.query.trim().toLowerCase()
      if (!query) {
        return
      }

      const { pages } = this.$site
      const max = SEARCH_MAX_SUGGESTIONS
      const localePath = this.$localePath
      const matches = item => (
        item.title
        && item.title.toLowerCase().indexOf(query) > -1
      )
      const res = []
      for (let i = 0; i < pages.length; i++) {
        if (res.length >= max) break
        const p = pages[i]
        // filter out results that do not match current locale
        if (this.getPageLocalePath(p) !== localePath) {
          continue
        }

        // filter out results that do not match searchable paths
        if (!this.isSearchable(p)) {
          continue
        }

        if (matches(p)) {
          res.push(p)
        } else if (p.headers) {
          for (let j = 0; j < p.headers.length; j++) {
            if (res.length >= max) break
            const h = p.headers[j]
            if (matches(h)) {
              res.push(Object.assign({}, p, {
                path: p.path + '#' + h.slug,
                header: h
              }))
            }
          }
        }
      }
      return res
    },

    // make suggestions align right when there are not enough items
    alignRight () {
      const navCount = (this.$site.themeConfig.nav || []).length
      const repo = this.$site.repo ? 1 : 0
      return navCount + repo <= 2
    }
  },

  methods: {
    getPageLocalePath (page) {
      for (const localePath in this.$site.locales || {}) {
        if (localePath !== '/' && page.path.indexOf(localePath) === 0) {
          return localePath
        }
      }
      return '/'
    },

    isSearchable (page) {
      let searchPaths = SEARCH_PATHS

      // all paths searchables
      if (searchPaths === null) { return true }

      searchPaths = Array.isArray(searchPaths) ? searchPaths : new Array(searchPaths)

      return searchPaths.filter(path => {
        return page.path.match(path)
      }).length > 0
    },

    onUp () {
      if (this.showSuggestions) {
        if (this.focusIndex > 0) {
          this.focusIndex--
        } else {
          this.focusIndex = this.suggestions.length - 1
        }
      }
    },

    onDown () {
      if (this.showSuggestions) {
        if (this.focusIndex < this.suggestions.length - 1) {
          this.focusIndex++
        } else {
          this.focusIndex = 0
        }
      }
    },

    go (i) {
      if (!this.showSuggestions) {
        return
      }
      this.$router.push(this.suggestions[i].path)
      this.query = ''
      this.focusIndex = 0
    },

    focus (i) {
      this.focusIndex = i
    },

    unfocus () {
      this.focusIndex = -1
    }
  }
}
</script>

<style lang="stylus">
.con-input
  display flex
  align-items center
  justify-content center
  padding 10px 10px 10px 0px
  width 100%
  i
    position absolute
    right 15px
    pointer-events none
    opacity .5
    transition all .25s ease
    width 30px
    height 30px
    display flex
    align-items center
    justify-content center
    border-radius 11px
.search-box
  display inline-block
  position relative
  margin-right 0rem !important
  z-index 8000 !important
  width 100%
  &.showSuggestions
    ~ .sidebar-links, .nav-links
      filter blur(2px)
      opacity .6
  input
    cursor text
    color lighten($textColor, 25%)
    display inline-block
    border-radius 0px 11px 11px 0px
    font-size 0.9rem
    line-height 2rem
    padding 0 1rem
    outline none
    transition all .2s ease
    background #fff
    background-size 1rem
    width 100%
    border 1px solid transparent
    padding-left 25px
    &:hover
      &::placeholder
        color lighten($textColor, 40%)
      + i
        opacity .7
    &::placeholder
      color lighten($textColor, 60%)
    &:focus
      transform translate(0,-2px)
      cursor auto
      box-shadow 0px 7px 10px -5px rgba(0,0,0,.04)
      border 1px solid transparent
      &::placeholder
        color lighten($textColor, 45%)
      + i
        opacity 1
        background $accentColor
        transform translate(0,-7px)
        color rgb(255,255,255)
        box-shadow 0px 7px 10px -5px alpha($accentColor, .4)
  .suggestions
    background #fff
    width calc(100% - 15px)
    position absolute
    top 1.5rem
    border 1px solid transparent
    border-radius 6px
    margin 0px 10px
    margin-left 5px
    padding 0.3rem
    list-style-type none
    z-index 5000 !important
    box-shadow 0px 25px 20px -20px rgba(0,0,0,.08)
    margin-top 20px
    &.align-right
      right 0
  .suggestion
    line-height 1.4
    padding 0.4rem 0.6rem
    border-radius 4px
    cursor pointer
    font-size .9rem
    transition all .25s ease

    a
      white-space normal
      color lighten($textColor, 35%)
      display flex
      align-items center
      justify-content flex-start
      .page-title
        font-weight 600
      .header
        font-size 0.9em
        margin-left 0.25em
    &.focused
      background-color #f5f7fb
      a
        color $accentColor

@media (max-width: $MQNarrow)
  .search-box
    input
      cursor pointer
      width 0
      border-color transparent
      position relative
      &:focus
        cursor text
        left 0
        width 10rem

// Match IE11
@media all and (-ms-high-contrast: none)
  .search-box input
    height 2rem

@media (max-width: $MQNarrow) and (min-width: $MQMobile)
  .search-box
    .suggestions
      left 0

@media (max-width: $MQMobile)
  .search-box
    margin-right 0
    input
      left 1rem
    .suggestions
      right 0

@media (max-width: $MQMobileNarrow)
  .search-box
    .suggestions
      width calc(100vw - 4rem)
    input:focus
      width 8rem
</style>
