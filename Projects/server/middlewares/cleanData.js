import sanitizeHTML from "sanitize-html";

const cleanJam3iyaData = (req, res, next) => {
  if (
    typeof req.body.name !== "string"
  )
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

export { cleanJam3iyaData };
