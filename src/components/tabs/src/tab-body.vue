<script>
export default {
  name: "ui-tab-body",
  render() {
    var target = this.contents.find(item => {
      return item.propsData.name === this.curName;
    });
    return <div class="ui-tab-content">{target.children[0]}</div>;
  },
  props: ["contents", "curName"]
};
</script>

<style></style>
