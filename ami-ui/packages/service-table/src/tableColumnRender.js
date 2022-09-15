/**
 * @description：封装表格render渲染
 * @author：
 * @date：Created in 2021/17/11
 * @modified By：
 * @version: 1.0.0
 */
const tableColumnRender = {
  functional: true,
  props: {
    row: Object,
    render: Function,
    index: Number,
    column: {
      type: Object,
      default: null
    }
  },
  render: (h, data) => {
    const params = {
      row: data.props.row,
      index: data.props.index
    };
    if (data.props.column) params.column = data.props.column;
    return data.props.render(h, params);
  }
};
export default tableColumnRender;
