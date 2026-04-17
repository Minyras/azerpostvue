<script lang="ts">
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("credit", ["credits", "loading", "error"]),
  },

  methods: {
    ...mapActions("credit", ["fetchCredits"]),
    formatDate: (dateStr: Date) => {
      return new Date(dateStr).toISOString().split("T")[0];
    },
  },

  mounted() {
    this.fetchCredits();
  },
};
</script>

<template>
  <div class="credit-container">
    <div class="filter-buttons">
      <button>Bütün kreditlər</button>
      <button>Aktiv</button>
      <button>Bağlı</button>
    </div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">
      {{ error }}
    </div>
    <div class="credit-cards" v-else>
      <div v-for="credit in credits" :key="credit.id">
        <div class="credit-card">
          <div class="name">
            <span>Online kredit</span>
            <p>
              Müddət: {{ formatDate(credit.startDate) }} -
              {{ formatDate(credit.endDate) }}
            </p>
          </div>

          <div class="duration">
            <p>Müddət</p>
            <span>{{ credit.duration }} AY</span>
          </div>

          <div class="amount">
            <p>Məbləğ</p>
            <span>{{ credit.amount }} AZN</span>
          </div>

          <div class="percent">
            <p>Kredit faizi</p>
            <span>{{ credit.interestRate }}%</span>
          </div>

          <div class="right">
            <p :class="['status', credit.status]">{{ credit.status }}</p>
            <button class="detailed">Ətraflı bax</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.credit-container {
  width: 100%;
}
.filter-buttons {
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  button {
    padding: 8px 14px;
    font-size: 12px;
    border: 1px solid #cdd5df;
    border-radius: 8px;
    background-color: white;
  }
}
.credit-cards {
  border: 1px solid #e2e8f0;
  margin: 15px;
  padding: 0 10px;
  border-radius: 10px;
}
.credit-card {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  border-bottom: 1px solid #e2e8f0;
  gap: 30px;

  .duration,
  .amount,
  .percent {
    span {
      font-weight: 900;
      display: inline-block;
      margin-top: 4px;
    }
  }
  .name {
    span {
      font-weight: 900;
      display: inline-block;
      margin-bottom: 4px;
    }
  }
}
.right {
  display: flex;
  gap: 16px;
  align-items: center;
}
.status {
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 14px;
}
.detailed {
  padding: 11px 19px;
  border: 1px solid #94a3b8;
  border-radius: 8px;
  font-size: 14px;
  background-color: white;
}
.status.accepted {
  background: #edfcf2;
  color: #00826d;
}

.status.pending {
  background: #f1f5f9;
}

.status.rejected {
  background: #fee2e2;
}
</style>
