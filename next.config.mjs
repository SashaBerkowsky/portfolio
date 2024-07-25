/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config, { isServer }) => {
		// Add file-loader to handle gltf files
		config.module.rules.push({
			test: /\.(glb)$/,
			use: [
				{
					loader: "file-loader",
					options: {
						publicPath: "/_next/static/interests/", // Adjust the public path as needed
						outputPath: "static/interests/", // Adjust the output path as needed
					},
				},
			],
		});

		return config;
	},
};

export default nextConfig;
