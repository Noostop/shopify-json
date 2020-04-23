<template>
	<div class="container">
		<h2>数据列表</h2>
		<el-table :data="items" style="width: 100%">
			<el-table-column label="ID" width="60">
				<template slot-scope="scope">
					<span>{{ scope.row.id }}</span>
				</template>
			</el-table-column>
			<el-table-column label="name">
				<template slot-scope="scope">
					<span>{{ scope.row.name }}</span>
				</template>
			</el-table-column>
			<el-table-column label="Alexa">
				<template slot-scope="scope">
					<span>{{ scope.row.alexa }}</span>
				</template>
			</el-table-column>
			<el-table-column label="URL">
				<template slot-scope="scope">
					<a :href="scope.row.url">{{ scope.row.name }}</a>
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<h2 style="margin: 20px 0;">添加修改数据</h2>
		<el-form label-width="80px" :model="formLabelAlign">
			<el-form-item label="名称">
				<el-input v-model="formLabelAlign.name"></el-input>
			</el-form-item>
			<el-form-item label="地址">
				<el-input v-model="formLabelAlign.url"></el-input>
			</el-form-item>
			<el-form-item label="Alexa">
				<el-input v-model="formLabelAlign.alexa"></el-input>
			</el-form-item>
			<el-form-item label="国家">
				<el-input v-model="formLabelAlign.country"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('add')">{{this.stata === 'add' ? "添加" : "更新"}}</el-button>
				<el-button @click="reset()">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		name: "Hello",
		data() {
			return {
				stata: "add",
				items: [],
				formLabelAlign: {
					name: "",
					url: "",
					alexa: "",
					country: ""
				}
			};
		},

		mounted() {
			this.getList();
		},

		methods: {
			handleEdit(index, row) {
				this.stata = "update";
				this.formLabelAlign = row;
			},
			handleDelete(index, row) {
				this.axios
					.get("/api/delete", {
						params: {
							id: row.id
						}
					})
					.then(res => {
						this.items = res.data;
						this.$notify({
							title: "成功",
							message: "删除成功",
							type: "success"
						});
					})
					.catch(err => {
						// console.log(err);
						throw err(err);
					});
			},
			getList() {
				this.axios("/api").then(res => {
					// console.log(res.data);
					this.items = res.data;
				});
			},
			reset() {
				this.stata = "add";
				this.formLabelAlign = {
					name: "",
					url: "",
					alexa: "",
					country: ""
				};
			},
			submitForm(type) {
				const url = this.stata === type ? "/api/add" : "/api/update";
				this.axios
					.get(url, {
						params: {
							...this.formLabelAlign
						}
					})
					.then(res => {
						if (res.status == 200) {
							this.items = res.data;
							this.$notify({
								title: "成功",
								message: "添加成功",
								type: "success"
							});
						}
					})
					.catch(err => {
						this.$notify({
							title: "失败",
							message: `添加失败${err}`,
							type: "error"
						});
					});
			}
		}
	};
</script>


<style lang="scss" scoped>
	.container {
		max-width: 960px;
		margin: 0 auto;
	}
</style>