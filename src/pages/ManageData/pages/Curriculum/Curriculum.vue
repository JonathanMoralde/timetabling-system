<template>
  <main class="manage-rooms">
    <!-- title & btn -->
    <div class="flex justify-between items-center q-mb-lg">
      <h3 class="text-h5 q-ma-none text-bold" style="font-size: 2rem">
        Manage Curriculum
      </h3>

      <div>
        <!-- add btn -->
        <q-btn
          :color="$q.dark.isActive ? 'white' : 'primary'"
          :text-color="$q.dark.isActive ? 'primary' : 'white'"
          label="Add Curriculum"
          dense
          class="q-px-md q-py-xs q-mr-md"
          to="add-curriculum"
        />

        <!-- export btn -->
        <q-btn
          :class="$q.dark.isActive ? 'bg-dark' : 'bg-white'"
          :color="$q.dark.isActive ? 'white' : 'grey-10'"
          label="Export as Excel"
          dense
          outline
          class="q-px-md q-py-xs"
          @click="console.log('clicked')"
        />
      </div>
    </div>

    <!-- filters -->
    <div class="row q-mb-lg">
      <q-input
        outlined
        v-model="text"
        label="Search"
        dense
        class="col-2 q-mr-md"
        :bg-color="$q.dark.isActive ? 'dark' : 'white'"
      >
        <template v-slot:append>
          <q-icon
            v-if="text !== ''"
            name="close"
            class="cursor-pointer"
            @click="text = ''"
          />
          <q-icon name="search" />
        </template>
      </q-input>

      <!-- <q-select
        outlined
        v-model="selected"
        :options="options"
        dense
        label="Square outlined"
        class="col-2"
        :bg-color="$q.dark.isActive ? 'dark' : 'white'"
      /> -->
    </div>

    <section>
      <q-table
        flat
        bordered
        :rows="rows"
        :columns="columns"
        row-key="curriculum_id"
        table-header-class="text-uppercase"
      >
        <template v-slot:body-cell-action="props">
          <q-td :props="props">
            <!-- Action Column -->
            <div>
              <q-btn
                :color="$q.dark.isActive ? 'white' : 'black'"
                icon="more_vert"
                flat
                round
                dense
                @click.stop
              >
                <q-menu
                  flat
                  :offset="[-5, 0]"
                  anchor="bottom left"
                  self="top right"
                  class="menu-container q-py-sm"
                >
                  <q-list data-cy="statusOptions" class="menu q-py-xs">
                    <!-- Edit -->
                    <q-item
                      clickable
                      v-close-popup
                      class="menu-list"
                      @click="
                        $router.push(
                          `add-curriculum/${props.row.curriculum_id}`
                        )
                      "
                    >
                      <q-item-section>Edit</q-item-section>
                    </q-item>

                    <!-- Delete -->
                    <q-item
                      clickable
                      v-close-popup
                      class="menu-list"
                      @click="handleDel(props.row.curriculum_id)"
                    >
                      <q-item-section>Delete</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
            </div>
          </q-td>
        </template>
      </q-table>
    </section>
  </main>
</template>

<script lang="ts" src="./scripts/Curriculum.ts"></script>

<style scoped></style>
