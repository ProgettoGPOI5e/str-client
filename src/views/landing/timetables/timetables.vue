<template>
  <main class="main">
    <aside class="section-list">
      <ul class="list">
        <li
          v-for="(line, index) in lines"
          class="line"
          :key="index"
          :class="{ 'line--active': line.name === selected.name }"
          @click="selected = line"
        >
          <p class="line__name">
            <span class="icon">
              <i class="fas fa-subway"></i>
            </span>
            <span class="crop">{{ line.name }}</span>
          </p>
          <p class="line__info">{{ line.info }}</p>
          <p class="line__timetable">{{ line.timetable }}</p>
        </li>
      </ul>
    </aside>
    <section class="section-map">
      <transition name="fade">
        <img
          :src="'/maps/' + selected.img"
          alt="Mappa"
          class="map"
          :key="selected.img"
        >
      </transition>
    </section>
  </main>
</template>

<script>
export default {
  data () {
    return {
      lines: [{
        name: 'Linea A',
        info: 'Battistini > Anagnina',
        timetable: '04:05 - 23:30',
        img: 'a.png'
      }, {
        name: 'Linea B',
        info: 'Laurentina > Rebibbia/Jonio',
        timetable: '04:05 - 23:30',
        img: 'b.png'
      }, {
        name: 'Linea C',
        info: 'Pantano > San Giovanni',
        timetable: '4:05 - 23:30',
        img: 'c.png'
      }],
      selected: {
        name: 'Linea A',
        img: 'a.png'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.main {
  display: grid;
  min-height: 90rem;
  grid-template-columns: 30rem auto;

  @include respond(tab-land) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 50vh;
  }

  .section-list {
    background-color: $color-secondary;

    .list {
      padding: 0;
      .line {
        padding: 1.5rem;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        list-style: none;

        &--active,
        &:hover {
          background-color: darken($color-secondary, 5%);
        }

        &:not(:last-child) {
          border-bottom: 1px solid $color-text-tertiary;
        }

        &__name {
          font-size: 1.6rem;

          .icon {
            margin-right: 1rem;
          }
        }

        &__info {
          font-size: 1.4rem;
        }
      }
    }
  }

  .section-map {
    position: relative;

    .map {
      height: 100%;
      display: block;
      @include absCenter;
    }
  }
}
</style>
