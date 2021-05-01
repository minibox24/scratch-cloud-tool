<template>
  <div class="view">
    <span class="title">Scratch Cloud Tool</span>
    <div class="options">
      <label class="option" for="nickname">
        <span class="input-label">닉네임</span>
        <input id="nickname" class="input">
      </label>
      <label class="option" for="project-id">
        <span class="input-label">프로젝트 ID</span>
        <input id="project-id" class="input">
      </label>
    </div>
    <button class="connect">서버 연결</button>
  </div>
</template>

<style scoped>
.view {
  display: flex;
  flex-direction: column;
}

.title {
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
}

.options {
  display: flex;
  flex-direction: column;
  margin-left: 1.2rem;
  margin-right: 1.2rem;
}

.option {
  display: flex;
  margin-bottom: .5rem;
  justify-content: center;
  align-items: center;
}

.input-label {
  margin-right: auto;
}

.input {
  border: none;
  padding: .5rem;
  background-color: #40444B;
  border-radius: 8px;
  color: white;
}

.input:focus {
  outline: none;
  border: 2px solid #5b606a;
}

.connect {
  padding: .5rem;
  background-color: #43b581;
  border-radius: 3px;
  color: white;
  border: none;
  margin: .5rem 1rem;
}

.connect:hover {
  background-color: #3ca374;
}

.connect:focus {
  outline: none;
}

.connect:active {
  background-color: #369167;
}
</style>
