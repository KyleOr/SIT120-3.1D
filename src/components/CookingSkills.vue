<template>
    <div class="section">
      <h2 class="section-title">Cooking Skills</h2>
      <p class="section-subtitle">Skills you have bookmarked to practice</p>
  
      <v-btn @click="openEditDialog()">Add Skill</v-btn>
  
      <div class="cooking-skill-container">
        <div v-for="(skillBox, index) in skillBoxes" :key="index" class="cooking-skill-box">
          <div class="cooking-skill-content" @click="openEditDialog(index)">
            <h3 class="cooking-skill-title">{{ skillBox.title }}</h3>
            <p class="cooking-skill-description">{{ skillBox.description }}</p>
          </div>
        </div>
      </div>
  
      <!-- Edit Skill Dialog -->
      <v-dialog v-model="dialogVisible" max-width="400">
        <v-card>
          <v-card-title>{{ editedSkillBoxIndex !== null ? 'Edit Skill Box' : 'Add Skill Box' }}</v-card-title>
          <v-card-text>
            <v-text-field v-model="editedTitle" label="Title"></v-text-field>
            <v-textarea v-model="editedDescription" label="Description"></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="saveSkillBox">{{ editedSkillBoxIndex !== null ? 'Save' : 'Add' }}</v-btn>
            <v-btn color="red" @click="closeEditDialog">Cancel</v-btn>
            <v-btn v-if="editedSkillBoxIndex !== null" color="red" @click="deleteSkillBox(editedSkillBoxIndex)">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        skillBoxes: [
          {
            title: 'Skill 1',
            description: 'Add more details',
          },
          {
            title: 'Skill 2',
            description: 'Add more details',
          },
        ],
        dialogVisible: false,
        editedTitle: '',
        editedDescription: '',
        editedSkillBoxIndex: null,
      };
    },
    methods: {
      openEditDialog(index) {
        if (index !== undefined) {
          this.editedTitle = this.skillBoxes[index].title;
          this.editedDescription = this.skillBoxes[index].description;
          this.editedSkillBoxIndex = index;
        } else {
          this.editedTitle = '';
          this.editedDescription = '';
          this.editedSkillBoxIndex = null;
        }
        this.dialogVisible = true;
      },
      saveSkillBox() {
        if (this.editedSkillBoxIndex !== null) {
          this.skillBoxes[this.editedSkillBoxIndex].title = this.editedTitle;
          this.skillBoxes[this.editedSkillBoxIndex].description = this.editedDescription;
        } else {
          this.skillBoxes.push({
            title: this.editedTitle,
            description: this.editedDescription,
          });
        }

        this.closeEditDialog();
      },
      deleteSkillBox(index) {
        this.skillBoxes.splice(index, 1);
        if (this.editedSkillBoxIndex === index) {
          this.closeEditDialog();
        }
      },
      closeEditDialog() {
        this.dialogVisible = false;
        this.editedTitle = '';
        this.editedDescription = '';
        this.editedSkillBoxIndex = null;
      },
    },
  };
  </script>
  
  <style scoped>
.cooking-skills {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cooking-skill-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr)); 
  grid-gap: 20px;
  margin-top: 20px;
}

.cooking-skill-box {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  transition: transform 0.2s;
  text-decoration: none;
  color: #333;
}

.cooking-skill-box:hover {
  transform: translateY(-5px);
}

.cooking-skill-content {
  padding: 20px;
}

.cooking-skill-title {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
}
</style>