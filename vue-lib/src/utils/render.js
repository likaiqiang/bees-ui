export default {
    name: 'RenderCell',
    functional: true,
    props: {
        render: Function
    },
    render: (h, ctx) => {
        console.log(ctx,this)
        return ctx.props.render(h);
    }
};