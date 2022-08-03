import sanitizeHTML from "sanitize-html";

const cleanJam3iyaData = (req, res, next) => {
  if (typeof req.body.name !== "string")
    return res.status(500).json({ success: false, message: "Bad data" });

  req.cleanData = {
    ...req.body,
    name: sanitizeHTML(req.body.name.trim(), {
      allowedTags: [],
      allowedAttributes: {},
    }),
  };
  next();
};
const cleanActivityData = (req, res, next) => {
  if (
    typeof req.body.title !== "string" ||
    typeof req.body.content !== "string"
  )
    return res.status(500).json({ success: false, message: "Bad data" });
  req.cleanData = {
    ...req.body,
    title: sanitizeHTML(req.body.title.trim(), {
      allowedTags: [],
      allowedAttributes: {},
    }),
    content: sanitizeHTML(req.body.content.trim(), {
      allowedTags: [],
      allowedAttributes: {},
    }),
    jam3iya_id: req.params.id,
  };
  next();
};
export { cleanJam3iyaData, cleanActivityData };
